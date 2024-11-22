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
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && countdown > 0 && (!paymentData || !paymentData.urlPayment)) {
            const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (countdown === 0) {
            handleRedirect();
        }
    }, [isOpen, countdown, paymentData]);

    const handleRedirect = () => {
        if (status === "success") {
            navigate("/");
        } else if (status === "fail") {
            navigate("/shopping-cart");
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
            <div
                className={`bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-lg shadow-2xl transform transition-all items-center duration-300 ease-in-out p-[36px_40px] flex flex-col relative w-[500px] ${
                    isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-all"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Icon and Message */}
                <div className="mb-4">
                    <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto ${
                            status === "success"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                        }`}
                    >
                        {status === "success" ? "✓" : "!"}
                    </div>
                </div>
                <h2
                    className={`text-[24px] font-bold ${
                        status === "success" ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {status === "success" ? "Thanh toán thành công!" : "Thanh toán thất bại!"}
                </h2>

                <p className="text-gray-600 mt-2">
                    {status === "success"
                        ? paymentData?.namePayment === "CREDIT_CARD"
                            ? "Vui lòng thanh toán tại đường dẫn sau:"
                            : "Bạn sẽ được chuyển về trang chủ sau:"
                        : "Bạn sẽ được chuyển về giỏ hàng sau:"}
                </p>

                {/* Countdown or Link */}
                {paymentData?.namePayment === "CREDIT_CARD" && paymentData?.urlPayment ? (
                    <a
                        href={paymentData.urlPayment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline text-lg font-semibold mt-4 hover:text-blue-700"
                    >
                        Nhấp vào đây để thanh toán
                    </a>
                ) : (
                    <div
                        className="text-5xl font-bold my-6 text-orange-500 animate-bounce"
                        style={{ transition: "all 0.3s ease-in-out" }}
                    >
                        {countdown}
                    </div>
                )}

                {/* Redirect Button */}
                <button
                    className={`w-[320px] h-[48px] rounded-full text-white font-semibold shadow-lg transform hover:scale-105 transition-all ${
                        status === "success"
                            ? "bg-gradient-to-r from-green-400 to-green-600"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    onClick={handleRedirect}
                >
                    {status === "success" && paymentData?.namePayment === "CREDIT_CARD"
                        ? "Về Trang Chủ Sau Thanh Toán"
                        : status === "success"
                        ? "Về Trang Chủ"
                        : "Quay Lại Giỏ Hàng"}
                </button>
            </div>
        </div>
    );
};

export default PaymentStatusModal;
