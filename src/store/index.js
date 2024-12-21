import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

// Dastlabki holat (initialState)
const initialState = {
    liked: 0,
    cart: 0,
    bookPrice: 499,
    allPrice: 0,
    newPrice: 0,
    seeLikes: false,
    products: {
        headphone: [],
        cases: []
    },
    shopProducts: [],
    likesProducts: []
};

// Reducerlar
const counterSlice = createSlice({
    name: "countrel",
    initialState,
    reducers: {
        // Mahsulotlarni qo'shish (headphone)
        addProducts(state, action) {
            state.products.headphone.push(...action.payload.headphone);
        },

        // Mahsulotlarni qo'shish (cases)
        addCases(state, action) {
            state.products.cases.push(...action.payload.case);
        },

        // Mahsulotni yoqtirilganlarga qo'shish
        addLiked(state, action) {
            if (action.payload) {
                state.likesProducts.push(action.payload);
                state.liked++;
                state.seeLikes = true;
            }
        },

        // Yoqtirilgan mahsulotlarni o'chirish
        removeLiked(state, action) {
            state.likesProducts = state.likesProducts.filter(
                product => product.id !== action.payload.id
            );
            if (state.liked > 0) state.liked--;
            state.seeLikes = state.liked > 0;
        },

        // Savatga qo'shish
        addCart(state, action) {
            if (action.payload.cartProducts) {
                state.shopProducts.push(...action.payload.cartProducts);
                console.log(state.shopProducts);

                state.cart++;
            }
        },


        // Savatdan o'chirish
        removeCart(state, action) {
            console.log(action.payload);
            const id = action.payload.id;
            const price = action.payload.price
            console.log(price);
            state.cart--


            if (id) {
                const existingProduct = state.shopProducts.find(
                    product => product.id === id
                );

                if (existingProduct) {
                    state.shopProducts = state.shopProducts.filter(
                        product => product.id !== id

                    );
                    if (state.cart > 0) {
                        state.allPrice = state.allPrice - price
                    }
                    if (state.cart === 0) {
                        state.allPrice = 0
                    }
                }
            } else {
                console.error("Product ID not provided in action payload.");
            }
        }
        ,
        addShopCart(state, action) {
            let prices = action.payload
            console.log(state.allPrice += prices);
            state.cart++

        },
        removeShopCart(state, action) {

            if (state.allPrice > 0) {
                const priceToRemove = +action.payload.price; // Narxni son tipiga o'tkazish
                if (priceToRemove > 0) {
                    state.allPrice -= priceToRemove; // Jami narxdan narxni olib tashlash
                    if (state.cart !== 0) {
                        state.cart--
                    } if(state.cart <= 0){
                        state.cart =0
                    }
                    console.log("Yangilangan narx:", state.allPrice);
                } else {
                    return state.allPrice
                }
            }
        },

        // Narxlarni yangilash
        updatePrice(state) {
            state.allPrice = state.shopProducts.reduce((acc, product) => acc + Number(product.price), 0);
        },

        // Yoqtirilganlarni ko'rish holatini almashtirish
        toggleSeeLikes(state) {
            state.seeLikes = !state.seeLikes;
        }
    }
});

// Redux Toolkit uchun konfiguratsiya
const store = configureStore({ reducer: { countrel: counterSlice.reducer } });

// Selectorlar
export const allProducts = state => state.countrel.products;
export const likedProducts = state => state.countrel.likesProducts;
export const shopProducts = state => state.countrel.shopProducts
export const counterActions = counterSlice.actions;
export const bookPrices = state => state.countrel.bookPrice

export default store;
