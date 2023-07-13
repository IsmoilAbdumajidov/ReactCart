import React, { useContext, useRef, useState } from 'react'
import ScaleCarausel from '../components/ScaleCarausel'


const Scale = () => {
  const character = ['Вага', 'Штук', 'Тип м’яса', 'Гатунок', 'Термін придатності', 'ТУ', 'Оболонка/тара', 'Пакування', 'Температура зберігання']

  return (
    <div className='min-h-screen mt-5'>
      <div className='grid grid-cols-3 lg:grid-cols-4'>
        <div className='col-span-1 sm:ps-3'>
          <div className='h-[560px]'>

          </div>
          <div className='mt-1 border-t'>
            {character.map((charact, i) => (
              <div key={i} className={`border-b text-xs  h-[40px] md:text-base overflow-hidden  sm:font-bold sm:ps-3 ${i % 2 !== 0 ?  'bg-gray-200' : "bg-white border-e"} p-2`}>
                {charact}:
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-2 lg:col-span-3'>
          <ScaleCarausel />
        </div>
      </div>
    </div>
  )
}

export default Scale