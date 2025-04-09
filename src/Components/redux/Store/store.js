import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "../Slice/CartSlice";
import { profileSlice } from "../Slice/ProfileSlice";



export const store = configureStore({
    reducer : {
        cart: cartSlice,
        profile: profileSlice
    }
})