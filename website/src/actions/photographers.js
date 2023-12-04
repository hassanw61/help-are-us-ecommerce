import { apiErrorHandler } from "./apiErrorHandler";
import * as api from "../middlewares/apis";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotographers = createAsyncThunk("photographers/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getPhotographers(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const getPhotographerClientPackages = createAsyncThunk(
	"photographerClientPackages/fetchAll",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const { payload } = await api.getPhotographerClientPackages(formData);

			if (payload) return payload;
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	},
);

export const getPhotographerEventBookings = createAsyncThunk(
	"photographerEventBookings/fetchAll",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const { payload } = await api.getPhotographerEventBookings(formData);

			if (payload) return payload;
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	},
);

export const getPhotographerPortfolios = createAsyncThunk(
	"photographerPortfolios/fetchAll",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const { payload } = await api.getPhotographerPortfolios(formData);

			if (payload) return payload;
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	},
);

export const getPhotographerReviews = createAsyncThunk(
	"photographerReviews/fetchAll",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const { payload } = await api.getPhotographerReviews(formData);

			if (payload) return payload;
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	},
);
