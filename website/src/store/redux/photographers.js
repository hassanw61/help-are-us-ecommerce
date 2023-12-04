import { createSlice } from "@reduxjs/toolkit";
import {
	getPhotographerClientPackages,
	getPhotographerEventBookings,
	getPhotographerPortfolios,
	getPhotographerReviews,
	getPhotographers,
} from "../../actions/photographers";

const initialState = {
	all: [],
	allPortfolios: {},
	allClientPackages: [],
	allEventBookings: [],
	allReviews: {},
};

export const photographerSlice = createSlice({
	name: "photographers",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPhotographers.fulfilled, (state, action) => {
				return { ...state, all: action?.payload || [] };
			})
			.addCase(getPhotographerPortfolios.fulfilled, (state, action) => {
				const { payload } = action || {};
				const { userID } = payload?.[0] || {};

				return {
					...state,
					allPortfolios: userID ? { [userID]: action?.payload, ...state.allPortfolios } : state.allPortfolios,
				};
			})
			.addCase(getPhotographerClientPackages.fulfilled, (state, action) => {
				return { ...state, allClientPackages: action?.payload || [] };
			})
			.addCase(getPhotographerEventBookings.fulfilled, (state, action) => {
				return { ...state, allEventBookings: action?.payload || [] };
			})
			.addCase(getPhotographerReviews.fulfilled, (state, action) => {
				const { payload } = action || {};
				const { receiver } = payload?.[0] || {};

				return { ...state, allReviews: receiver ? { [receiver]: action?.payload, ...state.allReviews } : state.allReviews };
			});
	},
});
