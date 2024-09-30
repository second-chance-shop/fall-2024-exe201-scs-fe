import React from 'react'
import Logo from './Logo'
import { IoMdSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-yellow-400 z-30'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className='logo-container'>
                <Link to={'/'}>
                  <Logo w={90} h={50} />
                </Link>
            </div>
            <div className='hidden md:flex items-center w-full rounded-full border 
            justify-between max-w-sm focus-within:shadow pl-2 bg-white'
            >
                <input type='text' placeholder='Vui lòng nhập từ khoá...'
                  className='w-full outline-none'
                />
                <div className='flex rounded-r-full items-center h-8 justify-center min-w-[50px] bg-orange-600 '>
                  <IoMdSearch className='text-white text-lg'/>
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <div className=' w-full text-2xl cursor-pointer'>
                  <FaRegCircleUser/>
                </div>
                
                <div className='text-2xl relative'>
                  <span><FaShoppingCart/></span>
                  <div className='bg-orange-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center
                  absolute -top-2 -right-3'
                  >
                    <p className='text-sm'>0</p>
                  </div>
                </div>

                <div>
                  <Link to={'/login'} className='text-white bg-orange-600 px-3 py-1 rounded-full'>Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
