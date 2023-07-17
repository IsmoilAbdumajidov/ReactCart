import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../App'
import SocialLink from './SocialLink'
import logo from "../assets/vite.png"
import ModalForm from './ModalForm'
import { fetchContact } from '../fetches/productsFetching'


const Footer = () => {
  const [showModalForm, setShowModalForm] = useState(false)
  const [state, dispatch] = useContext(ProductsContext)

  useEffect(() => {
    fetchContact(dispatch)
  }, [])
  return (
    <div className='bg-[#f3f3f3]'>
      <div className="main-container text-[14px] py-14  xl:gap-32 gap-5 grid grid-cols-1 lg:grid-cols-3 ">
        {showModalForm ? <ModalForm setState={setShowModalForm} /> : ''}
        <div className='flex flex-col justify-between col-span-1'>
          <Link to={'/'}>
            <h1 className='text-3xl font-semibold'>
              <img className='w-20' src={logo} alt="" />
            </h1>
          </Link>
          <button onClick={() => setShowModalForm(true)} className={'cursor-pointer text-[12px] rounded py-2 gap-3 w-52 flex items-center border bg-red-600 text-white my-3 px-3 fill-white'}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
            <span>Зворотній зв'язок</span>
          </button>
          <p>&copy;  Інтернет-магазин на OkayCMS</p>
        </div>
        <div className='flex flex-col justify-between gap-4 col-span-1'>
          <h1 className='text-lg font-semibold uppercase'>
            Про магазин
          </h1>
          <ul className='flex flex-col gap-2   text-[14px]'>
            <li><Link to={'/'} className='hover:text-red-500' href="#">Головна</Link></li>
            <li><Link to={'/приблизно'} className='hover:text-red-500' href="#"> Приблизно</Link></li>
            <li><Link to={'/акції'} className='hover:text-red-500' href="#">Акції</Link></li>
            <li><Link to={'/контакти'} className='hover:text-red-500' href="#">Контакти</Link></li>
          </ul>
        </div>
        <div className='flex flex-col justify-between col-span-1'>
          <h1 className='text-lg font-semibold uppercase'>
            Контакти
          </h1>
          <ul className='flex flex-col   gap-6  text-[14px]'>
            <li>
              <SocialLink />
            </li>
            <li>
              <a className='flex gap-2' href={`tel:${state.contact[0]?.phone_number}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{state.contact[0]?.phone_number}</span>
              </a>
            </li>
            <li>
              <a className='flex gap-2' href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{state.contact[0]?.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer