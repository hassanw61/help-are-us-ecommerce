import Breadcrumb from "../styles/BreadCrumb/Breadcrumb";
import GetMentorship from "./component/home/GetMentorship";

const Mentoring = () => {
	return (
		<div className="fade-in">
			<Breadcrumb page="Get Mentorship" />
			<section className="about-area section--padding overflow-hidden">
				<GetMentorship />
			</section>
		</div>
	);
};

export default Mentoring;
