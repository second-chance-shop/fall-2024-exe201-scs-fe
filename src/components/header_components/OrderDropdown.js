import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineOrderedList } from "react-icons/ai";

const OrderDropdown = () => {
    const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const toggleOrderDropdown = () => {
        if (user) {
            setOrderDropdownOpen((prev) => !prev);
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="relative">
            {/* Order Icon */}
            <div
                className="text-3xl cursor-pointer group hover:scale-110 transition-transform duration-300"
                onClick={toggleOrderDropdown}
                aria-haspopup="true"
                aria-expanded={orderDropdownOpen}
            >
                <AiOutlineOrderedList className="text-gray-800 group-hover:text-orange-600 transition-colors duration-300" />
            </div>

            {/* Dropdown Menu */}
            {user && orderDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-lg border border-gray-200 transition-all ease-in-out duration-300">
                    <ul className="py-2">
                        <li className="border-b last:border-none">
                            <Link
                                to="/purchase-orders"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                onClick={() => setOrderDropdownOpen(false)}
                            >
                                Purchase Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sale-orders"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                onClick={() => setOrderDropdownOpen(false)}
                            >
                                Sale Orders
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default OrderDropdown;
