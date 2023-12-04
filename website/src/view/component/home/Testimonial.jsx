import SectionHeading from "../../../styles/sectionHeading/SectionHeading";
import TestimonialSlider from "../../../styles/slider/TestimonialSlider";

const Testimonial = () => {
	return (
		<section className="testimonial-area section--padding">
			<div className="container">
				<div className="section-heading text-center">
					<SectionHeading title="Customer Feedback" text="INDIVIDUALS GO FAR TEAMS GO FARTHER COGNITIVE FEATS" />
				</div>

				<TestimonialSlider />
			</div>
		</section>
	);
};

export default Testimonial;
