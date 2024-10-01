import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import backgroundImage from '../assest/background.png';
import registerIcons from '../assest/signin.gif';
import imageTobase64 from '../helpers/imageTobase64';

const Register = () => {
  const [data, setData] = useState({
    email: '',
    phone: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    profilePic: '',
    gender: '',
    dob: '',
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    if (data.password !== data.confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
      setLoading(false); // Stop loading
      return;
    }

    // Simulate API call
    console.log('Form submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating delay
    setLoading(false); // Stop loading
    navigate('/user-profile'); // Navigate to user profile or login page
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);

    setData((prev) => ({
      ...prev,
      profilePic: imagePic,
    }));
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
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Centered Avatar Section */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <div className="w-32 h-32 relative overflow-hidden rounded-full">
              <img
                src={data.profilePic || registerIcons}
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

          {/* Left Section */}
          <div className="flex flex-col gap-4">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Họ & tên</label>
              <input
                type="text"
                name="fullName"
                value={data.fullName}
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
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4">
            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleOnChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                required
                pattern="\d{10}"
                title="Số điện thoại phải gồm 10 chữ số"
              />
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
          </div>

          {/* Password Fields at the Bottom */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
            {/* Password Field */}
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

            {/* Confirm Password Field */}
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
              className={`w-full py-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-orange-400 hover:bg-orange-600'} text-white`}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Đang đăng ký...' : 'Đăng ký'}
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
