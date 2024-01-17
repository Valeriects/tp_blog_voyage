import { configureStore } from "@reduxjs/toolkit";

import articlesReducer from "./slices/articles.js";
import picturesReducer from "./slices/pictures.js";

const store = configureStore({
    reducer: {
        article: articlesReducer,
        picture: picturesReducer,
    }

})


export default store;