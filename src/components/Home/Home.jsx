import React from 'react'
import './Home.scss'
import HomeHero from './HomeHero/HomeHero'
import Cases from './Cases/Cases'
import Headphones from './Headphones/Headphones'
import Wireless from './Wireless/Wireless'

export default function Home() {
    return (
        <section className='home'>
            <HomeHero />
            <Cases />
            <Headphones />
            <Wireless />
        </section>
    )
}
