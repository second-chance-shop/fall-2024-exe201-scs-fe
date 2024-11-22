import React, { useEffect, useState } from "react";

const PaymentStatusModal = ({ isOpen, onClose, status, paymentData }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [htmlContent, setHtmlContent] = useState(null); // Store the extracted HTML

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10);

            // If payment method is CREDIT_CARD, fetch the payment page HTML
            if (paymentData?.namePayment === "CREDIT_CARD" && paymentData?.urlPayment) {
                fetchPaymentPage(paymentData.urlPayment);
            }
        } else {
            setIsAnimating(false);
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [isOpen, paymentData]);

    // Fetch and extract the relevant part of the payment page
    const fetchPaymentPage = async (url) => {
        try {
            const response = await fetch(url);
            const htmlText = await response.text();

            // Parse the HTML to extract the relevant section
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, "text/html");
            console.log(doc);
            const extractedContent = doc.querySelector(".w-full.flex.flex-col.items-center");

            if (extractedContent) {
                setHtmlContent(extractedContent.outerHTML); // Save the extracted HTML
            } else {
                setHtmlContent("<p>Không thể tải nội dung thanh toán.</p>");
            }
        } catch (error) {
            console.error("Error fetching payment page:", error);
            setHtmlContent("<p>Đã xảy ra lỗi khi tải nội dung thanh toán.</p>");
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
            <div
                className={`bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-lg shadow-2xl transform transition-all items-center duration-300 ease-in-out p-[36px_40px] flex flex-col relative w-[700px] ${
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

                {/* Display HTML Content or Fallback Message */}
                {status === "success" && paymentData?.namePayment === "CREDIT_CARD" ? (
                    <div
                        className="w-full overflow-y-auto max-h-[500px]"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    ></div>
                ) : (
                    <div>
                        <h2
                            className={`text-[24px] font-bold ${
                                status === "success" ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {status === "success"
                                ? "Thanh toán thành công!"
                                : "Thanh toán thất bại!"}
                        </h2>
                        <p className="text-gray-600 mt-2">
                            {status === "success"
                                ? "Bạn sẽ được chuyển về trang chủ sau:"
                                : "Bạn sẽ được chuyển về giỏ hàng sau:"}
                        </p>
                    </div>
                )}

                {/* Redirect Button */}
                <button
                    className={`w-[320px] h-[48px] mt-6 rounded-full text-white font-semibold shadow-lg transform hover:scale-105 transition-all ${
                        status === "success"
                            ? "bg-gradient-to-r from-green-400 to-green-600"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                    onClick={onClose}
                >
                    {status === "success" ? "Hoàn tất" : "Quay Lại Giỏ Hàng"}
                </button>
            </div>
        </div>
    );
};

export default PaymentStatusModal;
