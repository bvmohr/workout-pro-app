import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send API request
        alert(`Email: ${email} Password: ${password}`);
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email Address 
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>Password 
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <input type="submit" />
            </form>
        </>
    );
}