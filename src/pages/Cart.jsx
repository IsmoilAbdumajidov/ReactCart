import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../App'
import ChooseCart from '../components/ChooseCart'
import { productsUrl } from '../fetches/productsFetching'
import SpinnerSmall from '../components/spinerSmall/SpinnerSmall'

const Cart = () => {
  const [state] = useContext(ProductsContext)
  const [spin, setSpin] = useState(false)
  const [status, setStatus] = useState()
  const dataFromLS_Cart = JSON.parse(localStorage.getItem('cart')) || [];

  const [dataFromInput, setDataFromInput] = useState({ name: "", number: "", message: "", email: "", address: "", lname: "" })

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
        body: JSON.stringify({ ...dataFromInput, selectId: dataFromLS_Cart })
      })
      setDataFromInput({ name: "", number: "", message: "", email: "", address: "", lname: "" })
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
    <div className='min-h-screen'>
      <div className='main-container gap-8 items-start grid grid-cols-1 xl:grid-cols-2 mt-10'>
        <div className='col-span-1 flex flex-col gap-8'>
          <ChooseCart />
        </div>
        <div className='border flex flex-col gap-5 col-span-1  rounded-md p-3 lg:p-6'>
          <div className='flex items-center justify-between text-xl font-bold border-b py-2'>
            <div>Разом:</div>
            <div className='text-2xl text-red-500'>{state.allPrice}<sup>грн</sup></div>
          </div>
          <div>
            <h1 className='flex gap-3'><span>Сума замовлення:</span> <span>{state.allPrice}<sup>грн</sup></span></h1>
            <h1 className='flex gap-3'><span>Доставка:</span> <span>безкоштовно</span></h1>
          </div>
          <div className=''>
            <div className='flex flex-col sm:flex-row'>
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
                {status===false ? (
                  <div className='text-red-600 gap-3 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <h3>Помилка</h3>
                </div>
                ) : ''}
              </div>
            </div>
            <form className='grid gap-4 grid-cols-1 md:grid-cols-2'>
              <input value={dataFromInput.name} onChange={inputHandler} name='name' type="text" placeholder="Ім'я*" required />
              <input value={dataFromInput.lname} onChange={inputHandler} name='lname' type="text" placeholder='Прiзвище' required />
              <input value={dataFromInput.number} onChange={inputHandler} name='number' type="number" placeholder='Номер телефону' required />
              <input value={dataFromInput.email} onChange={inputHandler} name='email' type="email" placeholder='Email*' />
              <input value={dataFromInput.address} onChange={inputHandler} name='address' className='md:col-span-2' type="text" placeholder='Адреса' required />
              <textarea value={dataFromInput.message} onChange={inputHandler} name='message' className='md:col-span-2' placeholder='Коментарі до замовлення' required>
              </textarea>
              <button disabled={!dataFromInput.name || !dataFromInput.number || !dataFromInput.message || !dataFromInput.email || !dataFromInput.address || !dataFromInput.lname || !dataFromLS_Cart.length ? true : false} onClick={sendDataForm} className='bg-black disabled:opacity-40 disabled:cursor-not-allowed p-3 w-full text-white rounded-md'>Оформити замовлення</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart