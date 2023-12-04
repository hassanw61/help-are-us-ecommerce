import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, logoutUser, verifyUserLogin } from "../../actions/users";

const initialState = {
	userInfo: {},
	loggedIn: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				return { ...state, userInfo: action?.payload || {} };
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				return { ...state, loggedIn: action?.payload || false };
			})
			.addCase(verifyUserLogin.fulfilled, (state, action) => {
				return { ...state, loggedIn: action?.payload || false };
			})
			.addCase(logoutUser.fulfilled, (state) => {
				return { ...state, loggedIn: false };
			});
	},
});
