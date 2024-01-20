import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchUsers = createAsyncThunk( 
    "user/fetchUsers",
    async () => {
        const response = await fetch("http://localhost:8000/api/v1/user");

        const data = await response.json();

        return data;
    }
);

const initialState = {
    userInfo: {
        id: null,
        username: "toto",
        isLogged: false,
        role_id: "no sé"
    },
    // username: "toto",
    // isLogged: false,
    isError: false,
    isLoading: false,
    listUsers: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateStatus(state, action) {
            console.log("action de updateStatus: ",action);
            state.userInfo.isLogged = true;
            state.userInfo.id = action.payload.id;
            state.userInfo.role_id = action.payload.role_id
            state.userInfo.username = action.payload.username

            //si j'envois l'objet user {username, role_id} dans ma connexion de back alors il faudra que je récupère le username de l'objet user
            // state.userInfo.username = action.payload.user.username
        },
        logout(state) {
            // console.log(state);
            state.userInfo.username = "";
            state.userInfo.role_id = "";
            state.userInfo.isLogged = false;
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                console.log("action.payload: ", action.payload);
                state.listUsers = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isError = action.error.message;
                state.isLoading = false;
            })
    }
});

export { fetchUsers };
export const { updateStatus, logout } = userSlice.actions;
export default userSlice.reducer;