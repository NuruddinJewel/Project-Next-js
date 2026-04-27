'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register, hanlesubmit } = useForm();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        // <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
        //     <div className='p-4 rounded-xl bg-white'>
        //         <h2 className='font-bold text-3xl text-center'>Login your Account</h2>
        //         <form>
        //             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        //                 <legend className="fieldset-legend">Login</legend>

        //                 <label className="label">Email</label>
        //                 <input type="email" className="input" placeholder="Email" />

        //                 <label className="label">Password</label>
        //                 <input type="password" className="input" placeholder="Password" />

        //                 <button className="btn btn-neutral mt-4">Login</button>
        //             </fieldset>

        //         </form>
        //     </div>
        // </div>
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-slate-100'>
            <div className='w-full max-w-md p-8 bg-white'>
                {/* Title Section */}
                <h2 className='font-bold text-xl text-center text-gray-800 mb-8'>Login your account</h2>

                <div className="border-t border-gray-100 mb-10"></div>

                <form className="space-y-4" onSubmit={handleLogin}>
                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700 ml-1">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                            placeholder="Enter your email address"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700 ml-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-[#404040] hover:bg-black text-white font-bold py-4 rounded-lg mt-4 transition-colors">
                        Login
                    </button>
                </form>

                {/* Footer Link */}
                <p className="text-center mt-8 text-gray-600 font-medium">
                    {"Don't Have An Account?"} <Link href={'/register'} className="text-red-500 cursor-pointer hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;