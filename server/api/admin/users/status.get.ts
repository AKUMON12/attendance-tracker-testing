import { User } from '../../../models/User';

export default defineEventHandler(async (event) => {
    // Return only necessary fields for the dashboard list
    return await User.find({}, 'name email status warnings');
});