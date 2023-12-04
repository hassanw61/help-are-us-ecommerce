import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./users";
import { bannerSlice } from "./banners";
import { blogSlice } from "./blogs";
import { categorySlice } from "./categories";
import { chatSlice } from "./chat";
import { photographyTypeSlice } from "./photographyTypes";
import { subscriptionSlice } from "./subscriptions";
import { notificationSlice } from "./notifications";
import { testimonialSlice } from "./testimonials";
import { productSlice } from "./products";
import { photographerSlice } from "./photographers";
import { userPortfolioSlice } from "./userPortfolios";
import { clientPackageSlice } from "./clientPackages";
import { eventBookingSlice } from "./eventBookings";

const store = configureStore({
	reducer: {
		users: userSlice?.reducer,
		photographers: photographerSlice?.reducer,
		banners: bannerSlice?.reducer,
		blogs: blogSlice?.reducer,
		categories: categorySlice?.reducer,
		clientPackages: clientPackageSlice?.reducer,
		chat: chatSlice?.reducer,
		eventBookings: eventBookingSlice?.reducer,
		photographyTypes: photographyTypeSlice?.reducer,
		subscriptions: subscriptionSlice?.reducer,
		testimonials: testimonialSlice?.reducer,
		products: productSlice?.reducer,
		userPortfolios: userPortfolioSlice?.reducer,
		notifications: notificationSlice?.reducer,
	},
});

export default store;
