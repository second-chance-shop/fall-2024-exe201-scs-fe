// CartContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Create the context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = async (productId, quantity = 1) => {
        try {
            const userToken = localStorage.getItem("userToken");
            console.log(userToken);
            if (!userToken) {
                console.error("User token not found!");
                return;
            }

            // Send POST request to add the product to the cart
            const response = await axios.post(
                "https://scs-api.arisavinh.dev/api/v1/order/add-cart",
                {
                    productId,
                    quantity, // Set quantity to default 1 if not specified
                },
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`, // Add Bearer token for authorization
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.isSuccess) {
                setCartItems((prevItems) => [...prevItems, response.data.data]);
                console.log("Item added to cart successfully");
            } else {
                console.error("Failed to add item to cart");
            }
        } catch (error) {
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
