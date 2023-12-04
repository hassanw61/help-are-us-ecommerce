import Slider from "../styles/slider/Slider";
import Counter from "./component/home/counter";
import ContactUs from "./component/home/ContactUs";
import GetMentorship from "./component/home/GetMentorship";
import SectionHeading from "../styles/sectionHeading/SectionHeading";
import Testimonial from "./component/home/Testimonial";
import PricingSection from "./component/home/PricingSection";
const Home = () => {
	return (
		<div className="fade-in">
			<div className="container-fluid px-0">
				<Slider />
			</div>

			<section className="about-area section--padding overflow-hidden">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="about-content pb-5">
								<div className="section-heading">
									<SectionHeading title="COGNITIVE FEATS" text="INDIVIDUALS GO FAR TEAMS GO FARTHER COGNITIVE FEATS" />
									<p className="section__desc">
										Are you looking to elevate your performance on the court? Do you seek guidance and inspiration to
										excel in the world of sports officiating? Welcome to COGNITIVE FEATS, where we specialize in
										providing top-notch motivational speaking and mentoring services tailored for sports enthusiasts,
										with a particular focus on basketball referees.
									</p>
								</div>

								<div className="btn-box mt-3">
									<a className="btn theme-btn text-white">
										Read More <i className="la la-arrow-right icon ml-1" />
									</a>
								</div>
							</div>
						</div>

						<div className="col-lg-5 ml-auto">
							<div className="generic-img-box">
								<img
									src="assets/img/about_us.png"
									data-src="img/about_us.png"
									alt="About image"
									className="img__item img__item-1 lazy"
								/>
								<img
									src="assets/img/about.jpg"
									data-src="img/about.jpg"
									alt="About image"
									className="img__item img__item-2 lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Counter />

			<ContactUs />

			<section className="cat-area pt-100px pb-100px img-bg">
				<div className="overlay" /> <span className="ring-shape ring-shape-1" /> <span className="ring-shape ring-shape-2" />
				<span className="ring-shape ring-shape-3" /> <span className="ring-shape ring-shape-4" />
				<span className="ring-shape ring-shape-5" /> <span className="ring-shape ring-shape-6" />
				<span className="ring-shape ring-shape-7" />
				<div className="container">
					<div className="cta-content-wrap text-center position-relative">
						<div className="section-heading">
							<h2 className="section__title fs-40 lh-60 text-white">
								"Empowering Athletes, Empowering Referees, Empowering Success"
							</h2>
						</div>

						<div className="cat-btn-box mt-35px">
							<a className="btn theme-btn theme-btn-white">
								Get Started <i className="la la-arrow-right icon ml-1" />
							</a>
						</div>
					</div>
				</div>
			</section>

			<PricingSection />

			<section className="about-area section--padding overflow-hidden background_whitesmoke">
				<GetMentorship />
			</section>

			<Testimonial />
		</div>
	);
};

export default Home;
