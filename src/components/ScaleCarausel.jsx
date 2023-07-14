import React, { useContext, useRef, useState } from 'react'
import { ProductsContext } from '../App'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import Checked from '../components/Checked';
import Charactiristic from '../components/Charactiristic';


const ScaleCarausel = () => {
    const [state, dispatch] = useContext(ProductsContext)
    const toggleHandler = (store, dispatchType, card) => {
      card = { ...card, count: 1 }
      let dataFromLS = JSON.parse(localStorage.getItem(store)) || []
      const el = dataFromLS?.find(item => item.id === card.id)
      if (el) {
        const filteredArr = dataFromLS.filter(item => item.id !== card.id)
        localStorage.setItem(store, JSON.stringify(filteredArr));
        dispatch({ type: dispatchType, payload: filteredArr })
      }
      else {
        localStorage.setItem(store, JSON.stringify([...dataFromLS, card]))
        dispatch({ type: dispatchType, payload: [...dataFromLS, card] })
      }
    }
  return (
    <Swiper slidesPerView={1} breakpoints={{
        900: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,

        },
      }} navigation={true} modules={[Navigation]} className="mySwiper ">
        {state.scale.length ? state.scale.map((card, index) => (
          <SwiperSlide key={index} >
            <div className='overflow-hidden mx-1  cursor-pointer mb-1  flex flex-col  transition-all relative' >
              {/* {console.log(card)} */}
              <Link to={`/product/${card.slug}`} className='relative h-[280px] sm:h-[300px] lg:h-[330px] cursor-pointer group'>
                <div className='absolute bottom-0 rounded left-0 text-sm bg-green-600 text-white px-1'>{card.type}</div>
                <img className='w-full h-full aspect-square object-cover' src={card?.images[0]} alt="" />
                <Checked cardId={card?.id} />
              </Link>
              <div className="sm:p-4 p-2 relative h-[280px] sm:h-[260px] lg:h-[230px] flex flex-col  gap-2 border">
                <Link to={`/product/${card.slug}`} className='text-slate-900 text-sm sm:text-md md:text-lg font-bold cursor-pointer'>{card?.name.length < 50 ? card?.name : `${card?.name.slice(0, 50)}...`}</Link>
                <div>
                  <span className={`text-gray-400 text-xs sm:text-sm block ${card?.discount !== 0 ? 'inline' : 'hidden'}`}>Знижка:<span className='text-red-500 line-through  font-semibold ml-3 '>{card?.discount}<sup>грн</sup></span></span>
                  <span className='text-gray-400 text-xs sm:text-sm block'>Ціна:<span className='text-green-500 text-lg font-semibold ml-3'>{card?.price}<sup>грн</sup></span></span>
                </div>

                <div className='flex flex-col sm:flex-row mt-auto gap-2'>
                  <button id='cart' onClick={() => toggleHandler('cart', 'UPDATE_CART', card)} className='bg-green-500 gap-2 flex items-center justify-center transition-all hover:bg-green-600 text-white rounded-md py-2 flex-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className='text-sm sm:text-base'>Купити</span>
                  </button>
                  <div className='flex gap-2'>
                  <button id='scale' onClick={() => toggleHandler('scale', 'UPDATE_SCALE', card)} className='bg-amber-400 hover:bg-amber-500 transition-all text-white rounded-md p-2 flex-1 flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button id='wishlist' onClick={() => toggleHandler('wishlist', 'UPDATE_WISHLIST', card)} className='bg-red-500 hover:bg-red-600 transition-all text-white rounded-md p-2 flex-1 flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=' border-t'><Charactiristic cardData={card} /></div>
          </SwiperSlide>
        )) : <p className='min-h-screen'>No item left..</p>}
      </Swiper>
  )
}

export default ScaleCarausel