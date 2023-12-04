import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "../../../store/hooks/useToast";
import { getBlogs } from "../../../actions/blogs";

const DiscoverBoard = () => {
	const dispatch = useDispatch();
	const { notify } = useToast();

	const page = 1;
	const limit = 100;

	const blogs = useSelector((state) => state?.blogs?.all || []);
	useEffect(() => {
		window.scrollTo(0, 0);

		dispatch(getBlogs({ formData: { page: page, limit: limit }, notify }));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="fade-in">
			<section className="blog-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 mb-5">
							<div className="card card-item">
								<div className="mtext-center">
									<img
										src="assets/img/3x.jpg"
										data-src="assets/img/img1.jpg"
										alt="blog-img"
										className="img-fluid rounded-rounded w-100 lazy"
									/>
								</div>
								<div className="card-body">
									<h3 className="fs-20 font-weight-semi-bold">Content</h3>
									<p className="card-text pb-3">
										Investig ationes demons trave runt lectores legere liusry quod ii legunt saepius claritas Investig
										ationes. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus viverra nisl vitae cursus aei
										uismod suspendisse saepius claritas investig. Lorem ipsum dolor sit amet, consectet adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magnag aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laborinu aliquip ex ea commodo consequat. Du aute irure dolor in
										reprehenderit inlore voluptate velit esse cillum dolore. Cras eget sollicitudin lorem.
									</p>
									<div className="section-block" />
									<div className="d-flex flex-wrap justify-content-left align-items-center pt-3">
										<div className="share-wrap">
											<div
												className="icon-element icon-element-sm shadow-sm pt-2"
												title="Toggle to expand social icons">
												<i className="la la-heart">
													<span>50</span>
												</i>
											</div>
										</div>
										<div className="share-wrap ml-3">
											<div
												className="icon-element icon-element-sm shadow-sm pt-2"
												title="Toggle to expand social icons">
												<i className="la la-comment-dots">12</i>
											</div>
										</div>
									</div>
									<div className="comments-wrap pt-5" id="comments">
										<div className="d-flex align-items-center justify-content-between pb-4">
											<h3 className="fs-22 font-weight-semi-bold">Comments</h3>
										</div>
										<div className="comment-list">
											<div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
												<div className="media-img mr-4 rounded-full">
													<img
														className="rounded-full lazy"
														src="assets/images/small-avatar-1.jpg"
														data-src="assets/images/small-avatar-1.jpg"
														alt="User image"
													/>
												</div>
												<div className="media-body">
													<h5 className="pb-2">Kavi arasan</h5>
													<span className="d-block lh-18 pb-2">Info@gmail.com</span>
													<p className="pb-3">
														This is one of the best courses I have taken in Udemy. It is very complete, and it has
														made continue learning about Java and SQL databases as well.
													</p>
												</div>
											</div>

											<div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
												<div className="media-img mr-4 rounded-full">
													<img
														className="rounded-full lazy"
														src="assets/images/small-avatar-1.jpg"
														data-src="assets/images/small-avatar-1.jpg"
														alt="User image"
													/>
												</div>
												<div className="media-body">
													<h5 className="pb-2">Kavi arasan</h5>
													<span className="d-block lh-18 pb-2">Info@gmail.com</span>
													<p className="pb-3">
														This is one of the best courses I have taken in Udemy. It is very complete, and it has
														made continue learning about Java and SQL databases as well.
													</p>
													<div className="helpful-action d-flex align-items-center justify-content-between">
														<a
															className="btn theme-btn theme-btn-sm theme-btn-transparent lh-30"
															href="#"
															data-toggle="modal"
															data-target="#replyModal">
															<i className="la la-reply mr-1" /> Reply
														</a>
													</div>
												</div>
											</div>

											<div className="media media-card border-bottom border-bottom-gray pb-4 mb-4 review-reply">
												<div className="media-img mr-4 rounded-full">
													<img
														className="rounded-full lazy"
														src="assets/images/small-avatar-2.jpg"
														data-src="assets/images/small-avatar-2.jpg"
														alt="User image"
													/>
												</div>
												<div className="media-body">
													<h5 className="pb-2">Jitesh Shaw</h5>
													<span className="d-block lh-18 pb-2">Info@gmail.com</span>
													<p className="pb-3">
														This is one of the best courses I have taken in Udemy. It is very complete, and it has
														made continue learning about Java and SQL databases as well.
													</p>
													<div className="helpful-action d-flex align-items-center justify-content-between">
														<a
															className="btn theme-btn theme-btn-sm theme-btn-transparent lh-30"
															href="#"
															data-toggle="modal"
															data-target="#replyModal">
															<i className="la la-reply mr-1" /> Reply
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="add-comment-wrap pt-5 p-5">
									<h3 className="fs-22 font-weight-semi-bold pb-4">Add a Comment</h3>
									<form method="post" className="row">
										<div className="input-box col-lg-6">
											<label className="label-text">Name</label>
											<div className="form-group">
												<input
													className="form-control form--control"
													type="text"
													name="name"
													placeholder="Your Name"
												/>
												<span className="la la-user input-icon" />
											</div>
										</div>

										<div className="input-box col-lg-6">
											<label className="label-text">Email</label>
											<div className="form-group">
												<input
													className="form-control form--control"
													type="email"
													name="email"
													placeholder="Email Address"
												/>
												<span className="la la-envelope input-icon" />
											</div>
										</div>

										<div className="input-box col-lg-12">
											<label className="label-text">Message</label>
											<div className="form-group">
												<textarea
													className="form-control form--control pl-3"
													name="message"
													placeholder="Write Message"
													rows={5}
													defaultValue={""}
												/>
											</div>
										</div>

										<div className="btn-box col-lg-12">
											<button className="btn theme-btn" type="submit">
												Submit Comment
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-8 mb-5">
							<div className="card card-item">
								<div className="mtext-center">
									<video src="assets/img/about_dcs_compressed.mp4" className="w-100" controls="" />
								</div>
								<div className="card-body">
									<h3 className="fs-20 font-weight-semi-bold">Content</h3>
									<p className="card-text pb-3">
										Investig ationes demons trave runt lectores legere liusry quod ii legunt saepius claritas Investig
										ationes. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus viverra nisl vitae cursus aei
										uismod suspendisse saepius claritas investig. Lorem ipsum dolor sit amet, consectet adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magnag aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laborinu aliquip ex ea commodo consequat. Du aute irure dolor in
										reprehenderit inlore voluptate velit esse cillum dolore. Cras eget sollicitudin lorem.
									</p>
									<div className="section-block" />
									<div className="d-flex flex-wrap justify-content-left align-items-center pt-3">
										<div className="share-wrap">
											<div
												className="icon-element icon-element-sm shadow-sm pt-2"
												title="Toggle to expand social icons">
												<i className="la la-heart">
													<span>50</span>
												</i>
											</div>
										</div>
										<div className="share-wrap ml-3">
											<div
												className="icon-element icon-element-sm shadow-sm pt-2"
												title="Toggle to expand social icons">
												<i className="la la-comment-dots">12</i>
											</div>
										</div>
									</div>
									<div className="comments-wrap pt-5" id="comments">
										<div className="d-flex align-items-center justify-content-between pb-4">
											<h3 className="fs-22 font-weight-semi-bold">Comments</h3>
										</div>
										<div className="comment-list">
											<div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
												<div className="media-img mr-4 rounded-full">
													<img
														className="rounded-full lazy"
														src="assets/images/small-avatar-1.jpg"
														data-src="assets/images/small-avatar-1.jpg"
														alt="User image"
													/>
												</div>
												<div className="media-body">
													<h5 className="pb-2">Kavi arasan</h5>
													<span className="d-block lh-18 pb-2">a month ago</span>
													<p className="pb-3">
														This is one of the best courses I have taken in Udemy. It is very complete, and it has
														made continue learning about Java and SQL databases as well.
													</p>
												</div>
											</div>

											<div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
												<div className="media-img mr-4 rounded-full">
													<img
														className="rounded-full lazy"
														src="assets/images/small-avatar-1.jpg"
														data-src="assets/images/small-avatar-1.jpg"
														alt="User image"
													/>
												</div>
												<div className="media-body">
													<h5 className="pb-2">Kavi arasan</h5>
													<span className="d-block lh-18 pb-2">a month ago</span>
													<p className="pb-3">
														This is one of the best courses I have taken in Udemy. It is very complete, and it has
														made continue learning about Java and SQL databases as well.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="add-comment-wrap pt-5 p-5">
									<h3 className="fs-22 font-weight-semi-bold pb-4">Add a Comment</h3>
									<form method="post" className="row">
										<div className="input-box col-lg-6">
											<label className="label-text">Name</label>
											<div className="form-group">
												<input
													className="form-control form--control"
													type="text"
													name="name"
													placeholder="Your Name"
												/>
												<span className="la la-user input-icon" />
											</div>
										</div>

										<div className="input-box col-lg-6">
											<label className="label-text">Email</label>
											<div className="form-group">
												<input
													className="form-control form--control"
													type="email"
													name="email"
													placeholder="Email Address"
												/>
												<span className="la la-envelope input-icon" />
											</div>
										</div>

										<div className="input-box col-lg-12">
											<label className="label-text">Message</label>
											<div className="form-group">
												<textarea
													className="form-control form--control pl-3"
													name="message"
													placeholder="Write Message"
													rows={5}
													defaultValue={""}
												/>
											</div>
										</div>

										<div className="btn-box col-lg-12">
											<button className="btn theme-btn" type="submit">
												Submit Comment
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-8 mb-5">
							<div className="card card-item">
								<div className="mtext-center">
									<img
										src="assets/img/3x.jpg"
										data-src="assets/img/img1.jpg"
										alt="blog-img"
										className="img-fluid rounded-rounded w-100 lazy"
									/>
								</div>
								<div className="card-body">
									<h3 className="fs-20 font-weight-semi-bold">Content</h3>
									<p className="card-text pb-3">
										Investig ationes demons trave runt lectores legere liusry quod ii legunt saepius claritas Investig
										ationes. Pharetra dui, nec tincidunt ante mauris eu diam. Phasellus viverra nisl vitae cursus aei
										uismod suspendisse saepius claritas investig. Lorem ipsum dolor sit amet, consectet adipiscing elit,
										sed do eiusmod tempor incididunt ut labore et dolore magnag aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laborinu aliquip ex ea commodo consequat. Du aute irure dolor in
										reprehenderit inlore voluptate velit esse cillum dolore. Cras eget sollicitudin lorem.
									</p>
									<div className="d-flex flex-wrap justify-content-left align-items-center pt-3">
										<div className="share-wrap">
											<div
												className="icon-element icon-element-sm shadow-sm pt-2"
												title="Toggle to expand social icons">
												<i className="la la-heart">
													<span>50</span>
												</i>
											</div>
										</div>
										<div className="share-wrap ml-3">
											<div
												className="icon-element icon-element-sm shadow-sm pt-2"
												title="Toggle to expand social icons">
												<i className="la la-comment-dots">12</i>
											</div>
										</div>
									</div>
									<div className="comments-wrap pt-5" id="comments">
										<div className="d-flex align-items-center justify-content-between pb-4">
											<h3 className="fs-22 font-weight-semi-bold">Comments</h3>
										</div>
										<div className="comment-list">
											<div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
												<div className="media-img mr-4 rounded-full">
													<img
														className="rounded-full lazy"
														src="assets/images/small-avatar-1.jpg"
														data-src="assets/images/small-avatar-1.jpg"
														alt="User image"
													/>
												</div>
												<div className="media-body">
													<h5 className="pb-2">Kavi arasan</h5>
													<span className="d-block lh-18 pb-2">a month ago</span>
													<p className="pb-3">
														This is one of the best courses I have taken in Udemy. It is very complete, and it has
														made continue learning about Java and SQL databases as well.
													</p>
												</div>
											</div>

											<div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
												<div className="media-img mr-4 rounded-full">
													<img
														className="rounded-full lazy"
														src="assets/images/small-avatar-1.jpg"
														data-src="assets/images/small-avatar-1.jpg"
														alt="User image"
													/>
												</div>
												<div className="media-body">
													<h5 className="pb-2">Kavi arasan</h5>
													<span className="d-block lh-18 pb-2">a month ago</span>
													<p className="pb-3">
														This is one of the best courses I have taken in Udemy. It is very complete, and it has
														made continue learning about Java and SQL databases as well.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="add-comment-wrap pt-5 p-5">
									<h3 className="fs-22 font-weight-semi-bold pb-4">Add a Comment</h3>
									<form method="post" className="row">
										<div className="input-box col-lg-6">
											<label className="label-text">Name</label>
											<div className="form-group">
												<input
													className="form-control form--control"
													type="text"
													name="name"
													placeholder="Your Name"
												/>
												<span className="la la-user input-icon" />
											</div>
										</div>

										<div className="input-box col-lg-6">
											<label className="label-text">Email</label>
											<div className="form-group">
												<input
													className="form-control form--control"
													type="email"
													name="email"
													placeholder="Email Address"
												/>
												<span className="la la-envelope input-icon" />
											</div>
										</div>

										<div className="input-box col-lg-12">
											<label className="label-text">Message</label>
											<div className="form-group">
												<textarea
													className="form-control form--control pl-3"
													name="message"
													placeholder="Write Message"
													rows={5}
													defaultValue={""}
												/>
											</div>
										</div>

										<div className="btn-box col-lg-12">
											<button className="btn theme-btn" type="submit">
												Submit Comment
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DiscoverBoard;
