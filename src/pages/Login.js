import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from "../assest/background.png";
import loginIcons from "../assest/signin.gif";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "react-toastify";

const Login = () => {
    const [data, setData] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
    
        try {
            const response = await axios.post(
                "https://scs-api.arisavinh.dev/api/v1/auth/login",
                data
            );
    
            if (response.status === 200 && response.data.isSuccess) {
                const { accessToken, tokenType } = response.data.data;
    
                await AsyncStorage.setItem("userToken", `${tokenType} ${accessToken}`);
    
                const storedToken = await AsyncStorage.getItem("userToken");
    
                toast.success(`Chào mừng bạn, ${data.username}`);
                navigate("/");
            } else {
                toast.error(response.data.message || "Đã xảy ra lỗi");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Lỗi kết nối đến server");
        }
    };
    

    const handleBack = () => navigate("/");

    return (
        <section
            id="login"
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Login Form Container */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 z-10">
                <FaArrowLeft
                    className="absolute top-4 left-4 text-xl text-gray-500 cursor-pointer hover:text-black"
                    onClick={handleBack}
                />

                <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
                    <img
                        src={loginIcons}
                        alt="login Icons"
                        className="w-full h-full mix-blend-multiply"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>

                {/* Error Message */}
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

                <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
                    {/* Username Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={handleOnChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                        <div className="flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={data.password}
                                name="password"
                                onChange={handleOnChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pr-10"
                                required
                            />
                            <div
                                className="absolute right-3 text-xl cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <Link
                            to="/forgot-password"
                            className="block w-fit ml-auto hover:underline hover:text-orange-500"
                        >
                            Quên mật khẩu
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600 mb-4"
                    >
                        Đăng nhập
                    </button>

                    {/* Google Login Button */}
                    <button
                        type="button"
                        onClick={() => console.log("Đăng nhập bằng Google")}
                        className="w-full bg-white-500 text-red-500 py-2 rounded-md hover:bg-gray-300 flex justify-center items-center mb-4"
                    >
                        <i className="fab fa-google mr-2"></i> Đăng nhập bằng Google
                    </button>

                    {/* Register Link */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-700">
                            Bạn chưa có tài khoản?{" "}
                            <Link to="/register" className="text-orange-500 hover:underline">
                                Đăng ký
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            {/* Optional dark gradient background overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </section>
    );
};

export default Login;
