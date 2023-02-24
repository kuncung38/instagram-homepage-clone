import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import origin from "../origin";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    try {
        const { data } = await axios(`${origin}/users`);
        return data;
    } catch (error) {
        return error;
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(fetchUsers.rejected, (state, { payload }) => {
                state.isLoading = false;
                console.log(payload);
            });
    },
});

export default userSlice.reducer;
