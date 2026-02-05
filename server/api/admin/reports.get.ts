import { Attendance } from '../../models/Attendance';

export default defineEventHandler(async (event) => {
    const query = getQuery(event); // ?userId=...&month=02
    const filter: any = {};

    if (query.userId) filter.userId = query.userId;
    if (query.date) filter.date = { $regex: query.date }; // Simple string match for YYYY-MM

    const reports = await Attendance.find(filter).populate('userId', 'name email');

    return reports;
});