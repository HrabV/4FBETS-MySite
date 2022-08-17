import {configureStore} from "@reduxjs/toolkit";
import newsReducer from "../../src/reducers/newsSlice";

import authReducer from "../reducers/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer,
    },
    devTools: process.env.NODE_ENV === "development",
});

export default store;
