import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getSplits } from '@/lib/db';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) {
            return NextResponse.json({ message: "User not logged in" }, { status: 401 });
        }

        try {
            jwt.verify(token, 'access');
        } catch (err) {
            return NextResponse.json({ message: "User not authenticated" }, { status: 403 });
        }

        return NextResponse.json(getSplits(), { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
