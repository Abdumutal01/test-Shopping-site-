import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import FooterIcons from './FooterIcons/FooterIcons'

export default function Footer() {
    return (
        <footer className='footer'>
            <h1 className="footer__logo header__logo">
                QPICK
            </h1>
            <ul className="footer__list">
                <li className="footer__item">
                    <Link to="/likes" className='footer__links'>
                        Избранное
                    </Link>
                </li>
                <li className="footer__item">
                    <Link to="/shoppingCarts" className='footer__links'>
                        Корзина
                    </Link>
                </li>
                <li className="footer__item">
                    <Link
                        to="/contact"
                        className='footer__links' >
                        Контакты
                    </Link>
                </li>
            </ul>
            <div className="footer__box">
                <h3 className="footer__inner">
                    Условия сервиса
                </h3>
                <div className="footer__btnBox">
                    <i class="fa-solid fa-globe"></i>
                    <button
                        className="footer__lngBtn"
                    >
                        Каз

                    </button>
                    <button
                        className="footer__lngBtn"
                    >
                        Рус

                    </button>
                    <button
                        className="footer__lngBtn"
                    >
                        Eng

                    </button>
                </div>
            </div>
            <FooterIcons />
        </footer>
    )
}
