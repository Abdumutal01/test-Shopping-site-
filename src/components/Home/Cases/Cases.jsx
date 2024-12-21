import React from 'react'
import './Cases.scss'

import { casesJson } from './casesJson';
import CasesCart from './CasesCart/CasesCart'


export default function Cases() {
   
    return (
        <section className='cases'>
            <h2 className="title">
                Чехлы
            </h2>
            <div className="general">
                {
                    casesJson.map(item => (
                        <CasesCart
                            key={item.id}
                            caseThing={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
