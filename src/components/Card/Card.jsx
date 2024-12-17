import React from "react";

const Card = ({ cart, updateCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>{item.name}</span>
              <span>{item.price}₽</span>
              <div className="quantity-controls">
                <button onClick={() => updateCart(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateCart(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
          <h3>Итог: {total}₽</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
