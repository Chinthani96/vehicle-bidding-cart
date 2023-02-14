import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '.';

type CartState = {
    cartVisible:boolean,
    hasCartItems:boolean
}

const initialState : CartState = {
    cartVisible:false,
    hasCartItems:false,
}

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        showCart(state){
            if(state.hasCartItems)
                state.cartVisible = true;
        },
        hideCart(state){
            state.cartVisible = false;
        },
        setHasCartItems(state){
            state.hasCartItems = true;
        }
    }
})

export const {showCart, hideCart, setHasCartItems} = uiSlice.actions;

export const uiSelector = (state: RootState) => state.ui;

export default uiSlice;