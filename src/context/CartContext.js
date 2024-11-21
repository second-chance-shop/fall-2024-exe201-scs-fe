import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Constants for API endpoints and headers
const API_BASE_URL = "https://scs-api.arisavinh.dev/api/v1";
const getAuthHeaders = () => {
    const userToken = localStorage.getItem("userToken");
    return {
        Authorization: userToken ? `${userToken}` : "",
        "Content-Type": "application/json",
    };
};

// Create the context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [productDetails, setProductDetails] = useState({});
    const [selectedOrderId, setSelectedOrderId] = useState(null); // Added state for selected order ID

    // Helper function to consolidate cart items
    const consolidateCartItems = (items) => {
        const consolidated = [];
        const productMap = new Map();

        items.forEach((item) => {
            if (productMap.has(item.productId)) {
                const existing = productMap.get(item.productId);
                existing.quantity += item.quantity; // Combine quantities
            } else {
                productMap.set(item.productId, { ...item });
            }
        });

        productMap.forEach((value) => consolidated.push(value));
        return consolidated;
    };

    // Fetch and consolidate shopping cart data
    const fetchCartItems = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/order/user-cart`, {
                headers: getAuthHeaders(),
            });

            const rawCartItems = response.data.data;
            const consolidatedItems = consolidateCartItems(rawCartItems);
            setCartItems(consolidatedItems);

            // Fetch product details for each unique item
            const productData = await Promise.all(
                consolidatedItems.map(async (item) => {
                    const productResponse = await axios.get(
                        `${API_BASE_URL}/product/${item.productId}`,
                        {
                            headers: getAuthHeaders(),
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
            if (error.response?.status === 401) {
                toast.error("You must be logged in to view your cart.");
            } else {
                toast.error("Error fetching shopping cart data.");
            }
            console.error(
                "Error fetching shopping cart data:",
                error.response?.data || error.message
            );
        }
    };

    const addToCart = async (productId, quantity = 1) => {
        try {
            const existingCartItem = cartItems.find((item) => item.productId === productId);

            if (existingCartItem) {
                // Update quantity if the product already exists in the cart
                const newQuantity = existingCartItem.quantity + quantity;

                const response = await axios.put(
                    `${API_BASE_URL}/order/update/${existingCartItem.orderId}`,
                    {
                        quantity: newQuantity,
                        nameMethod: "updateQuantity",
                    },
                    {
                        headers: getAuthHeaders(),
                    }
                );

                if (response.status === 200) {
                    setCartItems((prevItems) =>
                        prevItems.map((item) =>
                            item.orderId === existingCartItem.orderId
                                ? { ...item, quantity: newQuantity }
                                : item
                        )
                    );
                    toast.success("Cart updated successfully!");
                } else {
                    toast.error("Failed to update cart.");
                }
            } else {
                // Add a new product to the cart if it doesn't exist
                const response = await axios.post(
                    `${API_BASE_URL}/order/add-cart`,
                    { productId, quantity },
                    {
                        headers: getAuthHeaders(),
                    }
                );

                if (response.data.isSuccess) {
                    setCartItems((prevItems) => [...prevItems, response.data.data]);
                    toast.success("Product added to cart successfully!");
                } else {
                    toast.error("Failed to add product to cart.");
                }
            }
        } catch (error) {
            toast.error("An error occurred while adding to cart.");
            console.error("Error in addToCart:", error.response?.data || error.message);
        }
    };

    // Function to update the quantity of a product in the cart
    const updateCartItemQuantity = async (orderId, quantity) => {
        try {
            console.log(quantity);
            const response = await axios.put(
                `${API_BASE_URL}/order/update/${orderId}`,
                {
                    quantity,
                    nameMethod: "updateQuantity",
                },
                {
                    headers: getAuthHeaders(),
                }
            );

            if (response.status === 200) {
                setCartItems((prevItems) =>
                    prevItems.map((item) =>
                        item.orderId === orderId ? { ...item, quantity } : item
                    )
                );
                toast.success("Quantity updated successfully!");
            } else {
                toast.error("Failed to update quantity.");
            }
        } catch (error) {
            toast.error("An error occurred while updating quantity.");
            console.error("Error updating quantity:", error.response?.data || error.message);
        }
    };

    // Function to remove a product from the cart
    const removeFromCart = async (orderId) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/order/delete/${orderId}`, {
                headers: getAuthHeaders(),
            });

            if (response.status === 200) {
                setCartItems((prevItems) => prevItems.filter((item) => item.orderId !== orderId));
                toast.success("Product removed from cart successfully!");
            } else {
                toast.error("Failed to remove product from cart.");
            }
        } catch (error) {
            toast.error("An error occurred while removing the product from cart.");
            console.error("Error removing item from cart:", error.response?.data || error.message);
        }
    };

    // Function to handle checkout
    const checkoutOrder = async (methodPayment) => {
        if (!selectedOrderId) {
            toast.error("Please select an order to process payment.");
            return;
        }

        try {
            const response = await axios.put(
                `${API_BASE_URL}/order/checkout/${selectedOrderId}?methodPayment=${methodPayment}`,
                null, // PUT request with no body
                {
                    headers: getAuthHeaders(),
                }
            );

            if (response.status === 200) {
                toast.success("Order processed successfully!");
                console.log(response.data);
                // Optionally, refresh the cart or perform additional logic here
                fetchCartItems();
            } else {
                toast.error("Failed to process payment.");
            }
        } catch (error) {
            toast.error("An error occurred during checkout.");
            console.error("Error in checkoutOrder:", error.response?.data || error.message);
        }
    };

    // Fetch cart items when the context is initialized
    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                productDetails,
                selectedOrderId, // Expose selectedOrderId state
                setSelectedOrderId, // Expose setSelectedOrderId function
                fetchCartItems,
                addToCart,
                updateCartItemQuantity,
                removeFromCart,
                checkoutOrder, // Expose checkoutOrder function
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
