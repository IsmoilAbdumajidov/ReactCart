import React, { createContext, useReducer } from 'react'
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
  scale:[],
  loading:true,
}

const App = () => {

  const [state,dispatch] = useReducer(reducer, initialValue)
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