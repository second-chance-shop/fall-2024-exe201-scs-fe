import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as jwtDecode from 'jwt-decode';

const ShopMenu = () => {
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    // Lấy ID người dùng từ token
    const fetchUserIdFromToken = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken'); // Lấy token từ AsyncStorage
            if (token) {
                const decodedToken = jwtDecode(token); // Giải mã token
                return decodedToken.userId; // Giả định rằng ID người dùng nằm trong trường userId
            }
        } catch (error) {
            console.error('Error fetching user ID from token:', error);
        }
        return null; // Nếu không có token hoặc có lỗi, trả về null
    };

    useEffect(() => {
        const getUserId = async () => {
            const id = await fetchUserIdFromToken();
            if (id) {
                setUserId(id); // Cập nhật state với ID người dùng
            }
        };
        getUserId();
    }, []);

    return (
        <div className="w-64 bg-white shadow-md rounded-lg p-5 h-full">
            <h2 className="text-xl font-semibold mb-4">Shop Menu</h2>
            <ul className="space-y-2">
                <li>
                    <Link
                        to="/shop-dashboard"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Quản lý sản phẩm
                    </Link>
                </li>
                <li>
                    <Link
                        to="/orders"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Quản lý đơn hàng
                    </Link>
                </li>
                <li>
                    <Link
                        to="/add-product"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Thêm sản phẩm
                    </Link>
                </li>
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
