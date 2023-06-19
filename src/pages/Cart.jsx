import React, { useContext } from 'react'
import ListingItems from './ListingItems'
import { ProductsContext } from '../App'

const Cart = () => {
  const [state] = useContext(ProductsContext)
  return (
    <div className='min-h-screen'>
      <div className='min-h-screen'>
        <ListingItems grid={true} list={state.cart} />
      </div>
    </div>
  )
}

export default Cart