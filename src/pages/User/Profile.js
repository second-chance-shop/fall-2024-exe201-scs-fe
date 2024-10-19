import React, { useEffect, useState } from 'react'; 
import UserMenu from '../../components/User/UserMenu'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import defaultProfilePic from '../../assest/avatar-user-default.png';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
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

  const navigate = useNavigate();

  // Fetch user information
  const fetchUserInfo = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        setErrorMessage('Authentication token not found.');
        setLoading(false);
        return;
      }
      
      const response = await axios.get('https://scs-api.arisavinh.dev/api/v1/user/profile', {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 200 && response.data.isSuccess) {
        const { userId, username, email, phoneNumber, name, avatar, gender, dob, address } = response.data.data;
        setUserInfo({ userId, username, email, phoneNumber, name, avatar, gender, dob, address });
        setAvatarPreview(avatar || defaultProfilePic);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error fetching user info');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; 
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserMenu />

      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-5">Hồ sơ người dùng</h1>
        <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-2xl font-semibold mb-3">Thông tin hồ sơ</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {/* Display User Information */}
          <div className="col-span-1 md:col-span-2 flex justify-center mb-6">
            <div className="w-32 h-32 relative overflow-hidden rounded-full">
              <img
                src={avatarPreview || defaultProfilePic}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-4">
            <strong>ID User:</strong> {userInfo.userId}
          </div>
          <div className="mb-4">
            <strong>Tên đăng nhập:</strong> {userInfo.username}
          </div>
          <div className="mb-4">
            <strong>Họ & tên:</strong> {userInfo.name}
          </div>
          <div className="mb-4">
            <strong>Email:</strong> {userInfo.email}
          </div>
          <div className="mb-4">
            <strong>Số điện thoại:</strong> {userInfo.phoneNumber}
          </div>
          <div className="mb-4">
            <strong>Giới tính:</strong> {userInfo.gender}
          </div>
          <div className="mb-4">
            <strong>Ngày sinh:</strong> {userInfo.dob ? userInfo.dob.split('T')[0] : ''}
          </div>
          <div className="mb-4">
            <strong>Địa chỉ:</strong> {userInfo.address}
          </div>

          {/* Edit Button */}
          <div className="mt-4">
            <button
              onClick={() => navigate('/user-update')}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-200"
            >
              Chỉnh sửa hồ sơ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
