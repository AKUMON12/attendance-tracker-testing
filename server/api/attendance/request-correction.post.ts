import { Attendance } from '../../models/Attendance';
import { verifyToken } from '../../utils/auth';

export default defineEventHandler(async (event) => {
    const decoded: any = verifyToken(event);
    const { date, requestedTime, type } = await readBody(event); // type: 'clock-in' | 'clock-out'

    // Instead of changing the attendance, we update the status to 'pending'
    // and store the requested change in a 'note' or a separate collection.
    // For this project, let's just mark it for Admin review.

    const record = await Attendance.findOneAndUpdate(
        { userId: decoded.id, date: date },
        { status: 'correction_requested' },
        { new: true }
    );

    if (!record) throw createError({ statusCode: 404, message: 'Record not found' });

    return { message: 'Correction request sent to admin', record };
});