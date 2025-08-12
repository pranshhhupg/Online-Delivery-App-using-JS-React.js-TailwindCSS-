import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userInfoSlice from "./userInfoSlice";
import orderDetailsSlice from "./orderDetailsSlice";

const appStore = configureStore({
    reducer : {
        cart : cartSlice,
        user : userInfoSlice,
        orderDetails : orderDetailsSlice
    }
});

export default appStore;
