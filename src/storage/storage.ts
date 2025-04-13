"use client";
import { RootState } from "@/store/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('redux-state-cart');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err: unknown) {
        console.log(err)
        return undefined;
    }
}

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('redux-state-cart', serializedState);
    } catch (err: unknown) {
        console.log(err)
    }
}