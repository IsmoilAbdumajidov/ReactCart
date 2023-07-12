import React, { useEffect, useState } from 'react'
import { productsUrl } from '../fetches/productsFetching'
import parse from 'html-react-parser';

const Contact = () => {
    const [contactData, setContactData] = useState([])
    const fetchContact = async () => {
        try {
            const resp = await fetch(productsUrl + '/api/contact/');
            const data = await resp.json()
            setContactData(data)
            // console.log(contactData);
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchContact()
    }, [])
    // console.log(contactData);

    return (
        <div className='min-h-screen w-full'>
            <div className='main-container  mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2'>
            <div className='col-span-1 p-3 border'>
                <h1 className='text-xl font-bold'>Київ, майдан Незалежності.</h1>
                <h1>Телефон: <span>{contactData[0]?.phone_number}</span></h1>
            </div>
            <div className='col-span-1 p-3 border'>
                <h1 className='font-bold text-lg mb-5'>Контактні дані</h1>
                <form className='flex flex-col gap-4'>
                    <input className='p-3 text-sm' type="text" placeholder="Ім'я*" />
                    <input className='p-3 text-sm' type="email" placeholder='Email*' />
                    <textarea className='p-3 text-sm' placeholder='Коментарі до замовлення'>
                    </textarea>
                    <button className='bg-black p-4 text-white rounded-md'>Оформити замовлення</button>
                </form>
            </div>
            <div className='lg:col-span-2 p-3 border'>{parse(contactData[0] ? contactData[0]?.location : '')}</div>
        </div>
        </div>
    )
}

export default Contact