import Breadcrumb from "../styles/BreadCrumb/Breadcrumb";
import ContactCard from "../styles/cards/ContactCard";

const ContactUs = () => {
	return (
		<div className="fade-in">
			<Breadcrumb page="Contact Us" />
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
						<div className="col-lg-4 responsive-column-half">
							<ContactCard title={"Our Location"} text={"House 1 Street 1 Country"} locationIcon={true} />
						</div>

						<div className="col-lg-4 responsive-column-half">
							<ContactCard
								className={"bg_blue"}
								title={"Email Us"}
								text={"cogfeats@gmail.com"}
								mail={"mailto:cogfeats@gmail.com"}
								mailIcon={true}
							/>
						</div>

						<div className="col-lg-4 responsive-column-half">
							<ContactCard title={"Call Us"} phone={"1234567890"} phoneIcon={true} />
						</div>
					</div>

					<div className="row align-items-center pt-30px">
						<div className="col-lg-5">
							<div className="contact-content pb-5">
								<div className="section-heading">
									<h2 className="section__title pb-3">We'd love to hear from you</h2>
								</div>

								<ul className="social-icons social-icons-styled social--icons-styled pt-30px">
									<li>
										<a href="#">
											<i className="la la-facebook" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="la la-twitter" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="la la-instagram" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="la la-youtube" />
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-7">
							<div className="card card-item">
								<div className="card-body">
									<form action="./final_emails/email/mail.php" method="post">
										<div className="alert alert-success contact-success-message" role="alert">
											Thank You! Your message has been sent.
										</div>
										<div className="input-box">
											<label className="label-text">Your Name</label>
											<div className="form-group">
												<input
													id="name"
													className="form-control form--control"
													type="text"
													name="name"
													placeholder="Your name"
												/>
												<span className="la la-user input-icon" />
											</div>
										</div>
										{/* end input-box */}
										<div className="input-box">
											<label className="label-text">Email Address</label>
											<div className="form-group">
												<input
													id="email"
													className="form-control form--control"
													type="email"
													name="email"
													placeholder="Enter email address"
												/>
												<span className="la la-envelope input-icon" />
											</div>
										</div>
										{/* end input-box */}
										<div className="input-box">
											<label className="label-text">Message</label>
											<div className="form-group">
												<textarea
													id="message"
													className="form-control form--control pl-4"
													name="message"
													rows={5}
													placeholder="Write message"
													defaultValue={""}
												/>
											</div>
										</div>
										{/* end input-box */}
										<div className="btn-box">
											<button id="send-message-btn" name="send" className="btn theme-btn" type="submit">
												Send Message
											</button>
										</div>
										{/* end btn-box */}
									</form>
								</div>
								{/* end card-body */}
							</div>
							{/* end card */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
