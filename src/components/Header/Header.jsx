import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

import headerLogoImg from '../../assets/img/headerLogo.png'
import Hero from './Hero/Hero'
import MealNav from '../MealNav/MealNav'

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <Link
                    to='/'
                    className='header__linkLogo'
                >
                    <img
                        src={headerLogoImg}
                        alt=""
                        className="header__logoImg"
                    />
                </Link>
                <Hero />
            </div>
        </header>
    )
}
