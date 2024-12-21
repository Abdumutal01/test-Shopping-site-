import React, { useEffect } from 'react'
import './Headphones.scss'

import { HeadphonesJson } from './HeadphonesJson'
import HeadphonesCart from './HeadphonesCart/HeadphonesCart'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts, counterActions } from '../../../store'

export default function Headphones() {

    const dispatach = useDispatch()
    const products = useSelector(allProducts)

    const headPhoneJs = products.headphone


    useEffect(() => {
        dispatach(counterActions.addProducts({ headphone: [...HeadphonesJson] }))
        
    }, [dispatach])
    console.log(headPhoneJs);

    return (
        <section className='headphones'>
            <h2 className="title">
                Наушники
            </h2>
            <div className="general">
                {
                    headPhoneJs.map(item => (
                        <HeadphonesCart
                            key={item.id}
                            things={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
