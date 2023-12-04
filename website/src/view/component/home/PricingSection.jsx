import PricingCard from "../../../styles/cards/PricingCard";
import SectionHeading from "../../../styles/sectionHeading/SectionHeading";

const PricingSection = () => {
	return (
		<section className="package-area section--padding">
			<div className="container mb-50px">
				<div className="section-heading text-center">
					<SectionHeading title="Pricing" text="INDIVIDUALS GO FAR TEAMS GO FARTHER COGNITIVE FEATS" />
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 responsive-column-half">
						<PricingCard
							title="Umpire"
							pricePerMonth="9.99"
							features={[
								{ name: "Rules Test and Discussion", available: true },
								{ name: "Basic Mechanics & Floor Coverage", available: true },
								{ name: "Situational Officiating", available: true },
								{ name: "Community Discussion", available: true },
								{ name: "Community Events", available: true },
								{ name: "Community New", available: true },
							]}
						/>
					</div>
					<div className="col-lg-4 responsive-column-half">
						<PricingCard
							title="Referee"
							pricePerMonth="19.99"
							features={[
								{ name: "Umpire level", available: true },
								{ name: "1 hour per month video review", available: true },
								{ name: "personal career planning", available: true },
							]}
						/>
					</div>

					<div className="col-lg-4 responsive-column-half">
						<PricingCard
							title="Crew Chief"
							pricePerMonth="39.99"
							features={[
								{ name: "Referee Level", available: true },
								{ name: "up to 2 hours per month video review", available: true },
								{ name: "personal career planning", available: true },
								{ name: "(limited to 30 members)", available: true },
							]}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
