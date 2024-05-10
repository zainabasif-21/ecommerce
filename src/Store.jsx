import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice.jsx";
import CartSlice from "./slices/CartSlice.jsx";

const reducer={
     auth: AuthSlice,
     cart: CartSlice,
}

export const store = configureStore({
     reducer: reducer
});
