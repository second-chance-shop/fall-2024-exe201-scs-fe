import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-lg text-gray-600">Trang không tìm thấy</p>
                <p className="mt-2 text-gray-500">
                    Có vẻ như trang bạn đang tìm kiếm không tồn tại.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
                    >
                        Quay lại trang trước
                    </button>

                    <Link
                        to="/"
                        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
                    >
                        Về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
