import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import ListingItems from '../components/ListingItems'

const Scale = () => {
    const [{scale},_] = useContext(ProductsContext)
  return (
    <div className='min-h-screen'>
        <ListingItems list={scale} remove={'scale'}/>
    </div>
  )
}

export default Scale