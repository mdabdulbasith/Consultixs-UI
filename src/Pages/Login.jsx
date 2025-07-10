import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Sending:', { username, password });

        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            console.log('Received login response:', data);

            if (res.ok && data.token) {
                localStorage.setItem('adminToken', data.token);
                console.log('Token saved to localStorage:', data.token);
                navigate('/admin');
            } else {
                setError(data.error || 'Invalid username or password');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Network error');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
                {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-3 px-4 py-2 rounded bg-gray-700 focus:outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 rounded bg-gray-700 focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded text-white font-semibold"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
