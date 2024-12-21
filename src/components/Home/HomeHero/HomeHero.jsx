import React from 'react'
import './HomeHero.scss'




export default function HomeHero() {

    let heroImg = 'https://s3-alpha-sig.figma.com/img/df72/bf4c/49c3f7040fd2f5139317d7f1dbc172f6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gynE2o1wbWJ0mGi6G82KPAw1fpWY3zP9NEGrV981TtJxuQM~lmEpJOd4ziauOuw3yuuizl6ZRMGO2HLWLHgpGRpMR-lWvMaNYT40QetFWnWDMKzSg7uz3L5J1RqzSeTBZf8dCzqYqIN-xi~rqV0IkbiPNfew0dStRxcISjENr0smG0Xc~bpDBsSiDkHMVbCs7n6-YGnYbhO~n7ia69WhU1ajuvw~ixL25BzA5NYPlsAJ67egPd-E3NFNbLv62G6n6ZTPuWDMXldqy-mXprg0~AjC0m9jkJFXTci7jqsLBZHUcnNLJOgc1cSztXNsuBbkca3DCwOToRuBwIBYVUF28w__'

    return (
        <div className='hero'>
            <h2 className="hero__title">
                Аксессуары для <br />
                Iphone 13 Pro Max
            </h2>
            <img
                className='hero__img'
                src={heroImg}
                alt=""
            />
        </div>
    )
}
