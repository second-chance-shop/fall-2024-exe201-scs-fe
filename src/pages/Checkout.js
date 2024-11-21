import React from "react";
import { useState, useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi"; // Replace the location icon
import { useCart } from "../context/CartContext";
import axios from "axios";
import PaymentStatusModal from "../components/PaymentStatusModal";

// constants.js

const ShippingAddress = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        phoneNumber: "",
        address: "",
    });
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // Fetch user information
    const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem("userToken");
            if (!token) {
                setErrorMessage("Authentication token not found.");
                setLoading(false);
                return;
            }

            const response = await axios.get("https://scs-api.arisavinh.dev/api/v1/user/profile", {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.status === 200 && response.data.isSuccess) {
                const { name, phoneNumber, address } = response.data.data;
                setUserInfo({ name, phoneNumber, address });
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Error fetching user info");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5 mt-5">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center text-orange-600">
                    <HiLocationMarker className="w-6 h-6 mr-2" />
                    <h2 className="text-lg font-semibold">Địa chỉ nhận hàng</h2>
                </div>
                <button className="text-sm text-orange-600 border hover:bg-orange-600 hover:text-white hover:border hover:border-orange-600 transition-all duration-500 ease-in-out rounded px-2 py-1">
                    Thay đổi
                </button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
            ) : (
                <div className="bg-gray-100 p-3 rounded">
                    <p className="font-medium">
                        {userInfo.name} ({userInfo.phoneNumber || "N/A"})
                    </p>
                    <p>{userInfo.address || "Chưa có địa chỉ"}</p>
                    <span className="text-sm text-gray-500 italic">Mặc định</span>
                </div>
            )}
        </section>
    );
};

const CheckoutProductlist = () => {
    const { selectedOrderId, cartItems, productDetails } = useCart();

    // Find the selected cart item based on the selectedOrderId
    const selectedItem = cartItems.find((item) => item.orderId === selectedOrderId);

    // Get the product details for the selected item
    const product = selectedItem ? productDetails[selectedItem.productId] : null;

    return (
        <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5 mt-5">
            <h2 className="text-lg font-semibold mb-4">Sản phẩm</h2>
            {selectedItem && product ? (
                <div className="flex items-center border-b py-4">
                    <img
                        src={product.image?.[0] || "/path/to/default-image.jpg"}
                        alt={product.productName || "Product"}
                        className="w-16 h-16 object-cover mr-4 rounded"
                    />
                    <div className="flex-1">
                        <p className="font-medium">{product.productName || "Product Name"}</p>
                        <p className="text-gray-600">
                            {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(product.prices || 0)}{" "}
                            x {selectedItem.quantity}
                        </p>
                    </div>
                    <p className="font-semibold">
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format((product.prices || 0) * selectedItem.quantity)}
                    </p>
                </div>
            ) : (
                <p className="text-gray-500">Không có sản phẩm nào được chọn.</p>
            )}
        </section>
    );
};

function PaymentMethods({ selectedMethod, setSelectedMethod }) {
    const PAYMENT_METHODS = [
        {
            name: "Tiền mặt",
            image: "https://img.pikbest.com/element_our/20230221/bg/ebab41b9c1ab9.png!w700wp",
            methodPayment: "CASH", // Associated payment method
        },
        {
            name: "Chuyển khoản ngân hàng",
            image: "https://png.pngtree.com/background/20240225/original/pngtree-bank-transfer-icon-contact-talk-salary-photo-picture-image_7840857.jpg",
            methodPayment: "CREDIT_CARD", // Associated payment method
        },
        { name: "Momo", image: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" },
        {
            name: "ShopeePay",
            image: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ShopeePay-V.png",
        },
        {
            name: "ViettelPay",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw79RFBDr4BNJZyPXzq11aMaNIJsOHa79QKg&s",
        },
        {
            name: "ZaloPay",
            image: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png",
        },
    ];

    const handleSelect = (method) => {
        if (method.methodPayment) {
            setSelectedMethod(method.methodPayment); // Only set supported payment methods
        }
    };

    return PAYMENT_METHODS.map((method) => (
        <div
            key={method.name}
            className={`flex items-center border rounded-lg p-3 mb-3 transition-all duration-300 ease-in-out cursor-pointer ${
                selectedMethod === method.methodPayment
                    ? "bg-orange-100 border-orange-600"
                    : "hover:bg-gray-100"
            }`}
            onClick={() => handleSelect(method)}
        >
            <img src={method.image} alt={method.name} className="w-10 h-10 object-contain mr-4" />
            <p
                className={`font-medium ${
                    selectedMethod === method.methodPayment ? "text-orange-600" : "text-gray-800"
                }`}
            >
                {method.name}
            </p>
        </div>
    ));
}

const checkoutOrder = async (selectedOrderId, methodPayment) => {
    try {
        const token = localStorage.getItem("userToken");
        if (!token) {
            throw new Error("Authentication token not found.");
        }

        const response = await axios.put(
            `https://scs-api.arisavinh.dev/api/v1/order/checkout/${selectedOrderId}?methodPayment=${methodPayment}`,
            {},
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );

        if (response.status === 200) {
            const { isSuccess, data, message, location } = response.data;

            if (isSuccess) {
                // Nếu thanh toán thành công, điều hướng đến trang thanh toán hoặc trang chủ
                if (methodPayment === "CREDIT_CARD" && data?.urlPayment) {
                    window.location.href = data.urlPayment; // Điều hướng đến trang thanh toán
                } else {
                    alert("Đặt hàng thành công!");
                    window.location.href = location || "https://2ndchanceshop.vercel.app/";
                }
            } else if (message === "Order canceled") {
                // Nếu giao dịch bị huỷ, điều hướng về trang checkout
                alert("Giao dịch đã bị huỷ!");
                window.location.href = "https://2ndchanceshop.vercel.app/checkout";
            } else {
                alert("Đặt hàng thất bại: " + message);
            }
        } else {
            throw new Error(response.data.message || "Đặt hàng thất bại.");
        }
    } catch (error) {
        console.error("Checkout error:", error);
        alert(error.response?.data?.message || "Đã xảy ra lỗi trong quá trình đặt hàng.");
    }
};


const Checkout = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const { selectedOrderId, cartItems, productDetails } = useCart(); // Include cart data and product details
    const [totalPrice, setTotalPrice] = useState(0);

    const handlePlaceOrder = async () => {
        if (!selectedMethod) {
            alert("Vui lòng chọn phương thức thanh toán.");
            return;
        }

        // Proceed with checkout using the selected payment method
        checkoutOrder(selectedOrderId, selectedMethod);
    };

    useEffect(() => {
        if (selectedOrderId && cartItems.length > 0) {
            const selectedItem = cartItems.find((item) => item.orderId === selectedOrderId);
            const product = productDetails[selectedItem.productId];
            const calculatedPrice = selectedItem.quantity * (product?.prices || 0);
            setTotalPrice(calculatedPrice);
        }
    }, [selectedOrderId, cartItems, productDetails]);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
            {/* Header */}
            <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-orange-600">Thanh toán</h1>
                </div>
                <a
                    href="/shopping-cart"
                    className="text-sm text-gray-500 hover:text-orange-600 transition-all duration-500 ease-in-out"
                >
                    Quay lại giỏ hàng
                </a>
            </header>
            {/* Shipping Address */}
            <ShippingAddress />
            {/* Product List */}
            <CheckoutProductlist />
            {/* Payment Methods */}
            <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5 mt-5">
                <h2 className="text-lg font-semibold mb-4">Phương thức thanh toán</h2>
                <PaymentMethods
                    selectedMethod={selectedMethod}
                    setSelectedMethod={setSelectedMethod}
                />
            </section>

            {/* Order Summary */}
            <section className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5 mt-5">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Tổng cộng:</h3>
                    <p className="text-xl font-bold text-orange-600">
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(totalPrice)}
                    </p>
                </div>
                <button
                    className={`mt-5 w-full py-3 rounded-lg transition-all ${
                        selectedMethod
                            ? "bg-orange-600 hover:bg-orange-500 text-white"
                            : "bg-gray-400 text-gray-800 cursor-not-allowed"
                    }`}
                    onClick={handlePlaceOrder}
                    disabled={!selectedMethod} // Disable if no payment method is selected
                >
                    {selectedMethod ? "Đặt hàng" : "Chọn phương thức thanh toán"}
                </button>
            </section>

            {/* Payment Status Modal */}
            <PaymentStatusModal
                isOpen={!!paymentStatus} // Show if paymentStatus is set
                status={paymentStatus} // 'success' or 'fail'
            />
        </div>
    );
};

export default Checkout;
