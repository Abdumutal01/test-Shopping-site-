import React from 'react'
import './App.scss'
import Header from './Header/Header'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import Footer from './Footer/Footer'
import Likes from './components/Likes/Likes'
import ShoppingCarts from './components/ShoppingCarts/Shopping'
export default function App() {
  return (
    <div className='container'>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/likes' element={<Likes />} />
        <Route path='/shoppingCarts' element={<ShoppingCarts  />} />
      </Routes>
      <Footer />
    </div>
  )
}
