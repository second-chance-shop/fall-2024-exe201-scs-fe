import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentStatusModal = ({ isOpen, onClose, status, paymentData }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10); // Start animations
        } else {
            setIsAnimating(false);
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            if (
                status === "success" &&
                paymentData?.namePayment === "CREDIT_CARD" &&
                paymentData?.urlPayment
            ) {
                setTimeout(() => {
                    window.open(paymentData.urlPayment, "_blank");
                }, 1200); // Slight delay before opening payment link
                return;
            }

            if (countdown > 0 && (!paymentData || !paymentData.urlPayment)) {
                const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
                return () => clearInterval(timer);
            } else if (countdown === 0) {
                handleRedirect();
            }
        }
    }, [isOpen, countdown, paymentData, status]);

    const handleRedirect = () => {
        if (status === "success") {
            navigate("/");
        } else if (status === "fail") {
            navigate("/shopping-cart");
        }
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
                isAnimating ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className={`relative bg-white rounded-lg shadow-lg p-[50px] flex flex-col items-center w-[550px] ${
                    isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
            >
                {/* Animated Border */}
                <div
                    className="absolute inset-0 rounded-lg border-[5px] border-dashed animate-running-border"
                    style={{
                        borderImageSource:
                            "linear-gradient(to right, #6EE7B7, #3B82F6, #6366F1, #9333EA)",
                        borderImageSlice: 1,
                    }}
                ></div>

                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-3xl font-bold text-gray-400 hover:text-green-500 transition-transform transform hover:rotate-[360deg] hover:scale-125"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Icon with Dancing and Hover Effects */}
                <div
                    className={`mb-6 rounded-full w-24 h-24 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg animate-jump hover:animate-dance transition-transform hover:scale-110 hover:rotate-[10deg]`}
                >
                    <span className="text-4xl font-black">{status === "success" ? "✓" : "!"}</span>
                </div>

                {/* Header */}
                <h2
                    className={`text-[28px] font-black text-center ${
                        status === "success" ? "text-green-500" : "text-red-500"
                    } mb-6`}
                >
                    {status === "success" && paymentData?.namePayment === "CREDIT_CARD"
                        ? "CHỜ THANH TOÁN QUA NGÂN HÀNG!"
                        : "ĐẶT HÀNG THÀNH CÔNG!"}
                </h2>

                {/* Body */}
                <div className="text-gray-600 text-center space-y-4 leading-relaxed">
                    {status === "success" && paymentData?.namePayment === "CREDIT_CARD" ? (
                        <>
                            <p>Đang chờ bạn hoàn tất thanh toán tại trang ngân hàng...</p>
                            <p className="font-medium">
                                Hãy hoàn tất thanh toán tại{" "}
                                <span className="text-blue-500 font-bold">tab mới được mở</span>!
                            </p>
                            <p>
                                Nếu trang thanh toán không tự mở, hãy nhấp vào liên kết sau:
                                <br />
                                <a
                                    href={paymentData.urlPayment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline text-lg font-bold hover:text-blue-800 transition-all"
                                >
                                    Nhấp vào đây để thanh toán
                                </a>
                            </p>
                        </>
                    ) : (
                        <p>Bạn sẽ được chuyển về trang chủ sau vài giây...</p>
                    )}
                </div>

                {/* Button */}
                <button
                    className={`w-[350px] h-[60px] mt-8 rounded-full text-white font-bold shadow-lg transform hover:scale-110 transition-all ${
                        status === "success"
                            ? "bg-gradient-to-r from-green-400 to-blue-500"
                            : "bg-gradient-to-r from-red-500 to-yellow-500"
                    }`}
                    onClick={handleRedirect}
                >
                    {status === "success" && paymentData?.namePayment === "CREDIT_CARD"
                        ? "ĐỢI THANH TOÁN XONG"
                        : "VỀ TRANG CHỦ"}
                </button>
            </div>
        </div>
    );
};

export default PaymentStatusModal;
