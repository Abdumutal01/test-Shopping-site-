import React from 'react'
import '../Home/Headphones/Headphones.scss'
import './Likes.scss'
import { likedProducts } from '../../store'
import { useSelector } from 'react-redux';
import HeadphonesCart from '../Home/Headphones/HeadphonesCart/HeadphonesCart';

export default function Likes() {
  // let likesBox = 
  const likes = useSelector(likedProducts)
  console.log(likes);


  return (
    <div className='likes' >
      <h2 
      className='title'
      style={{
        fontSize:35,
        marginTop:"30px",
        textTransform:"capitalize"
      }}
      >
       {/* your favorite things */}
       твои любимые вещи
      </h2>

      <div
        style={{
          margin: " 40px 0px"
        }}
        className='general'
      >
        {
          likes.map((item) => (
            <HeadphonesCart
              key={item.id}
              things={item}
            />
          ))
        }
      </div>
    </div>
  )
}
