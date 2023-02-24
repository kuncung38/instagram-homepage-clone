import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers.js/postReducer";
import userReducer from "./reducers.js/userReducer";

const store = configureStore({
    reducer: {
        post: postReducer,
        user: userReducer,
    },
});

export default store;
