import React, { useContext, useEffect, useState } from 'react'
import { fechProductsByCategory, fechtAllProducts } from '../fetches/productsFetching'
import { ProductsContext } from '../App'
import ListingItems from './ListingItems'
import Spinner from '../components/spinner/Spinner'

const ProductList = () => {
  const [state, dispatch] = useContext(ProductsContext)
  const [grid, setGrid] = useState(false)

  useEffect(() => {
    fechtAllProducts(dispatch)
  }, []);
  const selectHandler = (e) => {
    e.target.value === 'all' ? fechtAllProducts(dispatch) : fechProductsByCategory(e.target.value, dispatch)
  }
  return (
    <div className='min-h-screen w-full'>
      <div className='flex justify-between items-center main-container pt-5'>
        <select onChange={selectHandler} className='rounded-md py-2 text-sm px-3 border text-black outline-none'>
          {
            state.categories.map((element, index) => (
              <option key={index} value={element}>{element}</option>
            ))
          }
        </select>
        <div className='flex gap-2'>
          <button onClick={()=>setGrid(true)} className='rounded-md border p-1 group'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-gray-500 group-hover:text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>
          <button onClick={()=>setGrid(false)} className='rounded-md border p-1 group'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-gray-500 group-hover:text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>

          </button>
        </div>
      </div>
        {state.loading ? <Spinner /> :<ListingItems grid={grid} list={state.products} />}
    </div>
  )
}

export default ProductList