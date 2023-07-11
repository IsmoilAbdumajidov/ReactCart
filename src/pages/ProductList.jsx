import React, { useContext, useEffect } from 'react'
import ListingItems from '../components/ListingItems'
import { fechtAllProducts } from '../fetches/productsFetching';
import { ProductsContext } from '../App';
import { Outlet, useParams } from 'react-router-dom';


const ProductList = () => {
    const params = useParams()
    const [state, dispatch] = useContext(ProductsContext)
    useEffect(() => {
        fechtAllProducts(dispatch)
    }, []);
    // console.log(params);

    return (
        <div className='min-h-screen w-full'>
            {
                params.detailSlug ? <Outlet /> : <ListingItems list={state.products} />
            }
        </div>
    )
}

export default ProductList