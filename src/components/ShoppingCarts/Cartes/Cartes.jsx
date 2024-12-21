import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shopProducts, counterActions, bookPrices } from '../../../store/index';
import './Cartes.scss';

const Cart = () => {
    //   const { items, total, deliveryFee } = useSelector(state => state.cart);
    const allPrice = useSelector(state => state.countrel.allPrice);

    const dispatch = useDispatch();
    console.log(allPrice);

    const shoppingArr = useSelector(shopProducts)
    const bookPrice = useSelector(bookPrices)



    // const cartProducts = useSelector(allProducts)

    console.log(shoppingArr);

    const removeCart = (id, price) => {
        dispatch(counterActions.removeCart({ id: id, price: price }))
    }

    const addShopCart = (item, price) => {
        const test = price.split(" ")
        let test2 = +test.pop(); // price ni ishlatish uchun olish
        console.log(test, test2);
        console.log(test);
        dispatch(counterActions.addShopCart(test2))
    }
    const removeShopCart = (id, price) => {
        const test = price.split(" ")
        let test2 = +test.pop(); // price ni ishlatish uchun olish
        console.log(test, test2);
        console.log(test);
        dispatch(counterActions.removeShopCart({ id: id, price: test2 }))
        if (allPrice <= 0) {
            dispatch(counterActions.removeCart({ id: id, price: price }))
        }
    }
    const newPrice = (allPrice, bookPrice) => {
        if (allPrice >= 0) {
            return allPrice + bookPrice
        } if (allPrice <= 0) {
            return  bookPrice
        }
    }
    // if (allPrice > 0) {
    //      newPrice = allPrice + bookPrice
    // }

    return (
        <div className="cart">
            <h1 className="cart__title">Корзина</h1>

            {shoppingArr.map(item => (
                <div key={item.id} className="cart__item">
                    <img src={item.imgUrl} alt={item.name} />
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.price} ₸</p>
                    </div>
                    <div className="cart__controls">
                        <button
                            onClick={() => removeShopCart(item.id, item.price)}
                        >
                            <i class="fa-solid fa-minus"></i>
                        </button>

                        <span>{item.quantity}</span>
                        <button
                            onClick={() => addShopCart(item, item.price)}
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <button
                        onClick={() => removeCart(item.id, item.price)}
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            ))}

            <div className="cart__delivery">
                <h2>Доставка</h2>
                <div className="cart__delivery-map"></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <span>Доставка курьером</span>
                    <span>{bookPrice} ₸</span>
                </div>
            </div>

            <div className="cart__checkout">
                <div>
                    <span>ИТОГО</span>
                    <h2>
                        {
                            newPrice(allPrice, bookPrice)
                        }
                        ₸
                    </h2>
                </div>
                <button>Перейти к оформлению</button>
            </div>
        </div>
    );
};

export default Cart;

