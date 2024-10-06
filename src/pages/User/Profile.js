import React, { useEffect, useState } from 'react';
import UserMenu from '../../components/User/UserMenu'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { toast } from 'react-toastify';
import axios from 'axios';
import defaultProfilePic from '../../assest/avatar-user-default.png';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    name: '',
    avatar: '',
    gender: '',
    dob: '',
    address: ''
  });

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');

  
  useEffect(() => {
    const fetchUserInfo = async () => {
      
      try {
        const userId = await AsyncStorage.getItem('userId'); 
        const token = await AsyncStorage.getItem('authToken');

        const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        
        if (response.status === 200) {
          const { username, email, phoneNumber, name, avatar, gender, dob, address } = response.data;
          setUserInfo({ username, email, phoneNumber, name, avatar, gender, dob, address });
          setAvatarPreview(avatar || defaultProfilePic); 
        }
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Lỗi khi tải thông tin người dùng');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  // Handle avatar change
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setUserInfo({ ...userInfo, avatar: file });
      };
      reader.readAsDataURL(file);
    }
  };

  // Update user information
  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const userId = await AsyncStorage.getItem('userId');
      const formData = new FormData();
      formData.append('userId', userId);
      for (const key in userInfo) {
        formData.append(key, userInfo[key]);
      }
      
      const response = await axios.put(`https://scs-api.arisavinh.dev/api/v1/user/update-user`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.status === 200) {
        toast.success('Cập nhật thông tin thành công!');
      } else {
        toast.error(response.data.message || 'Đã xảy ra lỗi');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Lỗi khi cập nhật thông tin người dùng');
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; 
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar Menu */}
      <UserMenu />

      {/* Profile Content */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-5">Hồ sơ người dùng</h1>
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-2xl font-semibold mb-3">Thông tin hồ sơ</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {/* Avatar Field */}
          <div className="col-span-1 md:col-span-2 flex justify-center mb-6">
            <div className="w-32 h-32 relative overflow-hidden rounded-full">
              <img
                src={avatarPreview || defaultProfilePic}
                alt="Profile Avatar"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-3 cursor-pointer text-center absolute bottom-0 w-full">
                  Tải ảnh
                </div>
                <input type="file" className="hidden" onChange={handleAvatarChange} />
              </label>
            </div>
          </div>

          {/* Username Field (disabled) */}
          <div className="mb-4">
            <label className="block text-gray-700">Tên đăng nhập:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              value={userInfo.username}
              readOnly
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
              value={userInfo.phoneNumber}
              onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
            />
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Giới tính:</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              value={userInfo.gender}
              onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}
            >
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          {/* Date of Birth Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Ngày sinh:</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
              value={userInfo.dob ? userInfo.dob.split('T')[0] : ''}
              onChange={(e) => setUserInfo({ ...userInfo, dob: e.target.value })}
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
