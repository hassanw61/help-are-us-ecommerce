import { createSlice } from "@reduxjs/toolkit";
import { getClientPackages, createClientPackage, deleteClientPackage, updateClientPackage } from "../../actions/clientPackages";

const initialState = { all: [] };

export const clientPackageSlice = createSlice({
	name: "clientPackages",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getClientPackages.fulfilled, (state, action) => {
				return { ...state, all: action?.payload || [] };
			})
			.addCase(createClientPackage.fulfilled, (state, action) => {
				return { ...state, all: [...state.all, action.payload] };
			})
			.addCase(updateClientPackage.fulfilled, (state, action) => {
				const updatePayload = action.payload;
				return { ...state, all: state.all.map((item) => (item._id === updatePayload._id ? updatePayload : item)) };
			})
			.addCase(deleteClientPackage.fulfilled, (state, action) => {
				const deleteItemID = action?.payload?._id;
				return { ...state, all: state.all.filter((item) => item._id !== deleteItemID) };
			});
	},
});
