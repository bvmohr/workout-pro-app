import { NextResponse } from 'next/server';
import { readUsers, writeUsers } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();
        if (!username || !password) {
            return NextResponse.json({ message: "Error registering user" }, { status: 404 });
        }

        const users = readUsers();
        const exists = users.some(user => user.name === username);

        if (exists) {
            return NextResponse.json({ message: "User already exists!" }, { status: 404 });
        }

        users.push({ name: username, password });
        writeUsers(users);

        return NextResponse.json({ message: "User successfully registered. Now you can login" }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: "Invalid payload or server error" }, { status: 500 });
    }
}
