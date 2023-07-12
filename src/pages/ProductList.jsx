import React, { useContext, useEffect, useState } from 'react'
import ListingItems from '../components/ListingItems'
import { fechtAllProducts } from '../fetches/productsFetching';
import { ProductsContext } from '../App';
import { useParams } from 'react-router-dom';


const ProductList = () => {
    const params = useParams()
    const [isReversed, setIsReversed] = useState(false)
    const [state, dispatch] = useContext(ProductsContext)
    const defaultData = state.products
    useEffect(() => {
        fechtAllProducts(dispatch);
    }, []);
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
            dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: { products: sortedArr } })
        } else {
            dispatch({ type: 'FETCH_PRODUCTS_LIST', payload: { products: sortedArr.reverse() } })
        }
    }
    return (
        <div className='min-h-screen w-full'>
            <div className='flex flex-col sm:flex-row gap-3 main-container mt-10 items-center'>
                <div className='text-lg font-bold'>Сортувати по:</div>
               <div className='flex flex-wrap gap-3'>
               <button onClick={() => sortHandler('default')} className='border rounded p-2 '>замовчуванням</button>
                <button onClick={() => sortHandler('price')} className='border rounded p-2 '>ціною</button>
                <button onClick={() => sortHandler('name')} className='border rounded p-2 '>назвою</button>
               </div>
            </div>
            <ListingItems list={state.products} remove={'allproduct'} />
        </div>
    )
}

export default ProductList