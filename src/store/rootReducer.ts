"use client";
import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlices/cartSlices";


const rootReducer = combineReducers({
    cartItems: cartSlice
})

export default rootReducer;