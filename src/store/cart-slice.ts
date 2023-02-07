import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export type CartItem = {
    name:string,
    price:string,
    biddingPrice:string,
    image:string
}

export type CartState = {
    cartItems: CartItem[],
    totalAmount:number,
}

const initialState : CartState = {
    cartItems:[],
    totalAmount:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            console.log(action.payload);
            state.cartItems.push(action.payload);
        }
    }
})

export const {addToCart} = cartSlice.actions;

export const cartSelector = (state:RootState) => state.cart;

export default cartSlice;