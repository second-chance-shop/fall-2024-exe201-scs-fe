// UserProfile.js
import React from 'react';
import UserMenu from '../../components/User/UserMenu'; 

const UserProfile = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar Menu */}
      <UserMenu />

      {/* Profile Content */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-5">Thông tin người dùng</h1>
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-2xl font-semibold mb-3">Thông tin hồ sơ</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Họ & tên:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              placeholder="nguyen.vana@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Số điện thoại:</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              placeholder="+84 (123) 456-7890"
            />
          </div>
          <div className="mt-4">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-200">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
