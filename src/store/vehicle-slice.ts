import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export type Vehicle = {
    id:string,
    details:{
       brand: string,
       color: string,
       currency: string,
       description: string,
       image:string,
       manufactureYear:string,
       price:number 
    },
    name:string
}

export type VehicleState = {
    vehicles: Vehicle[],
    brand: String
}
const initialState : VehicleState = {
    vehicles:[],
    brand:''
}

const vehicleSlice = createSlice({
    name:"vehicle",
    initialState,
    reducers:{
        addToVehicles(state,action){
            state.vehicles = action.payload;
        },
        setBrand(state,action){
            state.brand = action.payload
        }
    }
})

//actions
export const {addToVehicles,setBrand} = vehicleSlice.actions;

//selectors
export const vehicleSelector = (state: RootState) => state.vehicle;

export default vehicleSlice;