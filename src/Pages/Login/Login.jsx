
import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

export default function Login() {
    const [disabled, setDisabled] = useState(true); // Submit button disabled state
    const { SIgnIn } = useContext(AuthContext); // SignIn function from context

    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || "/"

    useEffect(() => {
        // Initialize Captcha
        loadCaptchaEnginge(6); // Generate a 6-character captcha
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log('Email:', email, 'Password:', password);

        SIgnIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User Signed In:', user);
                Swal.fire({
                    title: "User Login !",
                    icon: "success",
                    draggable: true
                  });

                  navigate(from)
            })
            .catch((err) => {
                console.error('Sign In Error:', err.message);
            });
    };

    // Validate Captcha
    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;

        console.log('Captcha Input:', userCaptchaValue); // Debugging line

        if (validateCaptcha(userCaptchaValue)) {
            console.log('Captcha Validated Successfully');
            setDisabled(false); // Enable submit button
        } else {
            console.log('Captcha Validation Failed');
            setDisabled(true); // Keep submit button disabled
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="mx-auto w-full max-w-md mt-20 space-y-4 rounded-lg border bg-white p-10 shadow-lg">
                <h1 className="text-3xl font-semibold">Sign In</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="email" className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            type="email"
                            required
                        />
                    </div>
                    {/* Password Field */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="password" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="password"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                            required
                        />
                    </div>
                    {/* Captcha Field */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <LoadCanvasTemplate />
                        <input
                            onBlur={handleValidateCaptcha}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            placeholder="Type Captcha"
                            name="captcha"
                            type="text"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <div>
                        <input
                            disabled={disabled}
                            className="btn w-full btn-primary"
                            type="submit"
                            value="Sign In"
                        />
                    </div>
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Don&apos;t have an account?{' '}
                    <Link to={'/signUp'}>
                        <span className="font-semibold underline text-blue-500">Signup</span>
                    </Link>
                </p>
                {/* Divider */}
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                {/* Social Login Buttons */}
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
