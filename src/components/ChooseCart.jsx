import React from 'react'

const ChooseCart = () => {
    return (
        <div className='border rounded-md p-3'>
            <div className='border-b flex items-start gap-3 py-2 '>
                <div className='w-28 h-auto'>
                    <img src="" className='border w-full h-full aspect-square object-cover object-center' alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-slate-900 text-lg font-bold'>Стайлер Dyson Airwrap Complete Long</h1>
                    <p className='text-gray-400 text-sm'><span>Артикул:</span> 123</p>
                    <p className={`text-gray-400 text-sm `}>Discount:<span className='text-red-500 line-through  font-semibold ml-3 '>1234<sup>грн</sup></span></p>
                   
                    <div className='mt-2 flex gap-5'>
                        <div>
                            <p className='text-gray-400 mb-2 text-xs'>Ціна</p>
                            <p className='text-green-500 text-lg font-semibold '>323231<sup>грн</sup></p>
                        </div>
                        <div>
                            <p className='text-gray-400 mb-2 text-xs'>Кількість</p>
                            <div className='border flex justify-between rounded-md w-28 px-1 cursor-pointer'>
                                <button className='text-red-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>

                                </button>
                                <div>1</div>
                                <button className='text-green-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-400 mb-2 text-xs'>Сума</p>
                            <p className='text-red-500 text-lg font-semibold '>323231<sup>грн</sup></p>
                        </div>
                    </div>
                    <div className='flex gap-3 justify-end'>
                        <button className='bg-green-500 text-white p-1  rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </button>
                        <button className='bg-amber-400 text-white p-1  rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                            </svg>

                        </button>
                        <button className='bg-red-500 text-white p-1  rounded'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCart