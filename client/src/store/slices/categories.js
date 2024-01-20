import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchCategories = createAsyncThunk(
    "category/fetchCategories",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/category");

        const data = await response.json();

        return data;
    }
);

const fetchAddCategory = createAsyncThunk(
    "category/fetchAddCategory",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/category");

        const data = await response.json();

        return data;
    }
);


const initialState = {
    list: [],
    isLoading: false,
    isError: false
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
            // .addCase(fetchAddCategory.pending, (state) => {
            //     state.isLoading = true;
            // })
            // .addCase(fetchAddCategory.fulfilled, (state, action) => {
            //     state.list = action.payload
            //     state.isLoading = false;
            //     // console.log(action.payload);
            // })
            // .addCase(fetchAddCategory.rejected, (state, action) => {
            //     state.isError = action.error.message
            //     state.isLoading = false;
            // })
    }
})




export { fetchCategories, fetchAddCategory};
export default categorySlice.reducer;