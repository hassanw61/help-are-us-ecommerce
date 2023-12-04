import { useDispatch } from "react-redux";
import Breadcrumb from "../../../styles/BreadCrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { useToast } from "../../../store/hooks/useToast";
import { useState } from "react";
import { resetPassword } from "../../../actions/users";
import { handleFormDataInput } from "../../../utils/helpers";

const ResetPassword = () => {
	const dispatch = useDispatch();
	const { notify } = useToast();

	const queryParams = new URLSearchParams(location.search);
	const authToken = queryParams.get("token");

	const [formData, setFormData] = useState({});
	const [isFetchingApi, setIsFetchingApi] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsFetchingApi(true);
		dispatch(resetPassword({ formData: { token: authToken, password: formData?.password }, notify }));

		setIsFetchingApi(false);
	};

	return (
		<div className="fade-in">
			<Breadcrumb page="Recover Password" />
			<section className="contact-area section--padding position-relative">
				<span className="ring-shape ring-shape-1" />
				<span className="ring-shape ring-shape-2" />
				<span className="ring-shape ring-shape-3" />
				<span className="ring-shape ring-shape-4" />
				<span className="ring-shape ring-shape-5" />
				<span className="ring-shape ring-shape-6" />
				<span className="ring-shape ring-shape-7" />
				<div className="container">
					<div className="row">
						<div className="col-lg-7 mx-auto">
							<div className="card card-item">
								<div className="card-body">
									<h3 className="card-title fs-24 lh-35 pb-2">Reset Password!</h3>
									<p className="fs-15 lh-24 pb-3">
										Enter new password, Use a unique and secure password. Make sure to write it in a safe place.
									</p>
									<div className="section-block" />
									<form onSubmit={handleSubmit} className="pt-4">
										<div className="input-box">
											<label className="label-text">New Password</label>
											<div className="form-group">
												<input
													className="form-control form--control"
													type="password"
													placeholder="Enter New Password"
													name="password"
													value={formData?.password || ""}
													onChange={(e) => handleFormDataInput(e, setFormData)}
												/>
												<span className="la la-user input-icon" />
											</div>
										</div>

										<div className="btn-box">
											<button className="btn theme-btn" type="submit">
												Reset Password
												<i className="la la-arrow-right icon ml-1" />
											</button>
										</div>
									</form>
									<div className="btn-box">
										<div className="d-flex align-items-center justify-content-between fs-14 pt-2">
											<Link to="/login" className="text-color hover-underline">
												Login
											</Link>
											<p>
												Not a member?&nbsp;
												<Link to="/register" className="text-color hover-underline">
													Register
												</Link>
											</p>
										</div>
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

export default ResetPassword;
