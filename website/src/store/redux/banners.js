import { createSlice } from "@reduxjs/toolkit";
import { getBanners } from "../../actions/banners";

const initialState = { all: [] };

export const bannerSlice = createSlice({
	name: "banners",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBanners.fulfilled, (state, action) => {
			return { ...state, all: action?.payload || [] };
		});
	},
});
