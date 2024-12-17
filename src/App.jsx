import React, { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import MealNav from './components/MealNav/MealNav'

import Burgers from './components/Burgers/Burgers';
import HotDogs from './components/HotDogs/HotDogs';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card/Card';

export default function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (burger) => {
    const existingItem = cart.find((item) => item.id === burger.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...burger, quantity: 1 }]);
    }
  };

  const updateCart = (id, quantity) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <Header />
      <div className="container">

        <MealNav />
      </div>
      <div className="Box">
        <Card cart={cart} updateCart={updateCart} />
        
        <Routes>
          <Route path='/' element={<Burgers addToCart={addToCart} />} />
          <Route path='/hotDogs' element={<HotDogs />} />
        </Routes>

      </div>
    </div>
  )
}
