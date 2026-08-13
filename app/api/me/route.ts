import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) {
            return NextResponse.json({ message: "Not logged in" }, { status: 401 });
        }

        const decoded = jwt.verify(token, 'access') as { username: string };
        return NextResponse.json({ username: decoded.username }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: "Not logged in" }, { status: 401 });
    }
}
