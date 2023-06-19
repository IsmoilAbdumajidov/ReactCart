import React, { useContext } from 'react'
import ListingItems from './ListingItems'
import { ProductsContext } from '../App'

const WishList = () => {
  const [state] = useContext(ProductsContext)
  return (
    <div className='min-h-screen'>
      <ListingItems grid={false} list={state.wishlist} />
    </div>
  )
}

export default WishList