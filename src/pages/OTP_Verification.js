import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import otpVerificationGif from '../assest/otp-verification.gif';
import backgroundImage from '../assest/background.png';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Assuming email is passed via navigate from the registration page
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      toast.error('Không tìm thấy email! Hãy đăng ký lại.');
      navigate('/register'); // Redirect to register if email is missing
    }
  }, [email, navigate]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('https://scs-api.arisavinh.dev/api/v1/OTP/verify', {
        otp,
        email, 
      });

      if (response.data.isSuccess) {
        toast.success('Xác minh OTP thành công!');
        navigate('/login'); 
      } else {
        toast.error(response.data.message || 'Mã OTP không hợp lệ');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Lỗi kết nối đến server');
    }
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <section
      id="otp-verification"
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg z-10 text-center">
        {/* Back Button */}
        <FaArrowLeft
          className="absolute top-4 left-4 text-xl text-gray-500 cursor-pointer hover:text-black"
          onClick={handleBack}
        />

        {/* OTP Verification GIF */}
        <div className="flex justify-center mb-4">
          <img src={otpVerificationGif} alt="OTP Verification" className="w-32 h-32" />
        </div>

        <h2 className="text-2xl font-bold mb-6">Nhập mã OTP</h2>
        
        {/* Display email with message */}
        <div className="text-gray-700 mb-4">
          OTP đã được gửi về <strong>{email}</strong>. Vui lòng kiểm tra hộp thư.
        </div>
        
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Nhập mã OTP"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Xác nhận OTP
          </button>
        </form>
      </div>

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default OtpVerification;