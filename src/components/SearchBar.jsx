import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { searchByQuery } from '../fetches/productsFetching'
import { useContext } from 'react'
import { ProductsContext } from '../App'

const SearchBar = () => {
  const [state, dispatch] = useContext(ProductsContext)

  const inputRef = useRef()
  const searchHandler = () => {
    const inputValue = inputRef.current.value;
    searchByQuery(inputValue, dispatch)
  }
  return (
    <div className='bg-red-500 p-3 sticky z-10 top-[-1px]'>
      <div className="main-container flex items-center justify-between">
        <div className='relative bg-slate-800 py-3 cursor-pointer rounded-md w-max'>
          <div className='flex items-center gap-3 justify-center w-[200px] text-white'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
            <span>All categories</span>
          </div>
        </div>
        <div className=' flex text-black'>
          <input ref={inputRef} type="text" className='rounded-s-md py-3 rounded-e-none text-[14px] bg-white w-[500px] placeholder:text-black' placeholder='Search product...' />
          <button onClick={searchHandler} className='bg-slate-800 rounded-e-md rounded-s-none text-[14px] text-white py-3 px-10'>Search</button>
        </div>
        <div className='flex gap-6 items-center text-white'>
          <NavLink to={'/wishlist'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.wishlist.length}</span>
            <p>Wish list</p>
          </NavLink>
          <NavLink to={'/cart'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.cart.length}</span>
            <p>Cart</p>
          </NavLink>
          <a href='#' className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p>Account</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SearchBar