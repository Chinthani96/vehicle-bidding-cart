import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export type Vehicle = {
    id:String,
    details:{
       brand: String,
       color: String,
       currency: String,
       description: String,
       image:String,
       manufactureYear:String,
       price:number 
    },
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