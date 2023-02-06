import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type Vehicle = {
    id:String,
    details:Object,
    name:String
}

export type VehicleState = {
    vehicles: Vehicle[]
}
const initialState : VehicleState = {
    vehicles:[]
}

const vehicleSlice = createSlice({
    name:"vehicle",
    initialState,
    reducers:{
        addToVehicles(state,action){
            state.vehicles = action.payload;
        }
    }
})

//actions
export const {addToVehicles} = vehicleSlice.actions;

//selectors
export const vehicleSelector = (state: RootState) => state.vehicle;

export default vehicleSlice;