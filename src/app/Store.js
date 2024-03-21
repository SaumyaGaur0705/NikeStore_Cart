import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import ListSlice from "./ListSlice.js";
const Store = configureStore({
    reducer: {
        cart: CartSlice,
        list: ListSlice,
    }
});

export default Store;