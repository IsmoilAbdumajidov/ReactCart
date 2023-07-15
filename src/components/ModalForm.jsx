import React, { useEffect, useRef, useState } from 'react'
import { productsUrl } from '../fetches/productsFetching'
import SpinnerSmall from './spinerSmall/SpinnerSmall'

const ModalForm = ({ setState }) => {
    const [spin, setSpin] = useState(false)
    const [status, setStatus] = useState()
    const [dataFromInput, setDataFromInput] = useState({ name: "", number: "", message: "" })
    const inputHandler = (e) => {
        const data = e.target.name
        setDataFromInput((prev) => ({ ...prev, [data]: e.target.value }))
    }
    const sendDataForm = async (e) => {
        setSpin(true)
        e.preventDefault()
        try {
            const resp = await fetch(productsUrl + '/api/support/', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(dataFromInput)
            })
            const data = await resp.json()
            setSpin(false)
            setStatus(data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus('')
        }, 4000);
        return () => clearTimeout(timer);
    }, [status]);

    return (
        <div className='bg-black/60 w-full  p-1 sm:p-3 h-screen flex items-center justify-center fixed top-0 left-0 z-10'>
            <div className='relative w-[500px]  h-auto border p-6 bg-white rounded'>
                <div className='my-4'>
                    <div className="flex flex-col gap-2">
                        <h1 className=' text-black'>Замовлення зворотнього дзвінку</h1>
                    <div className='ms-auto me-5'>
                        {spin ? <SpinnerSmall /> : ''}
                        {status ? (
                            <div className='text-green-600 flex gap-3 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3>Дані успішно завантажено</h3>
                            </div>
                        ) : ''}
                        {status === false ? (
                            <div className='text-red-600 gap-3 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                                <h3>Помилка</h3>
                            </div>
                        ) : ''}
                    </div>
                    </div>
                    <button onClick={() => setState(false)} className='bg-transparent text-black border-none absolute top-3 right-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form className='flex flex-col gap-4'>
                    <input onChange={inputHandler} name='name' className='p-3 text-sm text-black' type="text" placeholder="Ім'я*" />
                    <input onChange={inputHandler} name='number' className='p-3 text-sm text-black' type="text" placeholder='Номер телефону*' />
                    <textarea onChange={inputHandler} name='message' className='p-3 text-sm text-black' placeholder='Введіть повідомлення'>
                    </textarea>
                    <button disabled={!dataFromInput.name || !dataFromInput.number || !dataFromInput.message ? true : false} onClick={sendDataForm} className='bg-black disabled:opacity-25 disabled:cursor-not-allowed p-3 text-white rounded-md'>Замовити</button>
                </form>
            </div>
        </div>
    )
}

export default ModalForm