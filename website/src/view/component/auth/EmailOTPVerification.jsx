import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import PinField from "react-pin-field";
import { logoutUser, sendUserVerificationEmail, verifyUserEmailByOTP } from "../../../actions/users";
import { useToast } from "../../../store/hooks/useToast";

const EmailOTPVerification = () => {
	const dispatch = useDispatch();
	const { notify } = useToast();
	const pinRef = useRef(null);

	const [isSendingEmail, setIsSendingEmail] = useState(false); // New loading state
	const [isCorrectPin, setIsCorrectPin] = useState(null);

	const user = useSelector((state) => state?.users?.userInfo || {});

	useEffect(() => {
		if (user?._id) sendEmailOTP();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const sendEmailOTP = async () => {
		setIsSendingEmail(true); // Set loading state before sending
		dispatch(sendUserVerificationEmail({ notify })).then(() => {
			setIsSendingEmail(false); // Reset loading state when the process is complete
		});
	};

	const VerifyOTP = (pin) => {
		dispatch(verifyUserEmailByOTP({ formData: { otp: pin }, notify }));
	};

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	// const LoadingComponent = <div className="signup-screen-single" style={{ minHeight: "400px" }}></div>;

	return (
		<>
			<section className="gray vh-50">
				<div className="container my-5">
					<div className="row justify-content-center">
						<div className="col-md-8 col-xl-5 col-xxl-4">
							<div className="signup-screen-wrap rounded-4">
								
								<div className="signup-screen-single">
									<div className="text-center mb-4">
										<h4 className="m-0 ft-medium opt-title">{isSendingEmail ? "" : "Please verify your account."}</h4>
									</div>
									<div className="row">
										<div className="col-12">
											<p className={"opt-text text-center"}>
												{isSendingEmail ? "Sending Email" : "If email not received check in spam emails"}
											</p>
											<div className=" text-center py-2">
												<p className={"opt-text pb-4"}> {isSendingEmail ? "" : "Enter OTP here"}</p>
												<div
													className={`flex items-center justify-center ${
														isCorrectPin === "invalid" && "bounce animated"
													}`}
												>
													{isSendingEmail ? (
														<div
															className="spinner-border"
															role="status"
															style={{ marginTop: "40px", marginBottom: "40px" }}
														>
															<span className="sr-only">Loading...</span>
														</div>
													) : (
														<PinField
															className={`otp-fields m-1 text-center  ${
																isCorrectPin === "invalid" && "invalid-field"
															}`}
															onComplete={(pin) => VerifyOTP(pin)}
															onChange={() => setIsCorrectPin(null)}
															ref={pinRef}
															onRejectKey={() => setIsCorrectPin("invalid")}
															length={6}
															validate="0123456789"
															autoFocus
														/>
													)}
												</div>

												{isCorrectPin === "invalid" && (
													<p className={"text-center text-sm"} style={{ color: "rgb(220 38 38)" }}>
														The Pin you have entered is invalid!
													</p>
												)}
											</div>
											<div className="form-group text-center mt-4 mb-0">
												<p className="mb-0">
													{isSendingEmail ? (
														""
													) : (
														<span>
															Don’t Received OTP Yet?{" "}
															<a
																onClick={() => {
																	sendEmailOTP();
																}}
																className="ft-medium text-danger cursor-pointer"
															>
																Resend
															</a>
														</span>
													)}
												</p>
											</div>
											<div className="row justify-content-center mt-2">
												<div className="col-sm-4 mt-3 mt-sm-0">
													{isSendingEmail ? (
														""
													) : (
														<button
															onClick={handleLogout}
															className="btn full-width py-1 theme-bg text-light fs-md rounded-5"
														>
															Logout
														</button>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default EmailOTPVerification;
