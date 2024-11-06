import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/cherryLogo.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            });

            if (response.status === 200) {

                console.log("Login successful:", response.data);
            }
        } catch (error) {

            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
            <div
                className="p-4 rounded-[40px] shadow"
                style={{
                    width: '85%',
                    maxWidth: '360px',
                    backgroundColor: '#F4F5F7',
                    borderRadius: '40px',
                }}
            >
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Cherry Logo" className="mb-3 w-16 h-8" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">Welcome back!</h2>
                    <p className="text-gray-500 mb-3 text-sm">Log in to your account</p>
                </div>

                <button className="flex items-center justify-center w-full py-2 mb-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                    Continue with Google
                </button>

                <div className="flex items-center my-3">
                    <hr className="w-full border-gray-300" />
                    <span className="px-2 text-gray-400 text-sm">or</span>
                    <hr className="w-full border-gray-300" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="adyemi@cherrymedicals.com"
                            className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                            required
                        />
                    </div>

                    <div className="text-right mb-4">
                        <a href="/forgot-password" className="text-xs text-custom-cherry hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className="w-full py-2 text-white bg-custom-cherry rounded-lg hover:bg-blue-700 text-sm">
                        Log In
                    </button>
                </form>

                <p className="mt-4 text-center text-xs text-gray-500">
                    By continuing, you agree to our <a href="/terms" className="text-custom-cherry hover:underline">Terms of Service</a> and <a href="/privacy" className="text-custom-cherry hover:underline">Privacy Policy</a>.
                </p>

                <p className="mt-3 text-center text-xs">
                    Don’t have an account? <a href="/signup" className="text-custom-cherry font-medium hover:underline">Create an Account</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
