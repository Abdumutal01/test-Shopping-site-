import React from 'react'
import './Shopping.scss'
import { shopProducts } from '../../store'
import Cart from './Cartes/Cartes'
import EmptyCart from './EmptyCart/EmptyCart'
import { useSelector } from 'react-redux'



// const new =  
export default function ShoppingCarts() {

  const products = useSelector(shopProducts);
  return (
    <section className='shoppingPage'>
      {
        products.length !== 0 ? <Cart /> : <EmptyCart />
      }
    </section>
  )
}
