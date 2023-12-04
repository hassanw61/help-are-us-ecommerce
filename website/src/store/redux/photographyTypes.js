import { createSlice } from "@reduxjs/toolkit";
import { getPhotographyTypes } from "../../actions/photographyTypes";

const initialState = { all: [] };

export const photographyTypeSlice = createSlice({
	name: "photographyTypes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPhotographyTypes.fulfilled, (state, action) => {
			return { ...state, all: action?.payload || [] };
		});
	},
});
