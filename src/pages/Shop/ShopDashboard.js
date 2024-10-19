import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopMenu from '../../components/ShopMenu/index'; // Đảm bảo rằng đường dẫn đúng đến ShopMenu

const ShopDashboard = () => {
    return (
        <div className="flex">
            {/* Shop Menu bên trái */}
            <div className="w-1/4 h-screen">
                <ShopMenu />
            </div>
            {/* Nội dung chính của dashboard */}
            <div className="w-3/4 p-5">
                <h1 className="text-2xl font-bold mb-4">Dashboard của Shop</h1>
                <p className="mb-4">Chào mừng bạn đến với trang quản lý cửa hàng của bạn!</p>
                <Outlet /> {/* Đây là nơi nội dung của các trang con sẽ được hiển thị */}
            </div>
        </div>
    );
};

export default ShopDashboard;
