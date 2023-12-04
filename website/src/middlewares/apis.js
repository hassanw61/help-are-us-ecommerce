import { getToken } from "./auth";
import axiosHandler from "./axiosHandler";

let defaultHeaders = {};
let multipartHeaders = {};

async function refreshAuthToken() {
	const authToken = await getToken();

	defaultHeaders = { Authorization: `Bearer ${authToken}`, "ngrok-skip-browser-warning": "69420" };
	multipartHeaders = { ...defaultHeaders, "Content-Type": "multipart/form-data" };
}

const apiMethods = {
	get: async (endpoint, formData) => {
		await refreshAuthToken();
		return axiosHandler.get(endpoint, { params: formData, headers: defaultHeaders });
	},
	post: async (endpoint, formData, isMultipart = false, uploadProgress) => {
		await refreshAuthToken();
		return axiosHandler.post(endpoint, formData, {
			headers: isMultipart ? multipartHeaders : defaultHeaders,
			onUploadProgress: uploadProgress,
		});
	},
	put: async (endpoint, formData, isMultipart = false, uploadProgress) => {
		await refreshAuthToken();
		return axiosHandler.put(endpoint, formData, {
			headers: isMultipart ? multipartHeaders : defaultHeaders,
			onUploadProgress: uploadProgress,
		});
	},
	patch: async (endpoint, formData, isMultipart = false, uploadProgress) => {
		await refreshAuthToken();
		return axiosHandler.patch(endpoint, formData, {
			headers: isMultipart ? multipartHeaders : defaultHeaders,
			onUploadProgress: uploadProgress,
		});
	},
	delete: async (endpoint, formData) => {
		await refreshAuthToken();
		return axiosHandler.delete(endpoint, { params: formData, headers: defaultHeaders });
	},
};

export const getBanners = (formData) => apiMethods.get("/v1/guests/banners", formData);
export const getBlogs = (formData) => apiMethods.get("/v1/guests/blogs", formData);
export const getCategories = (formData) => apiMethods.get("/v1/guests/categories", formData);
export const getTestimonials = (formData) => apiMethods.get("/v1/guests/testimonials", formData);
export const getSubscriptions = (formData) => apiMethods.get("/v1/guests/subscriptions", formData);
export const getPhotographyTypes = (formData) => apiMethods.get("/v1/guests/photography-types", formData);
export const getPhotographers = (formData) => apiMethods.get("/v1/guests/photographers", formData);
export const getPhotographerPortfolios = (formData) => apiMethods.get("/v1/guests/photographers/portfolios", formData);
export const getPhotographerReviews = (formData) => apiMethods.get("/v1/guests/photographers/reviews", formData);
export const getPhotographerClientPackages = (formData) => apiMethods.get("/v1/guests/photographers/client-packages", formData);
export const getPhotographerEventBookings = (formData) => apiMethods.get("/v1/guests/photographers/event-bookings", formData);
export const getProductsForGuests = (formData) => apiMethods.get("/v1/guests/products", formData);
export const updateUserLeadCount = (formData) => apiMethods.put("/v1/guests/users/leads", formData);

export const getUsers = (formData) => apiMethods.get("/v1/users", formData);
export const registerUser = (formData) => apiMethods.post("/v1/users", formData, true);
export const loginUser = (formData) => apiMethods.post("/v1/users/login", formData);
export const updateUser = (formData) => apiMethods.put("/v1/users", formData, true);
export const updatePassword = (formData) => apiMethods.post("/v1/users/password", formData);
export const sendUserVerificationEmail = (formData) => apiMethods.get("/v1/users/verify/email", formData);
export const verifyUserEmailByOTP = (formData) => apiMethods.post("/v1/users/verify/otp", formData);
export const sendPasswordResetEmail = (formData) => apiMethods.post("/v1/users/send-password-reset-email", formData);
export const resetPassword = (formData) => apiMethods.patch("/v1/users/password", formData);
export const postUserReview = (formData) => apiMethods.post("/v1/user-reviews", formData);

export const getUserPortfolios = (formData) => apiMethods.get("/v1/user-portfolios", formData);
export const createUserPortfolio = (formData, uploadProgress) =>
	apiMethods.post("/v1/user-portfolios", formData, true, uploadProgress);
export const deleteUserPortfolio = (formData) => apiMethods.delete("/v1/user-portfolios", formData);

export const getClientPackages = (formData) => apiMethods.get("/v1/client-packages", formData);
export const createClientPackage = (formData) => apiMethods.post("/v1/client-packages", formData);
export const updateClientPackage = (formData) => apiMethods.put("/v1/client-packages", formData);
export const deleteClientPackage = (formData) => apiMethods.delete("/v1/client-packages", formData);

export const getEventBookings = (formData) => apiMethods.get("/v1/event-bookings", formData);
export const createEventBooking = (formData) => apiMethods.post("/v1/event-bookings", formData);
export const updateEventBooking = (formData) => apiMethods.put("/v1/event-bookings", formData);
export const deleteEventBooking = (formData) => apiMethods.delete("/v1/event-bookings", formData);

export const getProducts = (formData) => apiMethods.get("/v1/products", formData);
export const createProduct = (formData, uploadProgress) => apiMethods.post("/v1/products", formData, true, uploadProgress);
export const updateProduct = (formData, uploadProgress) => apiMethods.put("/v1/products", formData, true, uploadProgress);
export const deleteProduct = (formData) => apiMethods.delete("/v1/products", formData);

export const getChat = (formData) => apiMethods.get("/v1/chats/chat", formData);
export const getChatGroups = (formData) => apiMethods.get("/v1/chats/groups", formData);
export const createChatGroup = (formData) => apiMethods.post("/v1/chats/groups", formData, true);
export const updateChatGroup = (formData) => apiMethods.put("/v1/chats/groups", formData, true);
export const leaveChatGroup = (formData) => apiMethods.delete("/v1/chats/groups/leave", formData);
export const deleteChatGroup = (formData) => apiMethods.delete("/v1/chats/groups", formData);
export const reportMessage = (formData) => apiMethods.post("/v1/chats/chat/report-message", formData);

export const getUserNotifications = (formData) => apiMethods.get("/v1/notifications/users", formData);
export const markNotificationsAsRead = (formData) => apiMethods.put("/v1/notifications/users/read", formData);

export const getSubscriptionPackageSession = (formData) => apiMethods.post("/v1/payments/session", formData);
export const cancelSubscriptionPlan = (formData) => apiMethods.delete("/v1/payments/subscription", formData);
