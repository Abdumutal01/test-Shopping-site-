import React from 'react'
import './MealNav.scss'

import mealIconImg1 from '../../assets/img/MealNavImg1.png'
import mealIconImg2 from '../../assets/img/MealNavImg2.png'
import mealIconImg3 from '../../assets/img/MealNavImg3.png'
import mealIconImg4 from '../../assets/img/MealNavImg4.png'
import mealIconImg5 from '../../assets/img/MealNavImg5.png'
import mealIconImg6 from '../../assets/img/MealNavImg6.png'
import mealIconImg7 from '../../assets/img/MealNavImg7.png'
import mealIconImg8 from '../../assets/img/MealNavImg8.png'
import mealIconImg9 from '../../assets/img/MealNavImg9.png'


import { NavLink } from 'react-router-dom'

export default function MealNav() {

    const MealArr = [
        {
            "id": 1,
            "path": "/",
            "name": "Бургеры",
            "imgUrl": `${mealIconImg1}`
        },
        {
            "id": 2,
            "path": "/snaks",
            "name": "Закуски",
            "imgUrl": `${mealIconImg2}`
        },
        {
            "id": 3,
            "path": "/hotDogs",
            "name": "Хот-доги",
            "imgUrl": `${mealIconImg3}`
        },
        {
            "id": 4,
            "path": "/combo",
            "name": "Комбо",
            "imgUrl": `${mealIconImg4}`
        },
        {
            "id": 5,
            "path": "/shawarma",
            "name": "Шаурма",
            "imgUrl": `${mealIconImg5}`
        },
        {
            "id": 6,
            "path": "/pizza",
            "name": "Пицца",
            "imgUrl": `${mealIconImg6}`
        },
        {
            "id": 7,
            "path": "/wok",
            "name": "Вок",
            "imgUrl": `${mealIconImg7}`
        },
        {
            "id": 8,
            "path": "/desserts",
            "name": "Десерты",
            "imgUrl": `${mealIconImg8}`
        },
        {
            "id": 9,
            "path": "/sauces",
            "name": "Соусы",
            "imgUrl": `${mealIconImg9}`
        }
    ]
    return (
        <nav className='nav'>
            {
                MealArr.map(item => (
                    <li key={item.id}>
                        <NavLink
                            className={({ isActive, nav__link}) => (
                                nav__link ? "nav__link" : isActive ? "active" : "nav__link" 
                             
                            )}
                            to={item.path}

                        >
                            <img
                                className='nav__iconImg'
                                src={item.imgUrl}
                                alt=""
                            />
                            {item.name}
                        </NavLink>
                    </li>
                ))
            }
        </nav>
    )
}
