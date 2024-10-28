import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../authUtils';
import { FaArrowLeft } from 'react-icons/fa';

const UserMenu = ({ userId }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  const handleManageShop = () => {
    navigate('/user/shop-manage', { state: { userId } });
  };

  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-5">
      {/* Quay lại */}
      <div 
        className="flex items-center mb-4 cursor-pointer text-orange-500 hover:text-orange-700" 
        onClick={() => navigate('/')}
      >
        <FaArrowLeft className="mr-2 text-xl" /> {/* Icon for back */}
        <span className="text-lg font-semibold">Trang chủ</span>
      </div>

      {/* Danh sách các liên kết trong User */}
      <ul className="space-y-2">
        <li>
          <Link
            to="/user/profile"
            className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
          >
            Hồ sơ
          </Link>
        </li>
        <li>
          <Link
            to="/user/update"
            className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
          >
            Cập nhật thông tin
          </Link>
        </li>
        <li>
          <Link
            to="/user/setting"
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
