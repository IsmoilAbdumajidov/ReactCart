import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { fechProductsByCategory, fechtAllProducts } from '../fetches/productsFetching';
import { ProductsContext } from '../App';

const DropCategory = ({ categories }) => {
    const [state,dispatch] = useContext(ProductsContext)
    const selectHandler = (e) => {
        // console.log(e.target.value);
        e.target.value === 'all-product' ? fechtAllProducts(dispatch) : fechProductsByCategory(e.target.value, dispatch)
    }
    return (
        <div className='flex items-center  justify-center text-white'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </span>
            <select onChange={selectHandler} className='rounded-md py-2 text-sm px-3  w-full border-none text-white outline-none'>
                {
                    categories.map((element, index) => (
                        <option className='w-full text-black' key={index} value={element.slug}>{element.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropCategory