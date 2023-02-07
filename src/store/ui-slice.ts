import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '.';

type CartState = {
    cartVisible:boolean,
}

const initialState : CartState = {
    cartVisible:false
}

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        showCart(state){
            state.cartVisible = true;
        },
        hideCart(state){
            state.cartVisible = false;
        }
    }
})

export const {showCart, hideCart} = uiSlice.actions;

export const uiSelector = (state: RootState) => state.ui;

export default uiSlice;