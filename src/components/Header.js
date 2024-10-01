import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { IoMdSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate('/login');
  };

  const handleOptionClick = () => {
    setDropdownOpen(false); // Close dropdown when clicking on any option
  };

  const handleClickOutside = (event) => {
    if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false); // Close the dropdown if clicking outside
    }
  };

  useEffect(() => {
    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]); // Effect runs when dropdownOpen changes

  return (
    <header className='h-16 shadow-md bg-yellow-400 z-30 flex items-center'>
      <div className='container mx-auto flex items-center justify-between h-full px-4'>
        <div className='logo-container'>
          <Link to={'/'}>
            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className='flex-grow hidden md:flex items-center rounded-full border 
        justify-between max-w-sm focus-within:shadow pl-2 bg-white'>
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
          <div className='relative' ref={dropdownRef}>
            <div
              className='text-2xl cursor-pointer'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaRegCircleUser />
            </div>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border transition-all ease-in-out duration-300'>
                <ul className='py-2'>
                  <li className="border-b last:border-none">
                    <Link
                      to='/user-profile'
                      className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                      onClick={handleOptionClick}
                    >
                      Hồ sơ
                    </Link>
                  </li>
                  <li className="border-b last:border-none">
                    <Link
                      to='/user-setting'
                      className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                      onClick={handleOptionClick}
                    >
                      Cài đặt
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200'
                    >
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/shopping-cart" className='text-2xl relative'>
            <span><FaShoppingCart /></span>
            <div className='bg-orange-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center
              absolute -top-2 -right-3'>
              <p className='text-sm'>2</p>
            </div>
          </Link>

          <div>
            <Link to={'/login'} className='text-white bg-orange-600 px-3 py-1 rounded-full'>Đăng nhập</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
