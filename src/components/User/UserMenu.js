// UserMenu.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show a message indicating that the user is logging out
    alert('Đăng xuất...');

    // Here you can add your logout logic (e.g., clearing tokens, user data, etc.)
    // For example: localStorage.removeItem('token');

    // Redirect to the home page after the alert is acknowledged
    navigate('/');
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
