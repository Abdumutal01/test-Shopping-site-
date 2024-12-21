import React from 'react'
import './Header.scss'
import Dropdown from './Dropdown/Dropdown'
import HeaderNav from './HeaderNav/HeaderNav'
import { Link } from 'react-router-dom'

export default function Header() {


    return (
        <header className='header'>
            <div className="header__logoBox">
                <Link to='/'>
                    <h1 className="header__logo">
                        QPICK
                    </h1>
                </Link>
                <div className='header__dropdownBox'>
                    <Dropdown />
                </div>
            </div>
            <HeaderNav />
        </header>
    )
}
