import React, { useContext, useEffect, useRef, useState } from 'react'
import ListingItems from '../components/ListingItems'
import { fechtAllProducts } from '../fetches/productsFetching';
import { ProductsContext } from '../App';

import HomeSlider from '../components/HomeSlider';
import { useSearchParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import DropCategory from '../components/DropCategory';


const ProductList = () => {
    const [isReversed, setIsReversed] = useState(false)
    const [state, dispatch] = useContext(ProductsContext)
    const [searchParam, setSearchParam] = useSearchParams()
    const dropRef = useRef()
    useEffect(() => {
        const search = searchParam.get('search')
        fechtAllProducts(dispatch, search);
    }, [searchParam.get('search')]);

    const sortHandler = (type) => {
        setIsReversed(!isReversed)
        const sortedArr = state.products.sort((a, b) => {
            if (type === "price") {
                return a.price - b.price
            }
            else if (type === "name") {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0
            }
        })

        if (type === "default") {
            fechtAllProducts(dispatch)
        }
        else if (isReversed) {
            dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: sortedArr })
        } else {
            dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: sortedArr.reverse() })
        }
    }
    return (
        <div className='min-h-screen w-full'>
            <div className='mt-10 main-container '>
                {state.loading ?
                    <Skeleton className='h-[250px] sm:h-[350px] md:h-[500px] rounded-xl w-full mb-4' />
                    : ''
                }
                <HomeSlider />
            </div>
            <div className='flex flex-col lg:flex-row gap-3 main-container justify-between mt-10 items-center'>
                <div className='flex flex-col sm:flex-row gap-3  items-center'>
                    <div className='text-lg font-bold'>Сортувати по:</div>
                    <div className='flex flex-wrap gap-3'>
                        <button onClick={() => sortHandler('default')} className='border rounded p-2 '>замовчуванням</button>
                        <button onClick={() => sortHandler('price')} className='border rounded p-2 '>ціною</button>
                        <button onClick={() => sortHandler('name')} className='border rounded p-2 '>назвою</button>
                    </div>
                </div>
                <div className='relative bg-slate-800 px-3 py-1 cursor-pointer rounded-md w-full sm:w-80 '>
                    <DropCategory dropRef={dropRef} categories={state.categories} />
                </div>
            </div>
            <ListingItems list={state.products} remove={'allproduct'} />
        </div>
    )
}

export default ProductList