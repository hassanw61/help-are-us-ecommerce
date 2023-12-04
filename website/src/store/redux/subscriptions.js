import { createSlice } from "@reduxjs/toolkit";
import { getSubscriptionByID, getSubscriptions } from "../../actions/subscriptions";

const initialState = {
	all: [],
	single: {},
};

export const subscriptionSlice = createSlice({
	name: "subscriptions",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getSubscriptions.fulfilled, (state, action) => {
			return { ...state, all: action?.payload || [] };
		});
		builder.addCase(getSubscriptionByID.fulfilled, (state, action) => {
			return { ...state, single: action?.payload || {} };
		});
	},
});
