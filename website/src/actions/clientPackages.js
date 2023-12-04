import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getClientPackages = createAsyncThunk("clientPackages/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getClientPackages(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const createClientPackage = createAsyncThunk("clientPackages/create", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.createClientPackage(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updateClientPackage = createAsyncThunk("clientPackages/update", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.updateClientPackage(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const deleteClientPackage = createAsyncThunk("clientPackages/delete", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.deleteClientPackage(formData);

		if (payload) {
			notify("success", "Client package deleted");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
