import { Attendance } from '../../models/Attendance';

export default defineEventHandler(async (event) => {
    // Example: Aggregate total hours worked by all users today
    const stats = await Attendance.aggregate([
        { $match: { date: new Date().toISOString().split('T')[0] } },
        { $group: { _id: null, totalHours: { $sum: "$totalHours" }, activeUsers: { $sum: 1 } } }
    ]);
    return stats[0] || { totalHours: 0, activeUsers: 0 };
});