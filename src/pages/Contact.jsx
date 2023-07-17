import React, { useContext, useEffect, useState } from 'react'
import { productsUrl } from '../fetches/productsFetching'
import parse from 'html-react-parser';
import SpinnerSmall from '../components/spinerSmall/SpinnerSmall';
import { ProductsContext } from '../App';

const Contact = () => {
    const [status, setStatus] = useState()
    const [spin, setSpin] = useState(false)
    const [state,dispatch] = useContext(ProductsContext)

    const [dataFromInput, setDataFromInput] = useState({ name: "", email: "", message: "" })
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
            setDataFromInput({ name: "", email: "", message: "" })
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
        <div className='min-h-screen w-full'>
            <div className='main-container  mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2'>
                <div className='col-span-1 p-3 flex flex-col gap-3 border'>
                    <h1 className='text-xl font-bold mb-3'>Київ, майдан Незалежності.</h1>
                    <h1>Телефон: <a href={`tel:${state.contact[0]?.phone_number}`}>{state.contact[0]?.phone_number}</a></h1>
                    <h1>Email: <span>{state.contact[0]?.email}</span></h1>
                </div>
                <div className='col-span-1 p-3  border'>
                    <div className="flex flex-col sm:flex-row">
                        <h1 className='font-bold text-lg mb-5'>Контактні дані</h1>
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
                    <form className='flex flex-col gap-4'>
                        <input value={dataFromInput.name} onChange={inputHandler} name='name' className='p-3 text-sm' type="text" placeholder="Ім'я*" />
                        <input value={dataFromInput.email} onChange={inputHandler} name='email' className='p-3 text-sm' type="email" placeholder='Email*' />
                        <textarea value={dataFromInput.message} onChange={inputHandler} name='message' className='p-3 text-sm' placeholder='Коментарі до замовлення'>
                        </textarea>
                        <button disabled={!dataFromInput.name || !dataFromInput.email || !dataFromInput.message ? true : false} onClick={sendDataForm} className='bg-black p-4 disabled:opacity-25 disabled:cursor-not-allowed text-white rounded-md'>Оформити замовлення</button>
                    </form>
                </div>
                <div className='lg:col-span-2 p-3 border'>{parse(state.contact[0] ? state.contact[0]?.location : '')}</div>
            </div>
        </div>
    )
}

export default Contact