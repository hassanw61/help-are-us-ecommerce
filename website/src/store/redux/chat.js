import { createSlice } from "@reduxjs/toolkit";
import {
	createChatGroup,
	deleteChatGroup,
	getChatGroups,
	getGroupMessages,
	reportMessage,
	updateChatGroup,
} from "../../actions/chat";

const initialState = {
	messages: [],
	groups: [],
};

export const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getGroupMessages.fulfilled, (state, action) => {
				return { ...state, messages: action?.payload || [] };
			})
			.addCase(getChatGroups.fulfilled, (state, action) => {
				return { ...state, groups: action?.payload || [] };
			})
			.addCase(createChatGroup.fulfilled, (state, action) => {
				return { ...state, groups: [...state.groups, action.payload] };
			})
			.addCase(updateChatGroup.fulfilled, (state, action) => {
				const updatePayload = action.payload;
				return { ...state, groups: state.groups.map((item) => (item._id === updatePayload._id ? updatePayload : item)) };
			})
			.addCase(deleteChatGroup.fulfilled, (state, action) => {
				const deleteItemID = action?.payload?._id;
				return { ...state, groups: state.groups.filter((item) => item._id !== deleteItemID) };
			})
			.addCase(reportMessage.fulfilled, (state, action) => {
				const updatedPayload = action?.payload || {};
				return {
					...state,
					messages: state.messages.map((item) => (item._id === updatedPayload?._id ? updatedPayload : item)),
				};
			});
	},
});
