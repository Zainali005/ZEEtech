// app/reset-password/[token]/page.tsx
"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { API_URL } from '@/app/utils/api';

const ResetPassword = () => {
    const path = usePathname();

    const token = path;
    console.log(token, "thisis the token");

    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (!token) {
            toast.loading('Waiting for token...');
            return;
        }
    }, [token]);

    const handleReset = async (e) => {
        e.preventDefault();
        if (!token) {
            setMessage("Token is not available.");
            return;
        }
        try {
            const response = await axios.post(`${API_URL}/${token}`, { password: newPassword });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response ? error.response.data.message : "An error occurred.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
            <form onSubmit={handleReset} className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    Reset Password
                </button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

export default ResetPassword;
