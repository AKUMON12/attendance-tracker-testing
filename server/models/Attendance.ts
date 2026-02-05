import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: String, required: true }, // Format: YYYY-MM-DD
    checkIn: { type: Date },
    checkOut: { type: Date },
    lunchBreak: {
        start: { type: Date },
        end: { type: Date }
    },
    totalHours: { type: Number, default: 0 }
});

export const Attendance = mongoose.model('Attendance', AttendanceSchema);