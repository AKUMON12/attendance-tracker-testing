import { Attendance } from '../../models/Attendance';
import { User } from '../../models/User';
import { verifyToken } from '../../utils/auth';

export default defineEventHandler(async (event) => {
    // 1. Identify the user
    const decoded: any = verifyToken(event);
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();

    // 2. Find today's specific record for this user
    const record = await Attendance.findOne({
        userId: decoded.id,
        date: today
    });

    // 3. Validation: Can't clock out if you never clocked in
    if (!record) {
        throw createError({
            statusCode: 404,
            statusMessage: 'No clock-in record found for today.'
        });
    }

    // 4. Validation: Can't clock out twice
    if (record.checkOut) {
        throw createError({
            statusCode: 400,
            statusMessage: 'You have already clocked out today.'
        });
    }

    // 5. Update the record
    record.checkOut = now;

    // 6. Calculate total hours worked
    if (record.checkIn) {
        const checkInTime = new Date(record.checkIn).getTime();
        const checkOutTime = now.getTime();

        // Difference in milliseconds converted to decimal hours
        const diffInMs = checkOutTime - checkInTime;
        record.totalHours = Number((diffInMs / (1000 * 60 * 60)).toFixed(2));
    }

    await record.save();

    // 7. Update user status back to absent
    await User.findByIdAndUpdate(decoded.id, { status: 'absent' });

    return {
        message: 'Clock-out successful',
        totalHours: record.totalHours,
        record
    };
});