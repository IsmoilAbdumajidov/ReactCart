import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../App'
import { DetailFunck } from '../fetches/productsFetching';
import { useParams } from 'react-router-dom';

const Detail = () => {

    const { categorySlug } = useParams()
    // console.log(categorySlug)
    const [state, dispatch] = useContext(ProductsContext)
    useEffect(() => {
        DetailFunck(categorySlug, dispatch)
    }, []);
    console.log(state.detail[0]);

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
        // console.log(card);
        allPrice()
    }
    return (
        <div className='main-container mt-10 grid grid-cols-2 p-10 gap-8'>
            <div className='flex gap-3'>
                <div className='flex gap-3 flex-col w-28'>
                    {state.detail[0]?.images.map((img, index) => (
                        <img key={index} src={img} alt="" />
                    ))}
                </div>
                <div className=''>
                    <img className='w-full h-full object-cover object-center' src={state.detail[0]?.images[0]} alt="" />
                </div>
            </div>
            <div className="p-4 relative flex flex-col  gap-2 flex-1 border">
                <div className='text-slate-900 text-lg font-bold cursor-pointer'>{state.detail[0]?.name}</div>
                <p className='text-gray-400 text-sm'><span>Артикул:</span> {state.detail[0]?.vendor_code}</p>
                <div>
                    <span className={`text-gray-400 text-sm block ${state.detail[0]?.discount !== 0 ? 'inline' : 'hidden'}`}>Discount:<span className='text-red-500 line-through  font-semibold ml-3 '>{state.detail[0]?.discount}<sup>грн</sup></span></span>
                    <span className='text-gray-400 text-sm block'>Ціна:<span className='text-green-500 text-lg font-semibold ml-3'>{state.detail[0]?.price}<sup>грн</sup></span></span>
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
                </div>
            </div>
        </div>
    )
}

export default Detail