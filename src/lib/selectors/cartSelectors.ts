"use client";
import { RootState } from "@/store/store";
import { createSelector } from "reselect";


const selectCartItems = (state: RootState) => state.cartItems.cartItems;

export const selectCartTotalQuantity = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)