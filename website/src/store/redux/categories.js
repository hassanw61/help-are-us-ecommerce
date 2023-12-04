import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../actions/categories";

const initialState = { all: [] };

export const categorySlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategories.fulfilled, (state, action) => {
			return { ...state, all: action?.payload || [] };
		});
	},
});
