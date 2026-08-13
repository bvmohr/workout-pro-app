import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getSplit } from '@/lib/db';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ split: string }> }
) {
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

        const { split } = await params;
        const splitData = getSplit(split);

        if (splitData) {
            return NextResponse.json(splitData, { status: 200 });
        } else {
            return new NextResponse("Workout not found", { status: 404 });
        }
    } catch (e) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
