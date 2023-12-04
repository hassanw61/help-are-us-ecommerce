import { createSlice } from "@reduxjs/toolkit";
import { createEventBooking, deleteEventBooking, getEventBookings, updateEventBooking } from "../../actions/eventBookings";

const initialState = { all: [] };

export const eventBookingSlice = createSlice({
	name: "eventBookings",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getEventBookings.fulfilled, (state, action) => {
				return { ...state, all: action?.payload || [] };
			})
			.addCase(createEventBooking.fulfilled, (state, action) => {
				return { ...state, all: [...state.all, action.payload] };
			})
			.addCase(updateEventBooking.fulfilled, (state, action) => {
				const updatePayload = action.payload;
				return { ...state, all: state.all.map((item) => (item._id === updatePayload._id ? updatePayload : item)) };
			})
			.addCase(deleteEventBooking.fulfilled, (state, action) => {
				const deleteItemID = action?.payload?._id;
				return { ...state, all: state.all.filter((item) => item._id !== deleteItemID) };
			});
	},
});
