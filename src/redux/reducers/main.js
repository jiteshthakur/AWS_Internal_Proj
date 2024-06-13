import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer, loginReducer } from "./reducer";

const rootedReducer = combineReducers({
    cartReducer: cartReducer,
    loginReducer: loginReducer
});

export default rootedReducer;