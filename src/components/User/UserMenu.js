import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../authUtils';

const UserMenu = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">User Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/user-profile"
            className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
          >
            Hồ sơ
          </Link>
        </li>
        <li>
          <Link
            to="/user-update"
            className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
          >
            Cập nhật thông tin
          </Link>
        </li>
        <li>
          <Link
            to="/user-setting"
            className="block px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
          >
            Cài đặt
          </Link>
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
