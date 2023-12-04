import { Link, useLocation } from "react-router-dom";
import { useToast } from "../store/hooks/useToast";
import Breadcrumb from "../styles/BreadCrumb/Breadcrumb";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getSubscriptionPackageSession } from "../actions/payments";

const Checkout = () => {
	const { notify } = useToast();
	const dispatch = useDispatch();
	const location = useLocation();

	const [subscriptionInfo, setSubscriptionInfo] = useState({});
	const [subscriptionPackageCheckoutURL, setSubscriptionPackageCheckoutURL] = useState(null);

	const user = location?.state?.user || null;
	const checkoutType = location?.state?.type || null;
	const queryParams = new URLSearchParams(location.search);
	const paymentStatus = queryParams.get("payment-status");

	useEffect(() => {
		if (checkoutType) getPaymentCheckoutSession();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checkoutType]);

	const getPaymentCheckoutSession = async () => {
		if (checkoutType === "subscription" && user?.subscription?.duration) {
			setSubscriptionInfo(location?.state?.subscription);

			const paymentCheckoutSession = await getSubscriptionPackageSession(
				{ gateway: "stripe", paymentMode: checkoutType, subscription: { duration: user?.subscription?.duration } },
				notify,
				dispatch,
			);

			if (paymentCheckoutSession?.url) setSubscriptionPackageCheckoutURL(paymentCheckoutSession.url);
		}
	};

	return (
		<div className="fade-in">
			<Breadcrumb page="Checkout" />
			<section className="cart-area section--padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="card card-item">
								<div className="card-body">
									<h3 className="card-title fs-22 pb-3">Payment Method</h3>
									<div className="divider">
										<span />
									</div>
									<div className="payment-option-wrap">
										<div className="payment-tab is-active">
											<div className="payment-tab-toggle">
												<label>Stripe</label>
											</div>
											<div className="payment-tab-content">
												<p className="fs-15 lh-24">
													Make your payment directly into our bank account. Please use your Order ID as the payment
													reference. Your order won’t be shipped until the funds have cleared in our account.
												</p>
											</div>
										</div>

										{/* <div className="payment-tab">
											<div className="payment-tab-toggle">
												<input id="paypal" name="radio" type="radio" defaultValue="paypal" />
												<label htmlFor="paypal">PayPal</label>
												<img className="payment-logo" src="images/paypal.png" alt="" />
											</div>
											<div className="payment-tab-content">
												<p className="fs-15 lh-24">
													In order to complete your transaction, we will transfer you over to PayPal's secure
													servers.
												</p>
											</div>
										</div> */}

										{/* <div className="payment-tab">
											<div className="payment-tab-toggle">
												<input type="radio" name="radio" id="creditCart" defaultValue="creditCard" />
												<label htmlFor="creditCart">Credit / Debit Card</label>
												<img className="payment-logo" src="images/payment-img.png" alt="" />
											</div>
											<div className="payment-tab-content">
												<form action="#" className="row">
													<div className="input-box col-lg-6">
														<label className="label-text">Name on Card</label>
														<div className="form-group">
															<input
																className="form-control form--control pl-3"
																type="text"
																name="text"
																placeholder="Card Name"
															/>
														</div>
													</div>
													<div className="input-box col-lg-6">
														<label className="label-text">Card Number</label>
														<div className="form-group">
															<input
																className="form-control form--control pl-3"
																type="text"
																name="text"
																placeholder="1234  5678  9876  5432"
															/>
														</div>
													</div>
													<div className="input-box col-lg-4">
														<label className="label-text">Expiry Month</label>
														<div className="form-group">
															<input
																className="form-control form--control pl-3"
																type="text"
																name="text"
																placeholder="MM"
															/>
														</div>
													</div>
													<div className="input-box col-lg-4">
														<label className="label-text">Expiry Year</label>
														<div className="form-group">
															<input
																className="form-control form--control pl-3"
																type="text"
																name="text"
																placeholder="YY"
															/>
														</div>
													</div>
													<div className="input-box col-lg-4">
														<label className="label-text">CVV</label>
														<div className="form-group">
															<input
																className="form-control form--control pl-3"
																type="text"
																name="text"
																placeholder="cvv"
															/>
														</div>
													</div>
												</form>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-5">
							<div className="card card-item">
								<div className="card-body">
									<h3 className="card-title fs-22 pb-3">Order Summary</h3>
									<div className="divider">
										<span />
									</div>
									<ul className="generic-list-item generic-list-item-flash fs-15">
										<li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
											<span className="text-black">Subscription Plan:</span>
											<span>{subscriptionInfo?.title}</span>
										</li>
										<li className="d-flex align-items-center justify-content-between font-weight-semi-bold">
											<span className="text-black">Price:</span>
											<span>${subscriptionInfo?.price}</span>
										</li>
										<li className="d-flex align-items-center justify-content-between font-weight-bold">
											<span className="text-black">Total:</span>
											<span>${subscriptionInfo?.price}</span>
										</li>
									</ul>
									<div className="btn-box border-top border-top-gray pt-3">
										<p className="fs-14 lh-22 mb-2">
											Aduca is required by law to collect applicable transaction taxes for purchases made in certain
											tax jurisdictions.
										</p>
										<p className="fs-14 lh-22 mb-3">
											By completing your purchase you agree to these{" "}
											<a href="#" className="text-color hover-underline">
												Terms of Service.
											</a>
										</p>
										{subscriptionPackageCheckoutURL && (
											<Link to={subscriptionPackageCheckoutURL} className="btn theme-btn w-100">
												Proceed <i className="la la-arrow-right icon ml-1" />
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Checkout;
