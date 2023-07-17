import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fechtAllCategory } from '../fetches/productsFetching';
import { ProductsContext } from '../App';
import DropCategory from './DropCategory';
import ModalForm from './ModalForm';


const SearchBar = () => {
  const [state, dispatch] = useContext(ProductsContext)
  const navigate = useNavigate()
  useEffect(() => {
    fechtAllCategory(dispatch)
  }, []);
  const [showModalForm, setShowModalForm] = useState(false)
  const inputRef = useRef()
  const searchHandler = () => {
    const inputValue = inputRef.current.value;
    inputRef.current.value = ''
    if (inputValue) {
      navigate(`/?search=${inputValue}`)
    } else {
      navigate('/')
    }
    // searchByQuery(inputValue, dispatch)
  }

  return (
    <div className='bg-red-600 py-3 sticky z-10 top-[-1px]'>
      <div className="main-container flex gap-5 flex-wrap items-center justify-between">
        <button onClick={() => navigate(-1)} className='bg-slate-800 px-6 text-white py-3 cursor-pointer rounded-md flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
          <p>Назад</p>
        </button>
        <div className='flex text-black lg:w-[500px] xl:w-[650px] w-full order-2 lg:order-1'>
          <input ref={inputRef} type="text" className='rounded-s-md py-3 rounded-e-none text-[14px] bg-white w-full placeholder:text-black' placeholder='Що Ви шукаєте?' />
          <button onClick={searchHandler} className='bg-slate-800 rounded-e-md rounded-s-none text-[14px] text-white py-3 px-10'>Пошук</button>
        </div>
        <div className='flex gap-6 justify-evenly  items-center text-white order-1 lg:order-2 w-full sm:w-auto'>
          <Link to={'/wishlist'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.wishlist.length}</span>
          </Link>
          <Link to={'/cart'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.cart.length}</span>
          </Link>
          <Link to={'/scale'} className={'flex cursor-pointer flex-col items-center relative text-[12px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>
            <span className='absolute right-0 top-0 bg-black w-4 h-4 flex items-center justify-center rounded-full'>{state.scale.length}</span>
          </Link>
          <div onClick={() => setShowModalForm(true)} className={'flex cursor-pointer flex-col items-center relative text-[12px] fill-white'}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
          </div>
          {showModalForm ? <ModalForm setState={setShowModalForm} /> : ''}
        </div>
      </div>
    </div>
  )
}

export default SearchBar