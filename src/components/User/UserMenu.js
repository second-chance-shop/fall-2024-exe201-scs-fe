import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../authUtils";
import { FaArrowLeft } from "react-icons/fa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const UserMenu = ({ userId }) => {
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: "",
    });

    const handleLogout = async () => {
        await logoutUser();
        navigate("/login");
    };

    // Fetch user information
    const fetchUserInfo = async () => {
        try {
            const token = await AsyncStorage.getItem("userToken");
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
                const { name } = response.data.data;
                setUserInfo({ name });
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

    const handleManageShop = () => {
        navigate("/user/shop-manage", { state: { userId } });
    };

    return (
        <div className="w-64 bg-white shadow-md rounded-lg p-5">
            {/* Quay lại */}
            <div
                className="flex items-center mb-4 cursor-pointer text-orange-500 hover:text-orange-700"
                onClick={() => navigate("/")}
            >
                <FaArrowLeft className="mr-2 text-xl" /> {/* Icon for back */}
                <span className="text-lg font-semibold">Trang chủ</span>
            </div>

            {/* Danh sách các liên kết trong User */}
            <ul className="space-y-2">
                <li>
                    <Link
                        to={`/user/profile/${encodeURIComponent(userInfo.name)}`}
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Hồ sơ
                    </Link>
                </li>
                <li>
                    <Link
                        to={`/user/update/${encodeURIComponent(userInfo.name)}`}
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Cập nhật thông tin
                    </Link>
                </li>
                <li>
                    <Link
                        to={`/user/setting/${encodeURIComponent(userInfo.name)}`}
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Cài đặt
                    </Link>
                </li>
                <li>
                    <button
                        className="block w-full text-left px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                        onClick={handleManageShop}
                    >
                        Quản lý cửa hàng
                    </button>
                </li>
                <li>
                    <button
                        className="block w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-100 transition duration-200"
                        onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default UserMenu;
