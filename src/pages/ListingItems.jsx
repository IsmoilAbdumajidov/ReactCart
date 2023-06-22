import React, { useContext, useState } from 'react'
import { ProductsContext } from '../App'
import Checked from './Checked'

const ListingItems = ({ grid, list }) => {
    const [_, dispatch] = useContext(ProductsContext)
    const toggleHandler = (store, dispatchType, card) => {
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
    // console.log(list);
    return (
        <>
            <div className={` ${grid ? "grid-cols-1" : 'grid-cols-4'}  main-container mt-10 grid  gap-8 pb-20`}>
                {list.length ? list.map((card, index) => (
                    <div className={`${grid ? 'flex' : ''}   gap-4  overflow-hidden shadow rounded-md hover:shadow-lg transition-all relative`} key={index}>
                        <div className='relative cursor-pointer group flex-1'>
                            <div className={`${grid ? 'hidden' : 'flex'} absolute bg-white/50 opacity-0 inset-0 group-hover:opacity-100 transition-all flex gap-2 text-white items-center justify-center`}>
                                <div id='cart' onClick={() => toggleHandler('cart', 'UPDATE_CART', card)} className='w-10 h-10 bg-red-500 hover:bg-slate-900 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </div>
                                <div id='wishlist' onClick={() => toggleHandler('wishlist', 'UPDATE_WISHLIST', card)} className='w-10 h-10 bg-red-500 hover:bg-slate-900 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                            </div>
                            <img className='w-full aspect-square object-cover' src={card.thumbnail} alt="" />
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1 lg:flex-[3]">
                            <h1 className='text-slate-900 text-lg font-bold'>{card.title}</h1>
                            <div>
                                <span className='line-through text-red-500  font-semibold'>${card.price}</span>
                                <span className='text-gray-400 text-xs'>(-{card.discountPercentage})%</span>
                                <span className='text-green-500 font-semibold ml-3'>${(parseFloat(card.price) * (100 - parseFloat(card.discountPercentage)) / 100).toFixed(2)}</span>
                            </div>
                            <p className={`${grid ? "block" : "hidden"}`}>{card.description}</p>
                            <div className='text-yellow-500 flex gap-2'><span className='font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 fill-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </span> ({card.rating})</div>
                            <div className={`gap-2  mt-4 ${grid ? "flex" : "hidden"}`}>
                                {/* cart */}
                                <button id={card.id} onClick={() => toggleHandler('cart', 'UPDATE_CART', card)} className='flex gap-2 bg-red-500 text-white rounded p-3 hover:shadow-lg transition-all hover:shadow-red-500/50 duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    Add to cart
                                </button>
                                {/* wishlist */}
                                <button onClick={() => toggleHandler('wishlist', 'UPDATE_WISHLIST', card)} className='flex gap-2 bg-red-500 text-white rounded p-3 hover:shadow-lg transition-all hover:shadow-red-500/50 duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg> Add to wishlist</button>
                            </div>
                            <Checked cardId={card.id} />
                        </div>
                    </div>
                )) : <p className='min-h-screen'>No item left..</p>}
            </div>
        </>
    )
}

export default ListingItems