import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import backgroundImage from '../assest/background.png';
import registerIcons from '../assest/signin.gif';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    name: '',
    avatar: '',
    gender: '',
    dob: '',
    address: '',
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Create a FormData object for the request
    const formData = new FormData();
    formData.append('user', JSON.stringify({
      username: userInfo.username,
      password: userInfo.password,
      phoneNumber: userInfo.phoneNumber,
      email: userInfo.email,
      name: userInfo.name,
      address: userInfo.address,
      gender: userInfo.gender,
      dob: userInfo.dob,
    }));


    // Add the avatar file if provided
    if (userInfo.avatar) {
      formData.append('file', userInfo.avatar);
    }

    try {
      // Send the request using axios
      const response = await axios.post(
        'https://scs-api.arisavinh.dev/api/v1/user/create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200 && response.data.isSuccess) {
        toast.success(
          'OTP đã được gửi đến email của bạn. Vui lòng nhập OTP để hoàn tất đăng ký.'
        );
        navigate('/otp-verification', { state: { email: userInfo.email } });
      } else {
        toast.error(response.data.message || 'Đã xảy ra lỗi');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Lỗi kết nối đến server');
    }
  };

  const handleUploadPic = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo((prev) => ({
        ...prev,
        avatar: file,
      }));
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative bg-white p-8 rounded-lg m-5 shadow-lg w-full max-w-4xl z-10">
        <FaArrowLeft
          className="absolute top-4 left-4 text-xl text-gray-500 cursor-pointer hover:text-black"
          onClick={handleBack}
        />
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng ký</h2>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <div className="w-32 h-32 relative overflow-hidden rounded-full">
              <img
                src={userInfo.avatar ? URL.createObjectURL(userInfo.avatar) : registerIcons}
                alt="register Icons"
                className="w-full h-full mix-blend-multiply"
              />
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-3 cursor-pointer text-center absolute bottom-0 w-full">
                  Tải ảnh
                </div>
                <input type="file" className="hidden" onChange={handleUploadPic} />
              </label>
            </div>
          </div>
          {/* Input fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Tên đăng nhập</label>
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleOnChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Họ & tên</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleOnChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleOnChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          {/* Password field with toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
            <input
              type="tel"
              name="phoneNumber"
              value={userInfo.phoneNumber}
              onChange={handleOnChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
              pattern="\d{10}"
              title="Số điện thoại phải gồm 10 chữ số"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={userInfo.password}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          {/* Additional fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleOnChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Giới tính</label>
            <select
              name="gender"
              value={userInfo.gender}
              onChange={handleOnChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">-- Chọn giới tính --</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
            <input
              type="date"
              name="dob"
              value={userInfo.dob}
              onChange={handleOnChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          {/* Submit button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600"
            >
              Đăng ký
            </button>
          </div>
        </form>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Register;
