import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<section className="footer-area padding_top background_whitesmoke mt-auto">
				<div className="container pb-50px">
					<div className="row">
						<div className="col-lg-3 responsive-column-half">
							<div className="footer-item">
								<Link to={"/"}>
									<img src="assets/img/logo-cog.png" alt="footer logo" className="footer__logo w-100 border_radius" />
								</Link>
							</div>
						</div>

						<div className="col-lg-3 responsive-column-half">
							<div className="footer-item">
								<h3 className="fs-20 font-weight-semi-bold">About Us</h3>
								<span className="section-divider section--divider" />
								<p>
									Welcome to COGNITIVE FEATS, where we specialize in providing top-notch motivational speaking and
									mentoring services tailored for sports enthusiasts, with a particular focus on basketball referees.
								</p>
							</div>
						</div>
						<div className="col-lg-3 responsive-column-half">
							<div className="footer-item">
								<h3 className="fs-20 font-weight-semi-bold">Useful Links</h3>
								<span className="section-divider section--divider" />
								<ul className="generic-list-item">
									<li>
										<Link to={"/"} className="text-black">
											Home
										</Link>
									</li>
									<li>
										<Link to={"/about"} className="text-black">
											About Us
										</Link>
									</li>
									<li>
										<Link to={"/motivational"} className="text-black">
											Motivational Speaking
										</Link>
									</li>
									<li>
										<Link to={"/pricing"} className="text-black">
											Our Pricing
										</Link>
									</li>
									<li>
										<Link to={"/mentoring"} className="text-black">
											Mentoring
										</Link>
									</li>
									<li>
										<Link to={"/contact"} className="text-black">
											Contact us
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 responsive-column-half">
							<div className="footer-item">
								<h3 className="fs-20 font-weight-semi-bold">Contact Information</h3>
								<span className="section-divider section--divider" />
								<ul className="generic-list-item">
									<li>
										<a href="tel:1234567890" style={{ color: "black" }}>
											1234567890
										</a>
									</li>
									<li>
										<a href="mailto:cogfeats@gmail.com" style={{ color: "black" }}>
											cogfeats@gmail.com
										</a>
									</li>
									<li style={{ color: "black" }}>House 1 Street 1 Country</li>
								</ul>
								<ul className="social-icons social-icons-styled">
									<li className="mr-1">
										<a href="#" className="facebook-bg">
											<i className="la la-facebook" />
										</a>
									</li>
									<li className="mr-1">
										<a href="#" className="twitter-bg">
											<i className="la la-twitter" />
										</a>
									</li>
									<li className="mr-1">
										<a href="#" className="instagram-bg">
											<i className="la la-instagram" />
										</a>
									</li>
									<li className="mr-1">
										<a href="#" className="linkedin-bg">
											<i className="la la-linkedin" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="section-block" />
				<div className="copyright-content py-2 organge">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12">
								<p className="text-center text-white">
									Copyright <i className="fa fa-copyright" />
									2023
									<a href="https://single-solution.com/" style={{ textDecoration: "underline", color: "white" }}>
										Single Solution
									</a>
									. All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
