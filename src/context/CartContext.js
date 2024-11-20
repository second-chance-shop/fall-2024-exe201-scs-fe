import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create the context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = async (productId, quantity = 1) => {
        try {
            const userToken = localStorage.getItem("userToken");
            if (!userToken) {
                toast.error("User not authenticated. Please log in.");
                return;
            }

            const response = await axios.post(
                "https://scs-api.arisavinh.dev/api/v1/order/add-cart",
                { productId, quantity },
                {
                    headers: {
                        Authorization: `${userToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.isSuccess) {
                setCartItems((prevItems) => [...prevItems, response.data.data]);
                toast.success("Product added to cart successfully!");
            } else {
                toast.error("Failed to add product to cart.");
            }
        } catch (error) {
            toast.error("An error occurred while adding to cart.");
            console.error("Error adding item to cart:", error.response?.data || error.message);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
