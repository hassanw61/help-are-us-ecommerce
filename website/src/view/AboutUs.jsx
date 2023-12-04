import Breadcrumb from "../styles/BreadCrumb/Breadcrumb";
import SectionHeading from "../styles/sectionHeading/SectionHeading";
import Testimonial from "./component/home/Testimonial";
import Counter from "./component/home/counter";

const AboutUs = () => {
	return (
		<div className="fade-in">
			<Breadcrumb page="About Us" />
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
							</div>
						</div>

						<div className="col-lg-6 ml-auto">
							<div className="generic-img-box">
								<img src="assets/img/aa.jpg" alt="About image" className="img__item img__item-1 lazy" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Counter />
			<section className="our-mission-area section--padding background_whitesmoke">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className="img-box my-3">
								<img
									src="assets/img/vission.jpg"
									data-src="img/vission.jpg"
									alt="our mission image"
									className="img-fluid lazy rounded-rounded"
								/>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="about-content pl-4">
								<div className="section-heading">
									<SectionHeading
										title="Our Mission Vision"
										text="INDIVIDUALS GO FAR TEAMS GO FARTHER COGNITIVE FEATS"
									/>

									<p className="section__desc pb-3">
										At [Your Business Name], we believe that success in sports is not only about physical prowess but
										also about mental fortitude, discipline, and strategic thinking. Our mission is to inspire and
										empower individuals to reach their full potential both as athletes and as officials. We are
										dedicated to creating a positive and impactful experience for every individual we work with.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Testimonial />
		</div>
	);
};

export default AboutUs;
