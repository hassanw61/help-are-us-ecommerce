import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getUserNotifications = createAsyncThunk("userNotifications/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getUserNotifications(formData);
		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const getUserMessageNotifications = createAsyncThunk(
	"userMessageNotifications/message/fetchAll",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const { payload } = await api.getUserNotifications(formData);

			if (payload) return payload;
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	},
);

export const markNotificationsAsRead = createAsyncThunk(
	"userNotifications/update/read",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const { payload } = await api.markNotificationsAsRead(formData);

			if (payload) {
				return payload;
			}
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	},
);
