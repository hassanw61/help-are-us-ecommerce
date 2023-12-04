import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getProductsForGuests = createAsyncThunk("products/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getProductsForGuests(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const getProducts = createAsyncThunk("products/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getProducts(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const createProduct = createAsyncThunk("products/create", async ({ formData, notify, uploadProgress }, { dispatch }) => {
	try {
		const { payload } = await api.createProduct(formData, uploadProgress);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updateProduct = createAsyncThunk("products/update", async ({ formData, notify, uploadProgress }, { dispatch }) => {
	try {
		const { payload } = await api.updateProduct(formData, uploadProgress);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const deleteProduct = createAsyncThunk("products/delete", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.deleteProduct(formData);

		if (payload) {
			notify("success", "Product deleted");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
