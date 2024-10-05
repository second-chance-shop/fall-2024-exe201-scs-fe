import React, { useEffect, useState } from 'react';
import UserMenu from '../../components/User/UserMenu'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { toast } from 'react-toastify';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    username: '' 
  });
  
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Cập nhật thông tin người dùng
  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');

      const response = await fetch('https://scs-api.arisavinh.dev/api/v1/user/update-user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Gửi token trong header
        },
        body: JSON.stringify(userInfo), // Gửi thông tin đã chỉnh sửa
      });

      const result = await response.json();
      if (result.success) {
        toast.success('Cập nhật thông tin thành công!');
      } else {
        toast.error(result.message || 'Failed to update user data');
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error(error.message);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; // Có thể thay thế bằng spinner hoặc thông báo khác
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar Menu */}
      <UserMenu />

      {/* Profile Content */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-5">Thông tin người dùng</h1>
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-2xl font-semibold mb-3">Thông tin hồ sơ</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          
          {/* Username Field (disabled) */}
          <div className="mb-4">
            <label className="block text-gray-700">Tên đăng nhập:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              value={userInfo.username}
              readOnly // Không cho phép chỉnh sửa
            />
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Họ & tên:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          </div>
          
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
          </div>
          
          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Số điện thoại:</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            />
          </div>
          
          {/* Update Button */}
          <div className="mt-4">
            <button
              onClick={handleUpdate}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-200"
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
