import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import backgroundImage from '../assest/background.png';
import registerIcons from '../assest/signin.gif';
import imageTobase64 from '../helpers/imageTobase64';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
      username: '',
      email: '',
      phoneNumber: '',
      name: '',
      password: '',
      confirmPassword: '',
      avatar: '',
      gender: '',
      dob: '',
      address: '',
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage(''); 

      if (data.password !== data.confirmPassword) {
          toast.error('Mật khẩu không trùng khớp');
          return;
      }
  
      try {
          const response = await axios.post('https://scs-api.arisavinh.dev/api/v1/user/register', data, {
              withCredentials: true, 
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          if (response.status === 200 && response.data.isSuccess) {
              toast.success(response.data.message);
              navigate('/login');
          } else {
              toast.error(response.data.message || 'Đã xảy ra lỗi');
          }
  
      } catch (error) {
          // Handle error more gracefully
          toast.error(error.response?.data?.message || 'Lỗi kết nối đến server');
      }
    };

    const handleUploadPic = async (e) => {
      const file = e.target.files[0];
      if (file) {
        const imagePic = await imageTobase64(file);
        setData((prev) => ({
          ...prev,
          avatar: imagePic,
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

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Avatar Section */}
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <div className="w-32 h-32 relative overflow-hidden rounded-full">
                <img
                  src={data.avatar || registerIcons}
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

            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Tên đăng nhập</label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Họ & tên</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
              <input
                type="tel"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
                pattern="\d{10}"
                title="Số điện thoại phải gồm 10 chữ số"
              />
            </div>

            {/* Address Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={data.address}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            {/* Gender Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Giới tính</label>
              <select
                name="gender"
                value={data.gender}
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

            {/* Date of Birth Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <input
                type="date"
                name="dob"
                value={data.dob}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Password Fields */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={data.password}
                    onChange={handleOnChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm pr-10"
                    required
                  />
                  <div
                    className="absolute right-3 text-xl cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                <div className="flex items-center">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm pr-10"
                    required
                  />
                  <div
                    className="absolute right-3 text-xl cursor-pointer"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600"
              >
                Đăng ký
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Bạn đã có tài khoản?{' '}
              <a href="/login" className="text-orange-500 hover:underline">
                Đăng nhập ngay!
              </a>
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </div>
    );
};

export default Register;
