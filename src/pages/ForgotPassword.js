import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import backgroundImage from '../assest/background.png'; 
import forgotPasswordIcon from '../assest/forgotpasswnedSend.gif'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling password reset here
    console.log('Reset password request for:', email);
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
      {/* Forgot Password Form Container */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 z-10">
        {/* Back Icon */}
        <FaArrowLeft
          className="absolute top-4 left-4 text-xl text-gray-500 cursor-pointer hover:text-black"
          onClick={handleBack}
        />

        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
          <img src={forgotPasswordIcon} alt='Forgot Password Icon'
            className='w-full h-full mix-blend-multiply' />
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

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600 mb-4"
          >
            Gửi yêu cầu đặt lại mật khẩu
          </button>

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
