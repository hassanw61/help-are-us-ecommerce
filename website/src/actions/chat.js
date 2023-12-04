import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getGroupMessages = createAsyncThunk("chat/groups/messages/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getChat(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const getChatGroups = createAsyncThunk("chat/groups/fetchAll", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.getChatGroups(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const createChatGroup = createAsyncThunk("chat/groups/create", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.createChatGroup(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updateChatGroup = createAsyncThunk("chat/groups/update", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.updateChatGroup(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const leaveChatGroup = createAsyncThunk("chat/groups/leave", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.leaveChatGroup(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const deleteChatGroup = createAsyncThunk("chat/groups/delete", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.deleteChatGroup(formData);

		if (payload) {
			notify("success", "Group deleted");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const reportMessage = createAsyncThunk("chat/groups/messages/report", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.reportMessage(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
