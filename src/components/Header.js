import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserProfile, setUserProfile } from '../store/userSlice';
import { toast } from 'react-toastify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultProfilePic from '../assest/avatar-user-default.png';
import { FaRegCircleUser } from 'react-icons/fa6';
import { AiOutlineOrderedList } from 'react-icons/ai'; // Import an icon for orders
import { logoutUser } from './authUtils';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(false); // State for orders dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state?.user?.user); // Ensure user is coming from Redux state

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(!!token);

      if (token) {
        try {
          const response = await fetch('https://scs-api.arisavinh.dev/api/v1/user/profile', {
            headers: {
              Authorization: `${token}`,
            },
          });
          const result = await response.json();

          if (result.isSuccess) {
            dispatch(setUserProfile(result.data)); // Ensure to pass only the user data
          }
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
        }
      }
    };
    checkLoginStatus();
  }, [dispatch]);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const handleLogout = async () => {
    await logoutUser();
    dispatch(clearUserProfile());
    setDropdownOpen(false); 
    navigate('/login');
  };

  const handleOptionClick = () => {
    setDropdownOpen(false);
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setDropdownOpen(!dropdownOpen);
    } else {
      toast.info('Vui lòng đăng nhập để tiếp tục');
      navigate('/login');
    }
  };

  const handleOrderIconClick = () => {
    setOrderDropdownOpen(!orderDropdownOpen); // Toggle order dropdown
  };

  return (
    <header className='h-16 shadow-md bg-yellow-400 z-30 flex items-center'>
      <div className='container mx-auto flex items-center justify-between h-full px-4'>
        <div className='logo-container'>
          <Link to={'/'}>
            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className='flex-grow hidden md:flex items-center rounded-full border justify-between max-w-sm focus-within:shadow pl-2 bg-white'>
          <input
            type='text'
            placeholder='Vui lòng nhập từ khoá...'
            className='w-full outline-none'
          />
          <div className='flex rounded-r-full items-center h-8 justify-center min-w-[50px] bg-orange-600'>
            <IoMdSearch className='text-white text-lg' />
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <Link to="/shopping-cart" className='text-2xl relative'>
            <span><FaShoppingCart /></span>
            <div className='bg-orange-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </Link>

          <div className='relative'>
            <div
              className='text-2xl cursor-pointer'
              onClick={handleUserIconClick}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              {isLoggedIn ? (
                <img
                  src={user?.avatar || defaultProfilePic}
                  className='w-10 h-10 rounded-full'
                  alt={user?.name || 'User Avatar'}
                />
              ) : (
                <FaRegCircleUser className='text-2xl' />
              )}
            </div>

            {isLoggedIn && dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border transition-all ease-in-out duration-300'>
                <ul className='py-2'>
                  <li className="border-b last:border-none">
                    <Link
                      to='/user-profile'
                      className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                      onClick={handleOptionClick}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="border-b last:border-none">
                    <Link
                      to='/user-setting'
                      className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                      onClick={handleOptionClick}
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* New Dropdown for Orders */}
          <div className='relative'>
            <div
              className='text-2xl cursor-pointer'
              onClick={handleOrderIconClick}
              aria-haspopup="true"
              aria-expanded={orderDropdownOpen}
            >
              <AiOutlineOrderedList /> {/* Order Icon */}
            </div>

            {isLoggedIn && orderDropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border transition-all ease-in-out duration-300'>
                <ul className='py-2'>
                  <li className="border-b last:border-none">
                    <Link
                      to='/purchase-orders' // Link to purchase orders page
                      className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                      onClick={handleOptionClick}
                    >
                      Đơn mua
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/sale-orders' // Link to sale orders page
                      className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                      onClick={handleOptionClick}
                    >
                      Đơn bán
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {!isLoggedIn && (
            <div>
              <Link to={'/login'} className='text-white bg-orange-600 px-3 py-1 rounded-full'>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
