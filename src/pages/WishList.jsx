import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import ListingItems from '../components/ListingItems';

const WishList = () => {
  const [{wishlist},_] = useContext(ProductsContext)
  // console.log(wishlist);
  return (
    <div className='min-h-screen'>
        <ListingItems list={wishlist} remove={'wishlist'}/>
    </div>
  )
}

export default WishList