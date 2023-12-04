import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getTestimonials = createAsyncThunk("testimonials/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getTestimonials(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
