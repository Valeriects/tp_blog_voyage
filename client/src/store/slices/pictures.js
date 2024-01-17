import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchPictures = createAsyncThunk(
    "picture/fetchPicttures",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/pictures");

        const data = await response.json();

        return data;
    }
);

const initialState = {
    listPictures: [],
    isLoading: false,
    isError: false
}

const pictureSlice = createSlice({
    name: "picture",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPictures.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPictures.fulfilled, (state, action) => { 
                state.listPictures = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPictures.rejected, (state, action) => {
                state.isError = action.error.message;
                state.isLoading = false;
            })
    }

})

export { fetchPictures };
export default pictureSlice.reducer;