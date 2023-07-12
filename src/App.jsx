import React, { createContext, useEffect, useReducer } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import { reducer } from './reduser/reduser'
import Footer from './components/Footer'
import Detail from './pages/Detail'
import Contact from './pages/Contact'
import Scale from './pages/Scale'
import About from './pages/About'
import Discount from './pages/Discount'


export const ProductsContext = createContext()

const initialValue = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
  scale: [],
  allPrice: 0,
  loading: true,
  detail: [],
  discount: [],
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialValue)

  useEffect(() => {
    const dataFromLS_Cart = JSON.parse(localStorage.getItem('cart')) || [];
    const dataFromLS_Wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const dataFromLS_Scale = JSON.parse(localStorage.getItem('scale')) || [];
    dispatch({ type: 'UPDATE_CART', payload: dataFromLS_Cart })
    dispatch({ type: 'UPDATE_WISHLIST', payload: dataFromLS_Wishlist })
    dispatch({ type: 'UPDATE_SCALE', payload: dataFromLS_Scale })
  }, [])
  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      <div className='flex flex-col h-full'>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:detailSlug' element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/контакти' element={<Contact />} />
          <Route path='/scale' element={<Scale />} />
          <Route path='/приблизно' element={<About />} />
          <Route path='/акции' element={<Discount />} />
        </Routes>
        <Footer />
      </div>
    </ProductsContext.Provider>
  )
}

export default App