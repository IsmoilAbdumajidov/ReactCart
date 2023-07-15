import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

const ScletonProduct = ({ card }) => {
    return (
        Array(card).fill(0).map((_,i) => (
            <div className='rounded-md' key={i}>
                <div className='relative cursor-pointer group'>
                    <div className='w-full h-full aspect-square object-cover'>
                        <Skeleton className='w-full h-full' />
                    </div>
                </div>
                <div className="sm:p-4 p-2 relative flex flex-col  gap-1 flex-1 border">
                    <div className='mb-3 gap-1 flex flex-col'>
                        <div className='h-6 sm:h-8'>
                            <Skeleton className='w-full h-full' />
                        </div>
                        <div className='sm:w-44 w-[80%] h-3'>
                            <Skeleton className='w-full h-full' />
                        </div>
                        <div className='sm:w-32 w-20 h-3'>
                            <Skeleton className='w-full h-full' />
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row sm:flex-nowrap mt-auto gap-2'>
                        <div className='flex-1'>
                            <Skeleton className='w-full h-full p-[5px]' />
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex-1'>
                                <Skeleton className='w-full sm:w-10 sm:h-10 h-full  p-1' />
                            </div>
                            <div className='flex-1'>
                                <Skeleton className='w-full sm:w-10 sm:h-10 h-full  p-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default ScletonProduct