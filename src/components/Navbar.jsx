import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchDiscount } from '../fetches/productsFetching'
import { ProductsContext } from '../App'
const Navbar = () => {
  const [showBar, setShowBar] = useState(false)
  const [state,dispatch] = useContext(ProductsContext)

  useEffect(() => {
    fetchDiscount(dispatch)
  }, [])
  
  // console.log(state);
  return (
    <div className='lg:flex bg-white py-4 items-center justify-between main-container w-full'>
      <div className='flex items-center justify-between'>
        <NavLink to={'/'}>
          <h1 className='text-3xl font-semibold'>
            <span className='text-red-600'>React</span><span className='text-slate-900'>Cart</span>
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
          <NavLink to={'/'} className='py-2 lg:py-4 block group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span href="#" className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Головна</span></NavLink>
          <NavLink to={'/приблизно'} className='py-2 lg:py-4 block group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span href="#" className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Приблизно</span></NavLink>
         {state.discount.length ? <NavLink to={'/акции'} className='py-2 lg:py-4 block group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span href="#" className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Акции</span></NavLink> : ''}
          <NavLink to={'/контакти'} className='py-2  block lg:py-4 group hover:bg-green-300 lg:hover:bg-transparent rounded-md  transition-all'><span className='group-hover:text-red-600 lg:group-hover:pl-0 group-hover:pl-5 transition-all'>Контакти</span></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar