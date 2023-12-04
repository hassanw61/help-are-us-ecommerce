import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getPhotographyTypes = createAsyncThunk("photographyTypes/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getPhotographyTypes(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
