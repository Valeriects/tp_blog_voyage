import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchArticles = createAsyncThunk(
    "article/fetchArticles",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/article");

        const data = await response.json();

        return data;
    }
);

const fetchArticlesAll = createAsyncThunk(
    "article/fetchArticlesAll",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/article/all");

        const data = await response.json();

        return data;
    }
);


const initialState = {
    list: [],
    isLoading: false,
    isError: false,
    listAll: [],
}

const articleSlice = createSlice({
    name: "article",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.list = action.payload
                state.isLoading = false;
                // console.log(action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isError = action.error.message
                state.isLoading = false;
            })
            .addCase(fetchArticlesAll.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticlesAll.fulfilled, (state, action) => {
                state.listAll = action.payload
                state.isLoading = false;
            })
            .addCase(fetchArticlesAll.rejected, (state, action) => {
                state.isError = action.error.message
                state.isLoading = false;
            })
    }
})



export { fetchArticles, fetchArticlesAll };
export default articleSlice.reducer;





