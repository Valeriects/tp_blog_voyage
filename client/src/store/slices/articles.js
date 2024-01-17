import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchArticles = createAsyncThunk(
    "article/fetchArticles",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/articles");

        const data = await response.json();

        return data;
    }
);

const initialState = {
    list: [],
    isLoading: false,
    isError: false
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
                action.isLoading = false;
                // console.log(action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isError = action.error.message
                state.isLoading = false;
            })
    }
})




export { fetchArticles };
export default articleSlice.reducer;





