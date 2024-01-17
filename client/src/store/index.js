import { configureStore } from "@reduxjs/toolkit";

import articlesReducer from "./slices/articles.js";

const store = configureStore({
    reducer: {
        article: articlesReducer,
    }

})


export default store;