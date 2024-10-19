import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import backgroundImage from '../assest/background.png'; 
import forgotPasswordIcon from '../assest/forgotpasswnedSend.gif'; 
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(180); // 3-minute countdown
  const navigate = useNavigate();

  // Countdown timer for resending OTP
  useEffect(() => {
    let countdown;
    if (otpSent && timer > 0) {
      countdown = setInterval(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpSent) {
      // Request OTP
      try {
        const response = await axios.put(`https://scs-api.arisavinh.dev/api/v1/user/forget-password?email=${email}`);
        if (response.status === 200 && response.data.isSuccess) {
          setOtpSent(true);
          toast.success('OTP đã được gửi về email của bạn.');
          setTimer(180); // Reset timer
        } else {
          toast.error(response.data.message || 'Đã xảy ra lỗi.');
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Lỗi khi gửi yêu cầu đặt lại mật khẩu.');
      }
    } else {
      // Verify OTP and reset password
      try {
        const response = await axios.patch(
          `https://scs-api.arisavinh.dev/api/v1/OTP/verify-set-password-forget?newPassword=${newPassword}&confirmPassword=${confirmPassword}`,
          { otp, email }
        );
        if (response.status === 200 && response.data.isSuccess) {
          toast.success('Cài đặt mật khẩu mới thành công!');
          // Clear form data after successful password reset
          setEmail('');
          setOtp('');
          setNewPassword('');
          setConfirmPassword('');
          setOtpSent(false);
          navigate('/login'); // Redirect to login after resetting password
        } else {
          toast.error(response.data.message || 'OTP không chính xác.');
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Lỗi khi xác thực OTP.');
      }
    }
  };

  const handleResendOtp = async () => {
    if (timer <= 0) { // Check if the timer has expired
      try {
        await axios.post(`https://scs-api.arisavinh.dev/api/v1/OTP/resend-otp-forget-password?email=${email}`);
        setTimer(180); // Reset timer
        toast.success('OTP đã được gửi lại!');
      } catch (error) {
        toast.error(error.response?.data?.message || 'Lỗi khi gửi lại OTP.');
      }
    } else {
      toast.warning('Vui lòng đợi trước khi yêu cầu gửi lại OTP.');
    }
  };

  const handleBack = () => {
    navigate('/login');  // Navigate back to login
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 z-10">
        <FaArrowLeft
          className="absolute top-4 left-4 text-xl text-gray-500 cursor-pointer hover:text-black"
          onClick={handleBack}
        />

        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
          <img src={forgotPasswordIcon} alt='Forgot Password Icon' className='w-full h-full mix-blend-multiply' />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Quên mật khẩu</h2>

        <form onSubmit={handleSubmit} className='pt-6 flex flex-col gap-2'>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {otpSent && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nhập OTP</label>
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Mật khẩu mới</label>
                <input
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu mới</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <p className="text-gray-700">Thời gian còn lại: {timer}s</p>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600 mb-4"
          >
            {otpSent ? 'Xác nhận OTP' : 'Gửi yêu cầu đặt lại mật khẩu'}
          </button>

          {otpSent && (
            <button
              type="button"
              className="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-600 mb-4"
              onClick={handleResendOtp}
              disabled={timer > 0}
            >
              Gửi lại OTP
            </button>
          )}

          {/* Back to login link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Quay lại{' '}
              <Link to="/login" className="text-orange-500 hover:underline">
                Đăng nhập
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Optional dark gradient background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default ForgotPassword;
