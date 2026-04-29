import { useState } from 'react';

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h1>Login</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="jon2snow" /><br />
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="c00lp$wd" /><br />
                <input type="submit" />
            </form>
        </>
    );
}