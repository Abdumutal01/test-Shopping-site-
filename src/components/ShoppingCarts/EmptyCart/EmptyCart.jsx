import React from 'react'
import './EmptyCart.scss'
import emptyImg from '../../../assets/img/emptyCartImg.png'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className='emptyCart'>
            <img
                src={emptyImg}
                alt=""
                className="emptyCart__img"
            />
            <h2 className='emptyCart__title'>
                Корзина пуста
            </h2>
            <p className="emptyCart__text">
                Но это никогда не поздно исправить :)
            </p>
            <Link
                to='/'
                className="emptyCart__btn"
            >
                В каталог товаров
            </Link>
        </div>
    )
}
