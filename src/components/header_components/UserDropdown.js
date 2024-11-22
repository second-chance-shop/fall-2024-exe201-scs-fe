import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUserProfile } from "../../store/userSlice";
import defaultProfilePic from "../../assest/avatar-user-default.png";

const UserDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const handleLogout = () => {
        dispatch(clearUserProfile());
        setDropdownOpen(false);
        navigate("/login");
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* User Icon */}
            <div
                className="text-3xl cursor-pointer group"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
            >
                {user ? (
                    <img
                        src={user.avatar || defaultProfilePic}
                        className="w-11 h-11 rounded-full border-2 border-orange-600 shadow-lg transition-transform group-hover:scale-110"
                        alt={user.name || "User Avatar"}
                    />
                ) : (
                    <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        Login
                    </span>
                )}
            </div>

            {/* Dropdown Menu */}
            {user && dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-lg border border-gray-200 transition-all ease-in-out duration-300">
                    <ul className="py-2">
                        <li className="border-b last:border-none">
                            <Link
                                to={`/user/profile/${encodeURIComponent(user.name)}`}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
