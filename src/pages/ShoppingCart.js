import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const {
        cartItems,
        productDetails,
        removeFromCart,
        updateCartItemQuantity,
        selectedOrderId,
        setSelectedOrderId,
    } = useCart();

    // Handle quantity change
    const handleQuantityChange = (productId, quantity) => {
        const item = cartItems.find((item) => item.productId === productId);
        if (item) {
            const newQuantity = Math.max(1, quantity); // Ensure quantity is at least 1
            updateCartItemQuantity(item.orderId, newQuantity); // Update quantity using context
        }
    };

    // Calculate total price for the selected item
    const calculateTotal = () => {
        const selectedItem = cartItems.find((item) => item.orderId === selectedOrderId);
        if (selectedItem) {
            const product = productDetails[selectedItem.productId];
            const price = product?.prices ?? 0; // Use product price if available, otherwise default to 0
            return price * selectedItem.quantity;
        }
        return 0;
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
            <h1 className="text-3xl font-bold mb-5">Giỏ hàng</h1>
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5">
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="text-gray-500">Giỏ hàng của bạn còn trống!</p>
                        <button
                            className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-all duration-300"
                            onClick={() => navigate("/")}
                        >
                            Mua sắm ngay
                        </button>
                    </div>
                ) : (
                    cartItems.map((item) => {
                        const product = productDetails[item.productId] || {};
                        const isSelected = item.orderId === selectedOrderId; // Check if item is selected
                        return (
                            <div
                                key={item.orderId}
                                onClick={() => setSelectedOrderId(item.orderId)} // Set selected order ID
                                className={`flex items-center border rounded-lg p-4 mb-3 cursor-pointer transition-all duration-300 ${
                                    isSelected
                                        ? "bg-orange-100 border-orange-600"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                <img
                                    src={product.image?.[0] || "/path/to/default-image.jpg"} // Use first image or a placeholder
                                    alt={product.productName || "Product"}
                                    className="w-16 h-16 object-cover mr-4 rounded"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {product.productName || "Product Name"}
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        {product.prices
                                            ? new Intl.NumberFormat("vi-VN", {
                                                  style: "currency",
                                                  currency: "VND",
                                              }).format(product.prices)
                                            : "0 ₫"}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            className="border rounded px-2 py-1 mr-2 text-sm"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent triggering the selection
                                                handleQuantityChange(
                                                    item.productId,
                                                    item.quantity - 1
                                                );
                                            }}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="border rounded px-2 py-1 ml-2 text-sm"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent triggering the selection
                                                handleQuantityChange(
                                                    item.productId,
                                                    item.quantity + 1
                                                );
                                            }}
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent triggering the selection
                                                removeFromCart(item.orderId);
                                            }}
                                            className="ml-4 text-red-600"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
                {cartItems.length > 0 && (
                    <div className="mt-5 flex justify-between">
                        <h2 className="text-xl font-semibold">Tổng cộng:</h2>
                        <p className="text-xl">
                            {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(calculateTotal())}
                        </p>
                    </div>
                )}
                {cartItems.length > 0 && (
                    <button
                        className={`mt-5 w-full py-2 rounded transition-all duration-300 ${
                            !selectedOrderId
                                ? "bg-gray-400 cursor-not-allowed text-white"
                                : "bg-orange-600 hover:bg-orange-500 text-white"
                        }`}
                        onClick={() => {
                            if (selectedOrderId) {
                                toast.success("Chuyển đến thanh toán");
                                navigate("/checkout"); // Navigate to checkout page
                            }
                        }}
                        disabled={!selectedOrderId} // Disable button if no item is selected
                    >
                        {!selectedOrderId ? "Chọn sản phẩm trước khi thanh toán" : "Thanh toán"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
