import { createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "../../actions/blogs";

const initialState = { all: [] };

export const blogSlice = createSlice({
	name: "blogs",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBlogs.fulfilled, (state, action) => {
			return { ...state, all: action?.payload || [] };
		});
	},
});
