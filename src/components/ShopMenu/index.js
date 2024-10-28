import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa'; // Sử dụng icon back từ react-icons

const ShopMenu = () => {
    const userId = useSelector(state => state?.user?.user?.userId); // Lấy userId từ Redux store
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            navigate('/login');
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
                {/* Quản lý sản phẩm */}
                <li>
                    <Link
                        to="/shop/product-management"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Quản lý sản phẩm
                    </Link>
                </li>

                {/* Thêm sản phẩm */}
                <li>
                    <Link
                        to="/shop/add-product"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Thêm sản phẩm
                    </Link>
                </li>

                {/* Quản lý đơn hàng */}
                <li>
                    <Link
                        to="/shop/orders"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Quản lý đơn hàng
                    </Link>
                </li>

                {/* Cập nhật cửa hàng */}
                <li>
                    <Link
                        to="/shop/update"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Cập nhật cửa hàng
                    </Link>
                </li>

                {/* Đánh giá & Bình luận */}
                <li>
                    <Link
                        to="/shop/star-comment"
                        className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
                    >
                        Đánh giá & Bình luận
                    </Link>
                </li>

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
