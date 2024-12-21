import React from 'react'
import './HeaderNav.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { shopProducts } from '../../store'

export default function HeaderNav() {

    const addLiked = useSelector((state) => state.countrel.liked)
    // const addCart = useSelector((state) => state.countrel.cart)
    const shopCart = useSelector(shopProducts)
    console.log(shopCart);

    return (
        <nav className='header__nav nav'>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link
                        to="/likes"
                        className='nav__links'
                    >
                        <i class="fa-regular fa-heart"></i>
                        <span className='nav__spans'>
                            {addLiked}
                        </span>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link
                        to="/shoppingCarts"
                        className='nav__links'
                    >
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span className='nav__spans'>
                            {
                                shopCart.length > 0 ? shopCart.length : 0
                            }
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
