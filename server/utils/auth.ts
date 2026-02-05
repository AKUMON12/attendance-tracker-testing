import jwt from 'jsonwebtoken';

export const verifyToken = (event: any) => {
    const authHeader = getHeader(event, 'authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const config = useRuntimeConfig();
    const secret = config.jwtSecret as unknown as string; // Force it to string

    if (!secret) {
        throw createError({ statusCode: 500, statusMessage: 'JWT_SECRET missing' });
    }

    try {
        // We cast the function itself to 'any' to bypass the overload check
        // but still get the result we need.
        return (jwt.verify as any)(token, secret);
    } catch (err) {
        throw createError({ statusCode: 401, statusMessage: 'Invalid token' });
    }
};