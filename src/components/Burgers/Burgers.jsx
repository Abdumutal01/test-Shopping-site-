import React from 'react'
import burgers from '../../assets/json/burger.json'

export default function Burgers({addToCart }) {
  return (
    <div className="burger-list">
        {burgers.map((burger) => (
            <div className="burger" key={burger.id}>
                <img src={burger.imgUrl} alt={burger.name} />
                <h3>{burger.name}</h3>
                <p>{burger.price}₽</p>
                <button onClick={() => addToCart(burger)}>Добавить</button>
            </div>
        ))}
    </div>
);
}
