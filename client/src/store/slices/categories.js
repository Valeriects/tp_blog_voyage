import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchCategories = createAsyncThunk(
    "category/fetchCategories",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/category");

        const data = await response.json();

        return data;
    }
);

const fetchDeleteCategory = createAsyncThunk(
    "category/fetchDeleteCategory",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/category/delete/${id}");

        const data = await response.json();

        return data;
    }
);


const initialState = {
    list: [],
    isLoading: false,
    isError: false,
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.list = action.payload
                state.isLoading = false;
                // console.log(action.payload);
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isError = action.error.message
                state.isLoading = false;
            })
            .addCase(fetchDeleteCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDeleteCategory.fulfilled, (state, action) => {
                state.list = action.payload
                state.isLoading = false;
                // console.log(action.payload);
            })
            .addCase(fetchDeleteCategory.rejected, (state, action) => {
                state.isError = action.error.message
                state.isLoading = false;
            })
    }
})




export { fetchCategories, fetchDeleteCategory};
export default categorySlice.reducer;