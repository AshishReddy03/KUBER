import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from './assets/bg2.png';
import logo from './assets/anasol_logo11.png';

const Login = () => {
    const [role, setRole] = useState('Employee');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (role === 'Employee') {
            navigate('/dashboard');
        } else {
            alert('Admin login is not available yet');
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative px-4 pr-200"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Logo Top Left */}
            <div className="absolute top-6 left-6 flex items-center space-x-3 ps-25">
                <img src={logo} alt="Anasol Logo" className="w-40 h-auto" />
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-black leading-tight">ANASOL</h1>
                    <p className="text-xl text-black tracking-wide">CONSULTANCY</p>
                    <p className="text-xl text-black tracking-wide">SERVICES</p>
                </div>
            </div>

            {/* Role Toggle Buttons */}
            <div className="mb-4 flex space-x-4 z-10 mt-35">
                <button
                    onClick={() => setRole('Admin')}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                        role === 'Admin'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                >
                    Admin
                </button>
                <button
                    onClick={() => setRole('Employee')}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                        role === 'Employee'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                >
                    Employee
                </button>
            </div>

            {/* Login Box */}
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-8 transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">{role} Login</h2>

                <form className="space-y-5" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md transition duration-300"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
