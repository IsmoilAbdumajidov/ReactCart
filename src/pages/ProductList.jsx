import React, { useContext, useEffect } from 'react'
import ListingItems from '../components/ListingItems'
import { fechtAllProducts } from '../fetches/productsFetching';
import { ProductsContext } from '../App';


const ProductList = () => {
    const [state, dispatch] = useContext(ProductsContext)
    useEffect(() => {
        fechtAllProducts(dispatch)
    }, []);
    // console.log(state);

    return (
        <div className='min-h-screen w-full'>
            <ListingItems list={state.products} />
        </div>
    )
}

export default ProductList