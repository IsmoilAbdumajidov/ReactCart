import React, { createContext, useEffect, useReducer } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import { reducer } from './reducer/reducer'



export const ProductsContext = createContext()

const initialValue = {
  products:[],
  categories:[],
  cart:[],
  wishlist:[],
  loading:true,
}

const App = () => {
  const [state,dispatch] = useReducer(reducer, initialValue)
  // console.log(state);
  useEffect(() => {
    const dataFromLS_Cart = JSON.parse(localStorage.getItem('cart')) || [];
    const dataFromLS_Wishlist = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch({type:'UPDATE_CART',payload:dataFromLS_Cart})
    dispatch({type:'UPDATE_WISHLIST',payload:dataFromLS_Wishlist})
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