"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartType {
    id: number
    title: string
    description: string
    image: string 
    price: number
    quantity: number
}

// types for state cart
export interface CartState {
    cartItems: CartType[];
    totalPrice: number
  }

const initialState:CartState = {
    cartItems: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartType>) => {
            const existingItem = state.cartItems.findIndex((item) => item.id == action.payload.id);
            if(existingItem !== -1){
                state.cartItems[existingItem].quantity += 1;
            }else{
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            state.cartItems = state.cartItems.filter((items) => items.id !== action.payload.id);
        },
        updateQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
            const existingItem = state.cartItems.findIndex((item) => item.id == action.payload.id);
            if(existingItem !== -1){
                state.cartItems[existingItem].quantity = action.payload.quantity;
            }
        },
    }
});

export default cartSlice.reducer;
export const { addToCart, removeItem, updateQuantity } = cartSlice.actions;
