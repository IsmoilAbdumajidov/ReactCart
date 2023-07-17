import React from 'react'

const Charactiristic = ({ cardData, }) => {
  const character = ['Вага', 'Штук', 'Тип м’яса', 'Гатунок', 'Термін придатності', 'ТУ', 'Оболонка/тара', 'Пакування', 'Температура зберігання']
  return (
    <>
      {character.map((charact, i) => (
        <div key={i} className={`border-b text-xs sm:text-base h-[40px] ${i%2!==0 ? 'bg-gray-200' : "bg-white border-s"} p-2`}>
          {cardData.characteristic[character[i]] ?
            cardData.characteristic[character[i]] :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-6 w-4 sm:h-6 h-4 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          }
        </div>
      ))}
    </>
  )
}

export default Charactiristic