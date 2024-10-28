import React from 'react';
import logo from '../assest/logo.png';

const Logo = () => {
  return (
    <div className='flex justify-center items-center rounded-full bg-white shadow-lg p-2'>
      <img src={logo} alt="Logo" className='w-20 h-auto rounded-full object-cover' />
    </div>
  );
}

export default Logo;
