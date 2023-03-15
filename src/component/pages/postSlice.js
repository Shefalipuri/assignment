import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostService,
  getSignlePostService,
  addPostService,
} from "../../services/postService";

const initialState = {
  allPosts: [],
  singlePost: {},
  postStatus: "",
};

export const getAllPost = createAsyncThunk(
  "post/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPostService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSinglePost = createAsyncThunk(
  "post/getUserPosts",
  async (postId, thunkAPI) => {
    try {
      const response = await getSignlePostService(postId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/addUserPost",
  async (postData, thunkAPI) => {
    try {
      const response = await addPostService({ userId: 1, ...postData });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getAllPost.fulfilled]: (state, action) => {
      console.log(state);
      state.postStatus = "fulfilled";
      state.allPosts = action.payload;
    },
    [getAllPost.rejected]: (state, action) => {
      state.postStatus = "rejected";

      state.postStatus = action.payload;
    },
    [getSinglePost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.singlePost = action.payload;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.postStatus = "rejected";
    },
    [createPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [createPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = [...state.allPosts, action.payload].reverse();
    },
    [createPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
  },
});

export default postSlice.reducer;
