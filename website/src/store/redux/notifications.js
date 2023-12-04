import { createSlice } from "@reduxjs/toolkit";
import { getUserMessageNotifications, getUserNotifications } from "../../actions/notifications";

const initialState = {
	all: [],
	message: [],
};

export const notificationSlice = createSlice({
	name: "notifications",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUserNotifications.fulfilled, (state, action) => {
				return { ...state, all: action?.payload || [] };
			})
			.addCase(getUserMessageNotifications.fulfilled, (state, action) => {
				return { ...state, message: action?.payload || [] };
			});
	},
});
