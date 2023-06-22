import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex  bg-white py-4 items-center justify-between main-container w-full'>
      <NavLink to={'/'}>
        <h1 className='text-3xl font-semibold'>
          <span className='text-red-500'>React</span><span>Cart</span>
        </h1>
      </NavLink>
      <ul className='flex items-center  ml-20 gap-6 text-[15px]'>
        <li className='py-4'><a href="#" className='hover:text-red-500 transition duration-300'>Home</a></li>
        <li className='py-4'><a href="#" className='hover:text-red-500 transition duration-300'>Shopping</a></li>
        <li className='py-4'><a href="#" className='hover:text-red-500 transition duration-300'>Pages</a></li>
        <li className='py-4'><a href="#" className='hover:text-red-500 transition duration-300'>Contact</a></li>
      </ul>
      <ul className='flex items-center  ml-auto text-[13px] font-[600] gap-6'>
        <li className='py-4'>
          <a href="#" className='hover:text-red-500'>Login</a>/
          <a href="#" className='hover:text-red-500'>Register</a>
          </li>
        <li className='py-4'><a href="#" className='hover:text-red-500'>Language</a></li>
        <li className='py-4'><a href="#" className='hover:text-red-500'>Currency</a></li>
      </ul>
    </div>
  )
}

export default Navbar