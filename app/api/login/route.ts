import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { readUsers } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();
        if (!username || !password) {
            return NextResponse.json({ message: "Error logging in" }, { status: 404 });
        }

        const users = readUsers();
        const valid = users.some(user => user.name === username && user.password === password);

        if (valid) {
            // Generate JWT access token
            const accessToken = jwt.sign(
                { username },
                'access',
                { expiresIn: '1h' }
            );

            const response = NextResponse.json({ message: "User successfully logged in" }, { status: 200 });

            // Set cookie
            response.cookies.set('token', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600, // 1 hour
                path: '/',
            });

            return response;
        } else {
            return NextResponse.json({ message: "Invalid Login. Check username and password" }, { status: 208 });
        }
    } catch (e) {
        return NextResponse.json({ message: "Invalid payload or server error" }, { status: 500 });
    }
}
