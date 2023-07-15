import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import ChooseCart from './ChooseCart'
import { Link } from 'react-router-dom'

const Modal = ({ setShowModal }) => {
    const [state, _] = useContext(ProductsContext)
    return (
        <div className='bg-black/60 w-full  p-1 sm:p-3 h-screen flex items-center justify-center fixed top-0 left-0 z-10'>
            <div className='relative w-[500px]  h-[95%] border p-6 bg-white rounded'>
                <div className='flex items-center justify-between mb-3'>
                    <h1>Ваші товари:</h1>
                    <button onClick={() => setShowModal(false)} className='bg-transparent border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='overflow-y-scroll modal_scrol h-[70%] sm:h-[80%]'><ChooseCart /></div>
                <div className='border-t'>
                    <div className='flex items-center justify-between text-xl font-bold border-b py-2'>
                        <div>Разом:</div>
                        <div className='text-2xl text-red-500'>{state.allPrice}<sup>грн</sup></div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between gap-3'>
                        <button onClick={() => setShowModal(false)} className='bg-transparent hover:bg-slate-600 transition-all hover:text-white border border-slate-600 text-slate-600 p-2 rounded'>Продовжити покупки</button>
                        <Link className='flex-1' to={'/cart'}>
                            <button className='bg-black border border-black text-white p-2 w-full rounded'>Оформити замовлення</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal