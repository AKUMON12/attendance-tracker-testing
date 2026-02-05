import { User } from '../../../models/User';
import { verifyToken } from '../../../utils/auth';

export default defineEventHandler(async (event) => {
    const decoded: any = verifyToken(event);

    if (decoded.role !== 'admin') {
        throw createError({ statusCode: 403, statusMessage: 'Forbidden: Admins only' });
    }

    const { userId, increment } = await readBody(event);

    const user = await User.findByIdAndUpdate(
        userId,
        { $inc: { warnings: increment ? 1 : -1 } },
        { new: true }
    );

    // FIX: Check if the user actually exists
    if (!user) {
        throw createError({
            statusCode: 404,
            statusMessage: 'User not found in database'
        });
    }

    return {
        message: `Warnings updated for ${user.name}`,
        currentWarnings: user.warnings
    };
});