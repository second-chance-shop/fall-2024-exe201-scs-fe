import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import backgroundImage from '../assest/background.png'; 
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleBack = () => {
    navigate('/');  // Navigate back to home
  };

  return (
    <section id='login'
    className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
    style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    >
      {/* Login Form Container */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 z-10">
        {/* Back Icon */}
        <FaArrowLeft
          className="absolute top-4 left-4 text-xl text-gray-500 cursor-pointer hover:text-black"
          onClick={handleBack}
        />

        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
          <img src={loginIcons} alt='login Icons' 
          className='w-full h-full mix-blend-multiply'/>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>

        <form onSubmit={handleSubmit} className='pt-6 flex flex-col gap-2'>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              value={data.email}
              onChange={handleOnChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            
            <div className='flex items-center'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={data.password}
                name='password'
                onChange={handleOnChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm pr-10" 
                required
              />
              <div className='absolute right-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword((preve) => !preve )}
              >
                <span>
                  {
                    showPassword ? ( <FaEyeSlash /> ) : ( <FaEye /> )
                  }
                </span>
              </div>
            </div>

            <div>
              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-orange-500' >
                Quên mật khẩu
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600 mb-4"
          >
            Đăng nhập
          </button>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-white-500 text-red-500 py-2 rounded-md hover:bg-gray-300 flex justify-center items-center mb-4"
          >
            <i className="fab fa-google mr-2"></i> Đăng nhập bằng Google
          </button>
          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Bạn chưa có tài khoản?{' '}
              <Link to="/register" className="text-orange-500 hover:underline">
                Đăng ký
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Optional dark gradient background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  )
}

export default Login
