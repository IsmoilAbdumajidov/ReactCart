import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../App'
import SocialLink from './SocialLink'



const Footer = () => {
  const [state,_] = useContext(ProductsContext)
  return (
    <div className='bg-[#f3f3f3]'>
      <div className="main-container text-[14px] py-14  xl:gap-32 gap-5 grid grid-cols-1 lg:grid-cols-3 ">
        <div className='flex flex-col justify-between col-span-1'>
          <Link to={'/'}>
            <h1 className='text-3xl font-semibold'>
              <span className='text-red-600'>React</span><span>Cart</span>
            </h1>
          </Link>
          <p className='text-[14px]'>Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or web designs the passage</p>
          <p>&copy;  2023 Company, Inc. All rights reserved.</p>
        </div>
        <div className='flex flex-col justify-between gap-4 col-span-1'>
          <h1 className='text-lg font-semibold uppercase'>
            MY ACCOUNT
          </h1>
          <ul className='flex flex-col gap-2   text-[14px]'>
            <li><Link className='hover:text-red-500' href="#">Home</Link></li>
            <li><Link className='hover:text-red-500' href="#">About</Link></li>
            <li><Link className='hover:text-red-500' href="#">Aksiya</Link></li>
            <li><Link className='hover:text-red-500' href="#">Contact</Link></li>
          </ul>
        </div>
        <div className='flex flex-col justify-between col-span-1'>
          <h1 className='text-lg font-semibold uppercase'>
            MY Social Media
          </h1>
          <ul className='flex flex-col   gap-6  text-[14px]'>
            <li>
               <SocialLink socialData={state.socialLink} />
            </li>
            <li>
              <a className='flex gap-2' href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+566 477 256, +566 254 575</span>
              </a>
            </li>
            <li>
              <a className='flex gap-2' href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@domain.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer