import { Attendance } from '../../models/Attendance';
import { User } from '../../models/User';
import { verifyToken } from '../../utils/auth';

export default defineEventHandler(async (event) => {
    const decoded: any = verifyToken(event);
    const body = await readBody(event);
    const { action } = body;

    const today = new Date().toISOString().split('T')[0];
    const now = new Date();

    // 1. Fetch record
    let record = await Attendance.findOne({ userId: decoded.id, date: today });

    // 2. Handle Clock-in separately as it creates the record
    if (action === 'clock-in') {
        if (record) throw createError({ statusCode: 400, message: 'Already clocked in today' });
        record = await Attendance.create({ userId: decoded.id, date: today, checkIn: now });
        await User.findByIdAndUpdate(decoded.id, { status: 'present' });
        return { message: 'Success: clock-in', record };
    }

    // 3. Safety Check: For any other action, the record MUST exist
    if (!record) {
        throw createError({ statusCode: 400, message: 'No active session found. Please clock in first.' });
    }

    // 4. Perform actions on guaranteed record
    switch (action) {
        case 'lunch-start':
            record.lunchBreak = { ...record.lunchBreak, start: now };
            await User.findByIdAndUpdate(decoded.id, { status: 'on_break' });
            break;

        case 'lunch-end':
            if (record.lunchBreak) record.lunchBreak.end = now;
            await User.findByIdAndUpdate(decoded.id, { status: 'present' });
            break;

        case 'clock-out':
            record.checkOut = now;
            // Use Optional Chaining or Type Casting to ensure checkIn exists
            if (record.checkIn) {
                const diff = record.checkOut.getTime() - new Date(record.checkIn).getTime();
                record.totalHours = diff / (1000 * 60 * 60);
            }
            await User.findByIdAndUpdate(decoded.id, { status: 'absent' });
            break;
    }

    await record.save();
    return { message: `Success: ${action}`, record };
});