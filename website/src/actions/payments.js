import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getSubscriptionPackageSession = async (formData, notify, dispatch) => {
	let paymentSession = null;

	try {
		const { payload } = await api.getSubscriptionPackageSession(formData);

		if (payload) paymentSession = payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}

	return paymentSession;
};

export const cancelSubscriptionPlan = async (formData, notify, dispatch) => {
	try {
		const { payload } = await api.cancelSubscriptionPlan(formData);

		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
};
