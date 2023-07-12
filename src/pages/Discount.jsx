import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import ListingItems from '../components/ListingItems'

const Discount = () => {
  const [{discount},dispatch]= useContext(ProductsContext)

  return (
   <div className='min-h-screen'>
        <ListingItems list={discount} remove={'discount'}/>
    </div>
  )
}

export default Discount