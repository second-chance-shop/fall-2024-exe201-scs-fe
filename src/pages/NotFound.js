import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-lg text-gray-600">Trang không tìm thấy</p>
                <p className="mt-2 text-gray-500">
                    Có vẻ như trang bạn đang tìm kiếm không tồn tại.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
                >
                    Về trang chủ
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
