import React from 'react'
import './Hero.scss'
import heroImg from '../../../assets/img/headerImg.png'


export default function Hero() {
    return (
        <div className='hero'>
            <img
                src={heroImg}
                alt=""
                className="hero__img"
            />
            <div className="hero__data">
                <h2 className="hero__title">
                    <span>
                        Только самые
                    </span> {" "}
                    сочные бургеры!
                </h2>
                <p className="hero__text">
                    Бесплатная доставка от 599₽
                </p>
            </div>
        </div>
    )
}
