import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getSubscriptionByID = createAsyncThunk("subscriptions/fetchByID", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getSubscriptions(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const getSubscriptions = createAsyncThunk("subscriptions/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getSubscriptions(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
