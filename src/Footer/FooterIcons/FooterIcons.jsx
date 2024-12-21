import React from 'react'
import './FooterIcons.scss'
import { footerIconArr } from './FooterIconsArr'

export default function FooterIcons() {
    return (
        <div className='footerIcons'>
            {
                footerIconArr.map(item => (
                    <a
                        className='footerIcons__icons'
                        href={item.link}
                    >
                        <img
                            src={item.icon}
                            alt=""
                        />
                    </a>
                ))
            }
        </div>
    )
}
