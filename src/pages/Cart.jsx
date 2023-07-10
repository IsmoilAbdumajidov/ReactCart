import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import ChooseCart from '../components/ChooseCart'

const Cart = () => {
  const [state] = useContext(ProductsContext)
  return (
    <div className='min-h-screen'>
      <div className='main-container gap-8 grid grid-cols-2 mt-10'>
        <div className='col-span-1 flex flex-col gap-8'>
          <ChooseCart />
          
        </div>
        <div className='border flex flex-col gap-5 col-span-1  rounded-md p-3 lg:p-6'>
          <div className='flex items-center justify-between text-xl font-bold border-b py-2'>
            <div>Разом:</div>
            <div className='text-2xl text-red-500'>121212<sup>грн</sup></div>
          </div>
          <div>
            <h1 className='flex gap-3'><span>Сума замовлення:</span> <span>121212<sup>грн</sup></span></h1>
            <h1 className='flex gap-3'><span>Доставка:</span> <span>безкоштовно</span></h1>
          </div>
          <div className=''>
            <h1 className='font-bold text-lg mb-5'>Контактні дані</h1>
            <form className='grid gap-4 grid-cols-2'>
              <input type="text" placeholder="Ім'я*" />
              <input type="text" placeholder='Прiзвище' />
              <input type="number" placeholder='Номер телефону' />
              <input type="email" placeholder='Email*' />
              <input className='col-span-2' type="text" placeholder='Адреса' />
              <textarea className='col-span-2' placeholder='Коментарі до замовлення'>
              </textarea>
              <button className='bg-black p-4 text-white rounded-md'>Оформити замовлення</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart