import React, { useContext, useEffect, useRef } from 'react'
import { ProductsContext } from '../App'
import { DetailFunck } from '../fetches/productsFetching';
import { useParams } from 'react-router-dom';
import Checked from '../components/Checked';
import parse from 'html-react-parser';

const Detail = () => {
    const imgRef = useRef()
    const { detailSlug } = useParams()
    // console.log(detailSlug)
    const [state, dispatch] = useContext(ProductsContext)
    useEffect(() => {
        DetailFunck(detailSlug, dispatch)
    }, []);
    // console.log(state.detail[0]);

    const toggleHandler = (store, dispatchType, card) => {
        // console.log(store,dispatchType,card);

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
    const imgHanler = (e) => {
        imgRef.current.src = e.target.src
    }
    // console.log(state.detail[0]);
    return (
        <div className='main-container mt-10 grid grid-cols-1 lg:grid-cols-2 p-10 gap-6'>
            <div className="flex flex-col gap-3 sm:flex-row items-center justify-between border rounded-md lg:col-span-2 py-5 px-2">
                <div className='text-slate-900 text-xl sm:text-3xl font-semibold  cursor-pointer'>{state.detail[0]?.name}</div>
                <p className='text-white p-2 rounded-md text-sm bg-green-500'><span>Артикул:</span> {state.detail[0]?.vendor_code}</p>
            </div>
            <div className='flex border overflow-hidden  flex-col sm:flex-row gap-3 col-span-1 rounded-md'>
                <div className='flex flex-wrap  sm:flex-nowrap sm:overflow-y-scroll detail_img   gap-3 sm:flex-col sm:w-28 h-full'>
                    {state.detail[0]?.images.map((img, index) => (
                        <img className='cursor-pointer w-28 sm:w-full h-auto' onClick={imgHanler} key={index} src={img} alt="" />
                    ))}
                </div>
                <div className='relative cursor-pointer'>
                    <div className='absolute bottom-0 rounded left-0 text-sm bg-green-600 text-white px-1'>{state.detail[0]?.type}</div>
                    <img ref={imgRef} className='w-full h-full aspect-[2/1] object-cover object-center' src={state.detail[0]?.images[0]} alt="" />
                    <Checked cardId={state.detail[0]?.id} />
                </div>
            </div>
            <div className="p-4 relative flex flex-col col-span-1  gap-2 flex-1 border rounded-md">
                <div className='flex flex-col gap-3'>
                    <span className={` font-bold sm:text-xl block ${state.detail[0]?.discount !== 0 ? 'inline' : 'hidden'}`}>Discount:<span className='text-red-500 text-xl line-through  font-semibold ml-3 '>{state.detail[0]?.discount}<sup>грн</sup></span></span>
                    <span className=' font-bold sm:text-xl block'>Ціна:<span className='text-green-500 text-2xl font-semibold ml-3'>{state.detail[0]?.price}<sup>грн</sup></span></span>
                    <span className=' font-bold sm:text-xl block'>Description:<span className='ml-3 text-base font-normal'>{parse(state.detail[0] ? state?.detail[0]?.description : '')}</span></span>
                </div>

                <div className='flex mt-auto gap-2'>
                    <button id='cart' onClick={() => toggleHandler('cart', 'UPDATE_CART', state.detail[0])} className='bg-green-500 gap-2 flex items-center justify-center transition-all hover:bg-green-600 hover:shadow-md text-white rounded-md py-2 flex-1 hover:shadow-green-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span>Buy Product</span>
                    </button>
                    <button id='scale' onClick={() => toggleHandler('scale', 'UPDATE_SCALE', state.detail[0])} className='bg-amber-400 hover:bg-amber-500 transition-all text-white rounded-md p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button id='wishlist' onClick={() => toggleHandler('wishlist', 'UPDATE_WISHLIST', state.detail[0])} className='bg-red-500 hover:bg-red-600 transition-all text-white rounded-md p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>
            </div>
            {state.detail[0]?.characteristic.length ?
                (<div className='flex flex-col p-5 lg:col-span-2 mt-5 border rounded-md'>
                    <h1 className='text-xl font-bold'>Характеристики</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
                        {state.detail[0]?.characteristic.map((character, index) => (
                            <div key={index} className='py-2 border-b border-dotted  sm:flex items-center justify-between'>
                                <p>{character.name}:</p>
                                <p className='font-bold'>{character.meaning}</p>
                            </div>
                        ))}
                    </div>
                </div>)
                : ''
            }
        </div>
    )
}

export default Detail