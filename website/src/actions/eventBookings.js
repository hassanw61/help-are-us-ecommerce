import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getEventBookings = createAsyncThunk("eventBookings/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getEventBookings(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const createEventBooking = createAsyncThunk("eventBookings/create", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.createEventBooking(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updateEventBooking = createAsyncThunk("eventBookings/update", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.updateEventBooking(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const deleteEventBooking = createAsyncThunk("eventBookings/delete", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.deleteEventBooking(formData);

		if (payload) {
			notify("success", "Event booking deleted");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
