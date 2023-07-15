import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../App'
import ListingItems from '../components/ListingItems'
import { fetchDiscount } from '../fetches/productsFetching'

const Discount = () => {
  const [{discount},dispatch]= useContext(ProductsContext)
  useEffect(() => {
    fetchDiscount(dispatch)
  }, [])
  

  return (
   <div className='min-h-screen'>
        <ListingItems list={discount} remove={'discount'}/>
    </div>
  )
}

export default Discount