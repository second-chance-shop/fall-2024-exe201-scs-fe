import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const { cartItems, setCartItems } = useCart();
    const [productDetails, setProductDetails] = useState({}); // Store product details

    // Fetch shopping cart data
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const userToken = localStorage.getItem("userToken");
                if (!userToken) {
                    console.error("User token not found!");
                    return;
                }

                const response = await axios.get(
                    "https://scs-api.arisavinh.dev/api/v1/order/user-cart",
                    {
                        headers: {
                            Authorization: ` ${userToken}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const cartItems = response.data.data;
                setCartItems(cartItems);

                // Fetch product details for each item
                const productData = await Promise.all(
                    cartItems.map(async (item) => {
                        const productResponse = await axios.get(
                            `https://scs-api.arisavinh.dev/api/v1/product/${item.productId}`,
                            {
                                headers: {
                                    accept: "*/*",
                                },
                            }
                        );
                        return { productId: item.productId, ...productResponse.data.data };
                    })
                );

                // Store product details in a map for quick lookup
                const productDetailsMap = {};
                productData.forEach((product) => {
                    productDetailsMap[product.productId] = product;
                });
                setProductDetails(productDetailsMap);
            } catch (error) {
                toast.error("Error fetching shopping cart data.");
                console.error(
                    "Error fetching shopping cart data:",
                    error.response?.data || error.message
                );
            }
        };

        fetchCartItems();
    }, [setCartItems]);

    // Handle quantity change
    const handleQuantityChange = (orderId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.orderId === orderId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    // Remove item from cart
    const handleRemoveItem = async (orderId) => {
        try {
            const userToken = localStorage.getItem("userToken");
            if (!userToken) {
                console.error("User token not found!");
                return;
            }

            await axios.delete(`https://scs-api.arisavinh.dev/api/v1/order/delete/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                    "Content-Type": "application/json",
                },
            });

            setCartItems((prevItems) => prevItems.filter((item) => item.orderId !== orderId));
            toast.success("Item removed from cart successfully!");
        } catch (error) {
            toast.error("Error removing item from cart.");
            console.error("Error removing item:", error.response?.data || error.message);
        }
    };

    // Calculate total price
    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => {
                const product = productDetails[item.productId];
                const price = product?.prices ?? 0; // Use product price if available, otherwise default to 0
                return total + price * item.quantity;
            }, 0)
            .toFixed(2);
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
                        return (
                            <div key={item.orderId} className="flex items-center border-b py-4">
                                <img
                                    src={product.image?.[0] || "/path/to/default-image.jpg"} // Use first image or a placeholder
                                    alt={product.productName || "Product"}
                                    className="w-24 h-24 object-cover mr-4"
                                />
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold">
                                        {product.productName || "Product Name"}
                                    </h2>
                                    <p className="text-gray-600">
                                        {product.prices
                                            ? new Intl.NumberFormat("vi-VN", {
                                                  style: "currency",
                                                  currency: "VND",
                                              }).format(product.prices)
                                            : "0 ₫"}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            className="border rounded px-2 py-1 mr-2"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    item.orderId,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="border rounded px-2 py-1 ml-2"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    item.orderId,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                        <button
                                            className="ml-4 text-red-600"
                                            onClick={() => handleRemoveItem(item.orderId)}
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
                        className="mt-5 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition-all duration-300"
                        onClick={() =>
                            toast.info(
                                `Proceeding to payment. Total: ${new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(calculateTotal())}`
                            )
                        }
                    >
                        Thanh toán
                    </button>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
