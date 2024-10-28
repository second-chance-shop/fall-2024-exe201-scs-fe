import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa'; // Sử dụng icon back từ react-icons
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ShopMenu = () => {
    const [shopName, setShopName] = useState(''); // State to store the shop name
    const userId = useSelector(state => state?.user?.user?.userId); // Lấy userId từ Redux store
    const navigate = useNavigate();

    // Fetch shop data based on shopId stored in AsyncStorage
    const fetchShopData = async () => {
        try {
            const token = await AsyncStorage.getItem("userToken");
            const shopId = await AsyncStorage.getItem("selectedShopId");

            if (!token || !shopId) {
                navigate("/user/shop-manage");
                return;
            }

            const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/shop/${shopId}`, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.status === 200 && response.data.isSuccess) {
                const { shopName } = response.data.data; // Extract shopName from response
                setShopName(shopName); // Store shopName in state
            }
        } catch (error) {
            console.error("Error fetching shop data:", error);
        }
    };

    useEffect(() => {
        if (!userId) {
            navigate('/user/shop-manage');
        } else {
            fetchShopData(); // Fetch shop data if userId exists
        }
    }, [userId, navigate]);

    return (
        <div className="w-64 bg-white shadow-md rounded-lg p-5">
            {/* Nút quay lại */}
            <button 
                className="flex items-center mb-4 cursor-pointer text-orange-500 hover:text-orange-700"
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft className="mr-2 text-xl" /> {/* Icon back */}
                <span className="text-lg font-semibold">Quay lại</span>
            </button>

            {/* Danh sách các liên kết trong Shop Dashboard */}
            <ul className="space-y-2">
                {/* Dashboard */}
                <li>
                    <Link
                        to="/shop/dashboard"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Dashboard
                    </Link>
                </li>

                {/* Quản lý sản phẩm */}
                <li>
                    <Link
                        to="/shop/product/management"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Quản lý sản phẩm
                    </Link>
                </li>

                {/* Thêm sản phẩm */}
                <li>
                    <Link
                        to="/shop/product/add"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Thêm sản phẩm
                    </Link>
                </li>

                {/* Cập nhật cửa hàng */}
                <li>
                    <Link
                        to={`/shop/update/${encodeURIComponent(shopName)}`} // Use template literal to include shopName
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Cập nhật cửa hàng
                    </Link>
                </li>

                {/* Đánh giá & Bình luận */}
                {/* <li>
                    <Link
                        to="/shop/star-comment"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Đánh giá & Bình luận
                    </Link>
                </li> */}

                {/* Về trang chủ */}
                <li>
                    <Link
                        to="/"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Về trang chủ
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ShopMenu;
