import { createSlice } from "@reduxjs/toolkit";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../../actions/products";

const initialState = { all: [] };

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.fulfilled, (state, action) => {
				return { ...state, all: action?.payload || [] };
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				return { ...state, all: [...state.all, action.payload] };
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				const updatePayload = action.payload;
				return { ...state, all: state.all.map((item) => (item._id === updatePayload._id ? updatePayload : item)) };
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				const deleteItemID = action?.payload?._id;
				return { ...state, all: state.all.filter((item) => item._id !== deleteItemID) };
			});
	},
});
