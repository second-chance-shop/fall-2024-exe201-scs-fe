import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
const CartIcon = () => {
    const { cartItems } = useCart();

    const getTotalCartItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <a
            href="/shopping-cart"
            className="text-3xl relative group hover:scale-110 transition-transform duration-300"
        >
            <FaShoppingCart className="text-gray-800 group-hover:text-orange-600 transition-colors duration-300" />
            {getTotalCartItems() > 0 && (
                <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3 animate-bounce">
                    <p className="text-xs font-bold">{getTotalCartItems()}</p>
                </div>
            )}
        </a>
    );
};

export default CartIcon;
