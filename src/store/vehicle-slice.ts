import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
    name:"vehicle",
    initialState:{
        vehicles:[],
    },
    reducers:{
        addToVehicles(state,action){
            state.vehicles = action.payload;
        }
    }
})

export const vehicleActions = vehicleSlice.actions;

export default vehicleSlice;