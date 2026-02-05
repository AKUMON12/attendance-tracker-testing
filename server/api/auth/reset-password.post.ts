import bcrypt from 'bcryptjs';
import { User } from '../../models/User';

export default defineEventHandler(async (event) => {
    const { email, newPassword } = await readBody(event);

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.findOneAndUpdate(
        { email },
        { password: hashedPassword },
        { new: true }
    );

    if (!user) throw createError({ statusCode: 404, message: 'User not found' });

    return { message: 'Password updated successfully' };
});