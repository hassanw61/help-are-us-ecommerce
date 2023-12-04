import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getUserPortfolios = createAsyncThunk("userPortfolio/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getUserPortfolios(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const createUserPortfolio = async (formData, notify, uploadProgress, dispatch) => {
	try {
		const { payload } = await api.createUserPortfolio(formData, uploadProgress);

		if (payload?.length) {
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
};

export const deleteUserPortfolio = createAsyncThunk("userPortfolios/delete", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.deleteUserPortfolio(formData);

		if (payload) {
			notify("success", "Portfolio items deleted");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
