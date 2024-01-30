import { configureStore } from "@reduxjs/toolkit";

import articlesReducer from "./slices/articles.js";
import picturesReducer from "./slices/pictures.js";
import categoriesReducer from "./slices/categories.js";
import userReducer from "./slices/users.js";

const store = configureStore({
    reducer: {
        article: articlesReducer,
        picture: picturesReducer,
        category: categoriesReducer,
        user: userReducer,
    }

})


export default store;