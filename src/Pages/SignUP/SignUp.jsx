import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";

export default function SignUp() {

    const{creatUser} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(); // Call useForm properly

    const onSubmit = (data) =>{
        creatUser(data.email,data.password)
        .then((result)=>{
            const loggedUser = result.user 
            console.log(loggedUser)
        })
    };

    console.log(watch("example")); // Watch value for real-time updates (ensure there's a field with name="example")

    return (
        <>
        <Helmet>
                <title>Bistro | Sign Up</title>
                
              </Helmet>
            <div className="mx-auto w-full max-w-md mt-20 space-y-4 rounded-lg border bg-white p-10 shadow-lg">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2 text-sm text-zinc-700">
                        <label htmlFor="name" className="block font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            {...register("name", { required: "Name is required" })}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1"
                            placeholder="Enter your name"
                            type="text"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2 text-sm text-zinc-700">
                        <label htmlFor="email" className="block font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1"
                            placeholder="Enter your email"
                            type="email"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2 text-sm text-zinc-700">
                        <label htmlFor="password" className="block font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1"
                            placeholder="Enter your password"
                            type="password"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                        <div className="flex justify-end text-xs">
                            <a href="#" className="text-zinc-700 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <input
                            type="submit"
                            className="btn w-full btn-primary"
                            value="Sign Up"
                        />
                    </div>
                </form>

                <p className="text-center text-sm text-zinc-700">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold underline text-blue-500">
                        Sign In
                    </Link>
                </p>

                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>

                {/* Social Media Buttons */}
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="rounded-full p-3">
                        {/* Google Icon */}
                    </button>
                    <button aria-label="Log in with Twitter" className="rounded-full p-3">
                        {/* Twitter Icon */}
                    </button>
                    <button aria-label="Log in with GitHub" className="rounded-full p-3">
                        {/* GitHub Icon */}
                    </button>
                </div>
            </div>
        </>
    );
}
