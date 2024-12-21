import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HeadphonesCart.scss';
import { counterActions, likedProducts } from '../../../../store';

export default function HeadphonesCart({ things }) {
    const { id, name, imgUrl, price, oldPrice, discount, stars } = things;

    const dispatch = useDispatch();
    const seeLikedTest = useSelector((state) => state.countrel.seeLikes);
    const allLikes = useSelector(likedProducts);

    const toggleLike = (testId) => {
        let likeProducts = { id: `${id}`, name: `${name}`, imgUrl: `${imgUrl}`, price: `${price}` };

        if (allLikes.some(product => product.id === testId)) {
            dispatch(counterActions.removeLiked({ id: testId })); // Mahsulotni yoqtirilganlardan o'chirish
            dispatch(counterActions.toggleSeeLikes()); // Yoqtirilganlarni ko'rish holatini o'zgartirish
        } else {
            dispatch(counterActions.addLiked(likeProducts)); // Mahsulotni yoqtirilganlarga qo'shish
            dispatch(counterActions.toggleSeeLikes()); // Yoqtirilganlarni ko'rish holatini o'zgartirish
        }
    };


    const addCarted = () => {
        console.log(price);
        
        const test = price.split(" ")
        let test2 = test.pop(); // price ni ishlatish uchun olish
        console.log(test, test2);
        
        
        let cartProducts = { id, name, imgUrl, price:`${test}` };


        dispatch(counterActions.addCart({ cartProducts: [cartProducts] }));
        dispatch(counterActions.updatePrice());
    };

    return (
        <div className='headphonesCart' id={id}>
            <button className='headphonesCart__likeBtn' onClick={() => toggleLike(id)}>
                <i className={seeLikedTest ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
            </button>
            <img src={imgUrl} alt={name} className='headphonesCart__img' />
            <div className='headphonesCart__box'>
                <h3 className='headphonesCart__name'>{name}</h3>
                <div className='headphonesCart__priceBox'>
                    <p className='headphonesCart__price'>
                        {price}  <br />
                        <span>{oldPrice}</span>
                    </p>
                    <p className='headphonesCart__discount'>{discount}</p>
                </div>
            </div>
            <div className='headphonesCart__star'>
                <span>
                    <i className='fa-solid fa-star' /> {stars}
                </span>
                <button onClick={addCarted} className='headphonesCart__buyBtn'>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    );
}
