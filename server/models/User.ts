import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    warnings: { type: Number, default: 0 },
    status: { type: String, enum: ['present', 'absent', 'on_break', 'remote'], default: 'absent' }
}, { timestamps: true });

export const User = model('User', userSchema);