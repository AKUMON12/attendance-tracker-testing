import mongoose from 'mongoose';

export default defineNitroPlugin(async () => {
    const config = useRuntimeConfig();

    if (mongoose.connection.readyState === 1) return;

    try {
        await mongoose.connect(config.mongodbUri);
        console.log('--- ✅ MongoDB Connected: Attendance Tracker ---');
    } catch (err) {
        console.error('--- ❌ MongoDB Connection Error ---', err);
    }
});