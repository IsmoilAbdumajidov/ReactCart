import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [showBar, setShowBar] = useState(false)
  return (
    <div className='lg:flex bg-white py-4 items-center justify-between main-container w-full'>
      <div className='flex items-center justify-between'>
        <NavLink to={'/'}>
          <h1 className='text-3xl font-semibold'>
            <span className='text-red-600'>React</span><span>Cart</span>
          </h1>
        </NavLink>
        <button onClick={() => { setShowBar(!showBar) }} className='lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
      </div>
      <div className={`${showBar ? 'h-auto' : 'h-0'} lg:flex  lg:h-auto overflow-hidden`}>
        <ul className='lg:flex items-center  lg:ml-20 lg:gap-6 text-[15px]'>
          <NavLink to={'/home'} className='py-2 lg:py-4 block group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span href="#" className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Home</span></NavLink>
          <NavLink to={'/about'} className='py-2 lg:py-4 block group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span href="#" className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>About</span></NavLink>
          <NavLink to={'/aksiya'} className='py-2 lg:py-4 block group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span href="#" className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Aksiya</span></NavLink>
          <NavLink to={'/contact'} className='py-2  block lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Contact</span></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar