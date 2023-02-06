import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from "./vehicle-slice";

const store = configureStore({
    reducer: {
        vehicle: vehicleSlice.reducer
    }
})

export default store;