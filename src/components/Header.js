import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserProfile, setUserProfile } from "../store/userSlice";
import { toast } from "react-toastify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultProfilePic from "../assest/avatar-user-default.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineOrderedList } from "react-icons/ai";
import { logoutUser } from "./authUtils";
import SearchHeader from "./header_components/SearchBar";
import { useCart } from "../context/CartContext";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [orderDropdownOpen, setOrderDropdownOpen] = useState(false); // State for orders dropdown
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user?.user);
    const { cartItems } = useCart();

    // Calculate total number of items in the cart
    const getTotalCartItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    useEffect(() => {
        const checkLoginStatus = async () => {
            const token = await AsyncStorage.getItem("userToken");
            setIsLoggedIn(!!token);

            if (token) {
                try {
                    const response = await fetch(
                        "https://scs-api.arisavinh.dev/api/v1/user/profile",
                        {
                            headers: {
                                Authorization: `${token}`,
                            },
                        }
                    );
                    const result = await response.json();

                    if (result.isSuccess) {
                        dispatch(setUserProfile(result.data));
                    }
                } catch (error) {
                    console.error("Failed to fetch user profile:", error);
                }
            }
        };
        checkLoginStatus();
    }, [dispatch]);

    useEffect(() => {
        setIsLoggedIn(!!user);
    }, [user]);

    const handleLogout = async () => {
        await logoutUser();
        dispatch(clearUserProfile());
        setDropdownOpen(false);
        navigate("/login");
    };

    const handleOptionClick = () => {
        setDropdownOpen(false);
    };

    const handleUserIconClick = () => {
        if (isLoggedIn) {
            setDropdownOpen(!dropdownOpen);
        } else {
            toast.info("Vui lòng đăng nhập để tiếp tục");
            navigate("/login");
        }
    };

    const handleOrderIconClick = () => {
        if (isLoggedIn) {
            setOrderDropdownOpen(!orderDropdownOpen);
        } else {
            toast.info("Vui lòng đăng nhập để tiếp tục");
            navigate("/login");
        }
    };

    return (
        <header className="h-20 shadow-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 z-30 flex items-center sticky top-0 transition-all duration-300 ease-in-out">
            <div className="container mx-auto flex items-center justify-between h-full px-6">
                {/* Logo Section */}
                <div className="logo-container pl-4 flex items-center gap-3">
                    <Link to={"/"} className="flex items-center group">
                        <Logo className="w-12 h-12 transition-transform group-hover:scale-110" />
                        <span className="ml-2 text-2xl font-extrabold text-gray-800 group-hover:text-gray-900 transition-all duration-300">
                            SecondChance
                        </span>
                    </Link>
                </div>

                {/* Search Section */}
                <SearchHeader className="flex-grow mx-6 transition-all duration-300 hover:shadow-md" />

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                    {/* Shopping Cart */}
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

                    {/* User Dropdown */}
                    <div className="relative">
                        <div
                            className="text-3xl cursor-pointer group"
                            onClick={handleUserIconClick}
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                        >
                            {isLoggedIn ? (
                                <img
                                    src={user?.avatar || defaultProfilePic}
                                    className="w-11 h-11 rounded-full border-2 border-orange-600 shadow-lg transition-transform group-hover:scale-110"
                                    alt={user?.name || "User Avatar"}
                                />
                            ) : (
                                <FaRegCircleUser className="text-gray-800 group-hover:text-orange-600 transition-colors duration-300" />
                            )}
                        </div>

                        {isLoggedIn && dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-lg border border-gray-200 transition-all ease-in-out duration-300">
                                <ul className="py-2">
                                    <li className="border-b last:border-none">
                                        <Link
                                            to={`/user/profile/${encodeURIComponent(user?.name)}`}
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                            onClick={handleOptionClick}
                                        >
                                            Trang cá nhân
                                        </Link>
                                    </li>
                                    <li className="border-b last:border-none">
                                        <Link
                                            to={`/user/update/${encodeURIComponent(user?.name)}`}
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                            onClick={handleOptionClick}
                                        >
                                            Cài đặt
                                        </Link>
                                    </li>
                                    <li className="border-b last:border-none">
                                        <Link
                                            to="/user/shop-manage"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                            onClick={handleOptionClick}
                                        >
                                            Quản lý cửa hàng
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                        >
                                            Đăng xuất
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Order Dropdown */}
                    <div className="relative">
                        <div
                            className="text-3xl cursor-pointer group hover:scale-110 transition-transform duration-300"
                            onClick={handleOrderIconClick}
                            aria-haspopup="true"
                            aria-expanded={orderDropdownOpen}
                        >
                            <AiOutlineOrderedList className="text-gray-800 group-hover:text-orange-600 transition-colors duration-300" />
                        </div>

                        {isLoggedIn && orderDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-lg border border-gray-200 transition-all ease-in-out duration-300">
                                <ul className="py-2">
                                    <li className="border-b last:border-none">
                                        <Link
                                            to="/purchase-orders"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                            onClick={handleOptionClick}
                                        >
                                            Đơn mua
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/sale-orders"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                            onClick={handleOptionClick}
                                        >
                                            Đơn bán
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Login Button */}
                    {!isLoggedIn && (
                        <div>
                            <Link
                                to={"/login"}
                                className="text-white bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 rounded-full font-bold shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-200"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
