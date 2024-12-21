import React from 'react'
import './CasesCart.scss'

export default function CasesCart({ caseThing }) {
    let { imgUrl, name } = { ...caseThing }
    return (
        <div className='casesCart'>
            <img
                src={imgUrl}
                alt=""
                className="casesCart__img"
            />
            <h3 className="casesCart__name">
                {name}
            </h3>
        </div>
    )
}
