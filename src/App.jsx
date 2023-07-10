import React, { createContext, useEffect, useReducer } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import { reducer } from './reduser/reduser'
import Footer from './components/Footer'


export const ProductsContext = createContext()

const initialValue = {
  products:[],
  categories:[],
  cart:[],
  wishlist:[],
  allPrice:0,
  scale:[],
  loading:true,
}

const App = () => {

  const [state,dispatch] = useReducer(reducer, initialValue)

  useEffect(()=>{
    const dataFromLS_Cart = JSON.parse(localStorage.getItem('cart')) || [];
    const dataFromLS_Wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const dataFromLS_Scale = JSON.parse(localStorage.getItem('scale')) || [];
    dispatch({type:'UPDATE_CART',payload:dataFromLS_Cart})
    dispatch({type:'UPDATE_WISHLIST',payload:dataFromLS_Wishlist})
    dispatch({type:'UPDATE_SCALE',payload:dataFromLS_Scale})
  }, [])
  return (
    <ProductsContext.Provider  value={[state,dispatch]}>
    <div className='flex flex-col h-full'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
      <Footer />
    </div>
    </ProductsContext.Provider>
  )
}

export default App