const PricingCard = (props) => {
	return (
		<div className="card card-item package-item-active d-flex flex-column h-100">
			<div className="card-body d-flex flex-column h-100 ">
				<span className="package-tooltip ml-0">{props?.payload?.title}</span>
				<div className="package-price-box border-bottom border-bottom-gray pb-4 mb-4">
					<h3 className="fs-45 font-weight-semi-bold pb-2 text-center">
						<span>$</span>
						{props?.payload?.price}
						<sub>/{props?.payload?.duration}</sub>
					</h3>
				</div>
				<ul className="generic-list-item">
					<li>
						<i className="la la-check text-success mr-2" />
						Duration: {props?.payload?.duration}
					</li>
					<li>
						<i className="la la-check text-success mr-2" />
						Bi-weekly ({props?.payload?.weeklySessions}
						sessions)
					</li>
					<li>
						<i
							className={`la ${
								props?.payload?.features.rulesInterpretation ? "la-check text-success" : "la-close text-danger"
							}  mr-2`}
						/>
						Rules Interpretation
					</li>
					<li>
						<i
							className={`la ${
								props?.payload?.features.positionalTraining ? "la-check text-success" : "la-close text-danger"
							}  mr-2`}
						/>
						Positioning Training
					</li>
					<li>
						<i
							className={`la ${
								props?.payload?.features.gameAnalysisAndFeedback ? "la-check text-success" : "la-close text-danger"
							}  mr-2`}
						/>
						Game Analysis and Feedback
					</li>
					<li>
						<i
							className={`la ${
								props?.payload?.features.emailSupport ? "la-check text-success" : "la-close text-danger"
							}  mr-2`}
						/>
						Email Support for Questions
					</li>
					<li>
						<i className="fa fa-close me-2"></i> 9 Days Time
					</li>
				</ul>
				<div className="price-btn-box pt-30px mt-auto">
					<button
						className="btn  theme-btn w-100"
						onClick={() => {
							props?.setFormData({ subscription: { ...props?.payload, subscriptionPlanID: props?.payload?._id } });
							props?.setShowUpdateSubscriptionModal(true);
						}}>
						Buy Now <i className="la la-arrow-right icon ml-1" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
