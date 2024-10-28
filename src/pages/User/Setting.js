import React, { useState, useEffect } from "react";
import UserMenu from "../../components/User/UserMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const ChangePassword = () => {
    const [passwordInfo, setPasswordInfo] = useState({
        email: "",
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
    });
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [timer, setTimer] = useState(180); // 3-minute countdown
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Countdown timer
    useEffect(() => {
        let countdown;
        if (otpSent && timer > 0) {
            countdown = setInterval(() => setTimer(timer - 1), 1000);
        }
        return () => clearInterval(countdown);
    }, [otpSent, timer]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordInfo({ ...passwordInfo, [name]: value });
    };

    // Submit password change request
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem("userToken");
            if (!token) {
                setErrorMessage("Authentication token not found.");
                setLoading(false);
                return;
            }

            const response = await axios.put(
                "https://scs-api.arisavinh.dev/api/v1/user/change-password",
                passwordInfo,
                {
                    headers: { Authorization: `${token}` },
                }
            );

            if (response.status === 200 && response.data.isSuccess) {
                setOtpSent(true);
                toast.success("OTP đã được gửi về email của bạn.");
                setTimer(180);
            } else {
                toast.error(response.data.message || "Đã xảy ra lỗi");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Lỗi khi đổi mật khẩu.");
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP
    const handleVerifyOtp = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem("userToken");
            if (!token) {
                setErrorMessage("Authentication token not found.");
                setLoading(false);
                return;
            }

            const response = await axios.patch(
                "https://scs-api.arisavinh.dev/api/v1/OTP/verify-set-password",
                {
                    otp,
                    email: passwordInfo.email,
                },
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );

            if (response.status === 200 && response.data.isSuccess) {
                toast.success("Đổi mật khẩu thành công!");
                setOtpSent(false);
                setPasswordInfo({
                    email: "",
                    oldPassword: "",
                    newPassword: "",
                    newPasswordConfirm: "",
                });
                setOtp("");
            } else {
                toast.error(response.data.message || "OTP không chính xác");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Lỗi khi xác thực OTP.");
        } finally {
            setLoading(false);
        }
    };

    // Resend OTP
    const handleResendOtp = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem("userToken");
            if (!token) {
                setErrorMessage("Authentication token not found.");
                setLoading(false);
                return;
            }

            await axios.post(
                `https://scs-api.arisavinh.dev/api/v1/OTP/reload-otp-set-password?email=${passwordInfo.email}`,
                null,
                {
                    headers: { Authorization: `${token}` },
                }
            );

            setTimer(180);
            toast.success("OTP đã được gửi lại!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Lỗi khi gửi lại OTP.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
      }
    return (
        <div className="flex min-h-screen bg-gray-100">
            <UserMenu />
            <div className="flex-1 p-5">
                <h1 className="text-3xl font-bold mb-5">Đổi mật khẩu</h1>
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-3">Vui lòng điền đủ thông tin bên dưới:</h2>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                    {!otpSent ? (
                        <>
                            {/* Password Change Form */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                    value={passwordInfo.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mật khẩu cũ:</label>
                                <input
                                    type="password"
                                    name="oldPassword"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                    value={passwordInfo.oldPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mật khẩu mới:</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                    value={passwordInfo.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">
                                    Xác nhận mật khẩu mới:
                                </label>
                                <input
                                    type="password"
                                    name="newPasswordConfirm"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                    value={passwordInfo.newPasswordConfirm}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-blue-600"
                                onClick={handleSubmit}
                            >
                                Gửi yêu cầu
                            </button>
                        </>
                    ) : (
                        <>
                            {/* OTP Verification Form */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Nhập OTP:</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-700">Thời gian còn lại: {timer}s</p>
                            </div>

                            <button
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-3"
                                onClick={handleVerifyOtp}
                            >
                                Xác nhận OTP
                            </button>

                            <button
                                className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ${
                                    timer > 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                onClick={handleResendOtp}
                                disabled={timer > 0} // Disable the button if timer is greater than 0
                            >
                                Gửi lại OTP
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
