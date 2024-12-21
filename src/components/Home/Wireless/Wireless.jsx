import React, { useEffect } from 'react'
import './Wireless.scss'
import { WirelessJson } from './WirelessJson'
import HeadphonesCart from '../Headphones/HeadphonesCart/HeadphonesCart'
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, counterActions } from '../../../store';

export default function Wireless() {

    const dispatach = useDispatch()
    const products = useSelector(allProducts)
 
    const wireless = products.cases

    console.log(wireless);

    useEffect(() => {
        dispatach(counterActions.addCases({ case: [...WirelessJson] }))
    }, [dispatach])

    return (
        <section className='wireless'>
            <h2 className="title">
                Беспроводные наушники
            </h2>

            <div className="general">
                {
                    WirelessJson.map(item => (
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
