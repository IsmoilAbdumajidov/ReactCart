import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [showBar, setShowBar] = useState(false)
  return (
    <div className='lg:flex bg-white py-4 items-center justify-between main-container w-full'>
      <div className='flex items-center justify-between'>
        <NavLink to={'/'}>
          <h1 className='text-3xl font-semibold'>
            <span className='text-red-500'>React</span><span>Cart</span>
          </h1>
        </NavLink>
        <button onClick={() => { setShowBar(!showBar) }} className='lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
      </div>
      <div className={`${showBar ? 'h-auto' : 'h-0'} lg:flex flex-1 lg:h-auto overflow-hidden`}>
        <ul className='lg:flex items-center  lg:ml-20 lg:gap-6 text-[15px]'>
          <li className='py-2 lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><a href="#" className='group-hover:text-red-500 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Home</a></li>
          <li className='py-2 lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><a href="#" className='group-hover:text-red-500 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Shopping</a></li>
          <li className='py-2 lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><a href="#" className='group-hover:text-red-500 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Pages</a></li>
          <li className='py-2 lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><a href="#" className='group-hover:text-red-500 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Contact</a></li>
        </ul>
        <ul className='lg:flex items-center  ml-auto text-[13px] font-[600] lg:gap-6'>
          <li className='py-2 lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'>
            <a href="#" className='hover:text-red-500 group-hover:pl-5 transition-all'>Login</a>/
            <a href="#" className='hover:text-red-500 transition-all'>Register</a>
          </li>
          <li className='py-2 lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><a href="#" className='group-hover:text-red-500 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Language</a></li>
          <li className='py-2 lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><a href="#" className='group-hover:text-red-500 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Currency</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar