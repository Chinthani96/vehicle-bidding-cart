import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import vehicleSlice from "./vehicle-slice";

const store = configureStore({
    reducer: {
        vehicle: vehicleSlice.reducer,
        cart:cartSlice.reducer,
        ui:uiSlice.reducer,
    }
})

export default store;

//Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;