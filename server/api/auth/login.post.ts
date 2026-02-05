import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../models/User';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const config = useRuntimeConfig();

    // 1. Safety check for the Secret
    if (!config.jwtSecret) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Server Error: JWT_SECRET is not defined in runtime config'
        });
    }

    // 2. Find the user first
    const user = await User.findOne({ email: body.email });

    // 3. Validate user existence and password
    if (!user || !(await bcrypt.compare(body.password, user.password))) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password'
        });
    }

    // 4. Generate the Token (Only once, after we know the user is valid)
    const token = jwt.sign(
        { id: user._id, role: user.role },
        config.jwtSecret as string,
        { expiresIn: '1d' }
    );

    // 5. Return success
    return {
        status: 'success',
        token,
        user: {
            name: user.name,
            role: user.role
        }
    };
});