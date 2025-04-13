"use client";
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "@/storage/storage";
import rootReducer from "./rootReducer";

const preloadedState = loadState();


export const store = configureStore({
    reducer: rootReducer,
    preloadedState
});

store.subscribe(() => {
  saveState({
    cartItems: store.getState().cartItems
  });
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;