import SectionHeading from "../../../styles/sectionHeading/SectionHeading";

const ContactUs = () => {
	return (
		<section className="register-area section-padding  dot-bg overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="card card-item">
							<div className="card-body">
								<div className="divider">
									<span />
								</div>
								<form method="post">
									<div className="input-box">
										<label className="label-text">Name</label>
										<div className="form-group">
											<input className="form-control form--control" type="text" name="name" placeholder="Your Name" />
											<span className="la la-user input-icon ml-3" />
										</div>
									</div>

									<div className="input-box">
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

									<div className="input-box">
										<label className="label-text">Phone Number</label>
										<div className="form-group">
											<input
												className="form-control form--control"
												type="text"
												name="phone"
												placeholder="Phone Number"
											/>
											<span className="la la-phone input-icon" />
										</div>
									</div>

									<div className="input-box">
										<label className="label-text">Subject</label>
										<div className="form-group">
											<input className="form-control form--control" type="text" name="subject" placeholder="Subject" />
											<span className="la la-book input-icon" />
										</div>
									</div>

									<div className="btn-box pt-2">
										<button className="btn theme-btn" type="submit">
											Apply Now <i className="la la-arrow-right icon ml-1" />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className="col-lg-6 ml-auto align-self-center">
						<div className="register-content">
							<div className="section-heading">
								<SectionHeading
									title="Motivational Speaking"
									text="INDIVIDUALS GO FAR TEAMS GO FARTHER COGNITIVE FEATS"
								/>

								<p className="section__desc">
									In the journey towards achieving our goals, there are moments when the path ahead seems daunting, and
									our enthusiasm wanes. It's during these times that we must tap into the wellspring of motivation that
									lies within each of us.
								</p>
								<p className="section__desc">
									Understanding the deep-rooted reasons behind your goals is crucial. What is it that truly drives you?
									Is it the pursuit of excellence, a desire to help others, or a personal dream you've harbored for
									years? Your "why" is the compass that guides your journey.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
