import { configureStore } from "@reduxjs/toolkit";
import rootedReducer from './redux/reducers/main'

const store = configureStore({
    reducer: {
        rootedReducer
      }
})

export default store;