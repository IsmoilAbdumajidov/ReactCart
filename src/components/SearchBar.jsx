import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fechtAllCategory } from '../fetches/productsFetching';
import { ProductsContext } from '../App';
import DropCategory from './DropCategory';


const SearchBar = () => {
  const [state, dispatch] = useContext(ProductsContext)
  useEffect(() => {
    fechtAllCategory(dispatch)
  }, []);
  // console.log(state);
  return (
    <div className='bg-red-600 py-3 sticky z-10 top-[-1px]'>
      <div className="main-container flex gap-5 flex-wrap items-center justify-between">
        <div className='relative bg-slate-800 px-3 py-1 cursor-pointer rounded-md w-full sm:w-64 '>
          <DropCategory categories={state.categories} />
        </div>
        <div className='flex text-black lg:w-[500px] xl:w-[650px] w-full order-2 lg:order-1'>
          <input type="text" className='rounded-s-md py-3 rounded-e-none text-[14px] bg-white w-full placeholder:text-black' placeholder='Search product...' />
          <button className='bg-slate-800 rounded-e-md rounded-s-none text-[14px] text-white py-3 px-10'>Search</button>
        </div>
        <div className='flex gap-6 justify-evenly  items-center text-white order-1 lg:order-2 w-full sm:w-auto'>
          <Link to={'/wishlist'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.wishlist.length}</span>
            <p>Wish list</p>
          </Link>
          <Link to={'/cart'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.cart.length}</span>
            <p>Cart</p>
          </Link>
          <Link to={'/scale'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.scale.length}</span>
            <p>Scale</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchBar