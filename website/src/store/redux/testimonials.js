import { createSlice } from "@reduxjs/toolkit";
import { getTestimonials } from "../../actions/testimonials";

const initialState = { all: [] };

export const testimonialSlice = createSlice({
	name: "testimonials",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTestimonials.fulfilled, (state, action) => {
			return { ...state, all: action?.payload || [] };
		});
	},
});
