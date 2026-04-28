// import React from 'react';

// const RegisterPage = () => {
//     return (
//         <div>
//             Register
//         </div>
//     );
// };

// export default RegisterPage;

'use client'
import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    // Using React Hook Form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isShowPassword, setisShowPassword] = useState(false)
    const handleRegister = async (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password)
        // console.log(data, "data")
        const { email, name, photo, password } = data;
        // console.log(name, photo)
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        console.log(res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Signup successful")
        }
    }
    // console.log(errors, "errors")
    // console.log(watch('email'))
    // console.log(watch('password'))
    // const { email, name, photo, password } = data;
    // console.log(name, photo)
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
                <h2 className='font-bold text-xl text-center text-gray-800 mb-8'>Register Your Account</h2>

                <div className="border-t border-gray-100 mb-10"></div>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700 ml-1">Name</label>
                        <input
                            type="text"
                            // name="password"
                            className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                            placeholder="Type Your Name"
                            {...register("name", { required: "Name Required!!" })}

                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    {/* Photo Field */}

                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700 ml-1">Photo URL </label>
                        <input
                            type="text"
                            // name="password"
                            className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                            placeholder="Enter Photo URL"
                            {...register("photo", { required: "Photo URL Required !!" })}
                        />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </div>



                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700 ml-1">Email address</label>
                        <input
                            type="email"
                            // name="email"
                            className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email Required !!" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    {/* <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700 ml-1">Password</label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            // name="password"
                            className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password Required !!" })}
                        />
                        <span
                            onClick={() => setisShowPassword(!isShowPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div> */}
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-gray-700 ml-1">Password</label>
                        <div className="relative">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                                placeholder="Enter your password"
                                {...register("password", { required: "Password Required !!" })}
                            />
                            <span
                                onClick={() => setisShowPassword(!isShowPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                            >
                                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                    </div>
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    {/* Login Button */}

                    <button className="w-full bg-[#404040] hover:bg-black text-white font-bold py-4 rounded-lg mt-4 transition-colors">
                        Register
                    </button>
                </form>
                {/* Footer Link */}
                {/* <p className="text-center mt-8 text-gray-600 font-medium">
                    {"Don't Have An Account?"} <Link href={'/register'} className="text-red-500 cursor-pointer hover:underline">Register</Link>

                </p> */}
            </div>
        </div>
    );
};

export default RegisterPage;