import { createSlice } from "@reduxjs/toolkit";
import { createUserPortfolio, deleteUserPortfolio, getUserPortfolios } from "../../actions/userPortfolios";

const initialState = { all: [] };

export const userPortfolioSlice = createSlice({
	name: "userPortfolios",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUserPortfolios.fulfilled, (state, action) => {
				return { ...state, all: action?.payload || [] };
			})
			.addCase(deleteUserPortfolio.fulfilled, (state, action) => {
				const deleteItemIDs = action?.payload?.deletedIDs;
				return { ...state, all: state.all.filter((item) => !deleteItemIDs.includes(item._id)) };
			});
	},
});
