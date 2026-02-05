import bcrypt from 'bcryptjs';
import { User } from '../../models/User';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (!body.email || !body.password || !body.name) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing required fields'
        });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    try {
        const newUser = await User.create({
            name: body.name,
            email: body.email,
            password: hashedPassword,
            role: body.role || 'user'
        });

        return {
            status: 'success',
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                email: newUser.email
            }
        };
    } catch (error: any) {
        if (error.code === 11000) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Registration Failed: This email is already in use.'
            });
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error'
        });
    }
});
