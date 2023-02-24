import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from "notiflix";
import origin from "../origin";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
    try {
        const { data } = await axios(`${origin}/posts`);
        return data;
    } catch (error) {
        return error;
    }
});

const postSlice = createSlice({
    name: "post",
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {
        likePost: (state, { payload: id }) => {
            const found = state.data.findIndex((post) => post.id === id);
            if (found < 0) {
                Notify.failure(`post with id ${id} does not exists`);
            } else {
                state.data[found]["user_has_liked"] = state.data[found][
                    "user_has_liked"
                ]
                    ? false
                    : true;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, { payload }) => {
                state.isLoading = false;
                console.log(payload);
            });
    },
});

export const { likePost } = postSlice.actions;

export default postSlice.reducer;
