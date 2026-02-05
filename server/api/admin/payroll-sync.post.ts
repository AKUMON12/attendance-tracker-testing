import { Attendance } from '../../models/Attendance';
import { verifyToken } from '../../utils/auth';

export default defineEventHandler(async (event) => {
    const decoded: any = verifyToken(event);
    if (decoded.role !== 'admin') {
        throw createError({ statusCode: 403, message: 'Admin access only' });
    }

    const { startDate, endDate } = await readBody(event);

    // Fetch all completed attendance records in the date range
    const data = await Attendance.find({
        date: { $gte: startDate, $lte: endDate },
        checkOut: { $exists: true }
    }).populate('userId', 'name email');

    // Map data to a "Payroll Ready" format
    const payrollReport = data.map(entry => {
        const overtime = entry.totalHours > 8 ? entry.totalHours - 8 : 0;
        const penalty = entry.totalHours < 4 ? 50 : 0; // Example penalty logic

        return {
            employee: (entry.userId as any).name,
            hours: entry.totalHours.toFixed(2),
            overtime: overtime.toFixed(2),
            penalty: penalty,
            finalPayableHours: (entry.totalHours - (penalty / 100)).toFixed(2)
        };
    });

    return {
        syncDate: new Date(),
        count: payrollReport.length,
        report: payrollReport
    };
});