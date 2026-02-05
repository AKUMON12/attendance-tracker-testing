import { Attendance } from '../../models/Attendance';
import { User } from '../../models/User';
import { verifyToken } from '../../utils/auth';

export default defineEventHandler(async (event) => {
    // This identifies the user. If it fails here, the token is the issue.
    const decoded: any = verifyToken(event);
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();

    // 1. Check if they ALREADY clocked in
    const existingRecord = await Attendance.findOne({ userId: decoded.id, date: today });

    if (existingRecord) {
        throw createError({
            statusCode: 400,
            statusMessage: 'You have already clocked in for today.'
        });
    }

    // 2. Create the NEW record
    const record = await Attendance.create({
        userId: decoded.id,
        date: today,
        checkIn: now
    });

    // 3. Update user status
    await User.findByIdAndUpdate(decoded.id, { status: 'present' });

    return {
        message: 'Clock-in successful',
        record
    };
});