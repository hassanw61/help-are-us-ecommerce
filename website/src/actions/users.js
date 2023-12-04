import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../middlewares/apis";
import { getToken, setToken } from "../middlewares/auth";
import { apiErrorHandler } from "./apiErrorHandler";

export const getUser = createAsyncThunk("users/getInfo", async (notify, { dispatch }) => {
	try {
		const { payload } = await api.getUsers();

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const registerUser = async (formData, notify, dispatch) => {
	try {
		const { payload } = await api.registerUser(formData);

		if (payload) {
			notify("success", "User successfully Registered. Now you can login");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
};

export const loginUser = createAsyncThunk("user/login", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.loginUser(formData);

		if (payload?.token) {
			await setToken(payload.token);

			notify("success", "Login successful");
			return true;
		}
	} catch (error) {
		if (error?.message) notify("warning", error?.message ? error.message : "Invalid Login Credentials!");
		// dispatch(apiErrorHandler(error, notify));
	}
});

export const verifyUserLogin = createAsyncThunk("user/verifyLogin", async (notify, { dispatch }) => {
	try {
		const payload = getToken();

		return payload ? true : false;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updateUserLeadCount = createAsyncThunk("user/updateLeadCount", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.updateUserLeadCount(formData);

		if (payload) {
			return true;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updateUser = createAsyncThunk("user/update", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.updateUser(formData);

		if (payload) {
			dispatch(getUser());
			notify("success", "Profile Updated Successfully");

			return true;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updatePassword = async (formData, notify, dispatch) => {
	try {
		const { payload } = await api.updatePassword(formData);

		if (payload) {
			dispatch(getUser());
			notify("success", "Profile Updated Successfully");
			return true;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
};

export const sendUserVerificationEmail = createAsyncThunk("user/verify/email", async ({ notify }, { dispatch }) => {
	try {
		const { payload } = await api.sendUserVerificationEmail();

		if (payload?.accepted?.length) {
			notify("success", "email sent to " + payload?.accepted?.[0]);
			return true;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const verifyUserEmailByOTP = createAsyncThunk("user/verify/otp", async ({ formData, notify }, { dispatch, extra }) => {
	try {
		const { payload } = await api.verifyUserEmailByOTP(formData);

		if (payload?._id) {
			dispatch(getUser());
			notify("success", "User Verified Successfully");
			return true;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const sendPasswordResetEmail = createAsyncThunk(
	"user/sendPasswordResetEmail",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const { payload } = await api.sendPasswordResetEmail(formData);

			if (payload?.accepted?.length) {
				notify("success", "email sent to " + payload?.accepted?.[0]);
				return true;
			}
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	},
);

export const resetPassword = createAsyncThunk("user/resetPassword", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.resetPassword(formData);

		if (payload) {
			notify("success", "Password reset successfully");
			return true;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const logoutUser = createAsyncThunk("user/logout", async (notify, { dispatch }) => {
	try {
		localStorage.clear();
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const postUserReview = createAsyncThunk("user/reviews/create", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.postUserReview(formData);

		if (payload) {
			return true;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
