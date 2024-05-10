import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice.jsx";
import CartSlice from "./slices/CartSlice.jsx";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";

const persistReducerConfig = {
     key: 'root',
     version:1,
     storage
}

const reducer=combineReducers({
     auth: AuthSlice,
     cart: CartSlice,
})
const persistedReducer = persistReducer(persistReducerConfig, reducer);
export const store = configureStore({
     reducer:  persistedReducer
});
