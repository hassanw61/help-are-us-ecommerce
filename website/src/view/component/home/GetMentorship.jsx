import SectionHeading from "../../../styles/sectionHeading/SectionHeading";

const GetMentorship = () => {
	return (
		
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="about-content pb-5">
						<div className="section-heading">
							<SectionHeading title="Get Mentorship" text="INDIVIDUALS GO FAR TEAMS GO FARTHER COGNITIVE FEATS" />
							<p className="section__desc">
								We understand the transformative power of mentorship. It's not just about guidance; it's about igniting
								potential, fostering growth, and achieving remarkable results. Our mentorship programs are designed to
								provide individuals with the invaluable support and wisdom they need to excel in their sports endeavors,
								with a special focus on basketball referees.
							</p>
						</div>
					</div>
				</div>

				<div className="col-lg-5 ml-auto">
					<div className="generic-img-box">
						<img
							src="assets/img/mentor.jpeg"
							data-src="img/mentor.jpeg"
							alt="About image"
							className="img__item img__item-1 lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetMentorship;
