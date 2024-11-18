import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/cherryLogo.png";

const CreateAccountPage = () => {
    const [form, setForm] = useState({
        email: '',
        phone: '',
        countryCode: '+234',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("https://cherry-backend-zbr2.onrender.com/api/users/register", {
                email: form.email,
                phone: `${form.countryCode}${form.phone}`,
                password: form.password,
            });
            toast.success("Account created successfully!");
            // Optionally, redirect to login page after success
            // window.location.href = "/login";
        } catch (error) {
            const message = error.response?.data?.message || "Failed to create account. Please try again.";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
            <ToastContainer />
            <div className="p-4 rounded-[40px] shadow-lg" style={{ width: '85%', maxWidth: '360px', backgroundColor: '#F4F5F7' }}>
                <div className="flex flex-col items-center mb-4">
                    <img src={logo} alt="Cherry Logo" className="mb-2 w-12 h-10" />
                    <h2 className="text-base font-semibold text-gray-800 mb-1">Create an Account</h2>
                    <p className="text-gray-500 mb-4 text-xs">Start your wellness journey today</p>
                </div>

                <button className="flex items-center justify-center w-full py-1.5 mb-4 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                    Continue with Google
                </button>

                <div className="flex items-center mb-4">
                    <hr className="w-full border-gray-300" />
                    <span className="px-2 text-gray-400 text-xs">or</span>
                    <hr className="w-full border-gray-300" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="block text-xs font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="adeyemi@cherrymedicals.com"
                            value={form.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-2 py-1.5 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500 text-xs"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-xs font-medium text-gray-700">Phone Number</label>
                        <div className="flex">
                            <select
                                name="countryCode"
                                value={form.countryCode}
                                onChange={handleInputChange}
                                className="px-2 py-1.5 text-xs border-r-0 border-gray-300 rounded-l-lg focus:outline-none"
                            >
                                <option value="+234">+234</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Mobile number"
                                value={form.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-2 py-1.5 text-gray-900 border rounded-r-lg focus:outline-none focus:border-blue-500 text-xs"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="block text-xs font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleInputChange}
                            required
                            className="w-full px-2 py-1.5 mt-1 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500 text-xs"
                        />
                    </div>

                    <p className="mt-3 text-center text-xs text-gray-500 leading-tight">
                        By continuing, you agree to our <a href="/terms" className="text-custom-cherry hover:underline">Terms of Service</a> and <a href="/privacy" className="text-custom-cherry hover:underline">Privacy Policy</a>.
                    </p>

                    <button type="submit" disabled={loading} className="w-full py-2 mt-4 text-white bg-custom-cherry rounded-lg hover:bg-blue-700 text-xs">
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <p className="mt-4 text-center text-xs">
                    Have an account? <a href="/login" className="text-blue-600 font-medium hover:underline">Log In</a>
                </p>
            </div>
        </div>
    );
}

export default CreateAccountPage;
