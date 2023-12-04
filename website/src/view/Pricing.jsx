import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "../store/hooks/useToast";
import { useEffect, useState } from "react";
import { getSubscriptions } from "../actions/subscriptions";
import { updateUser } from "../actions/users";
import Breadcrumb from "../styles/BreadCrumb/Breadcrumb";
import SectionHeading from "../styles/sectionHeading/SectionHeading";
import PricingCard from "../styles/cards/PricingCard";
import ActionModalWithAnimatedIcon from "../styles/modals/ActionModalWithAnimatedIcon";

const Pricing = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { notify } = useToast();

	const [formData, setFormData] = useState({});
	const [showUpdateSubscriptionModal, setShowUpdateSubscriptionModal] = useState(false);

	const page = 1;
	const limit = 100;

	const subscriptions = useSelector((state) => state?.subscriptions?.all || []);
	const user = useSelector((state) => state?.users?.userInfo || {});

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(getSubscriptions({ formData: { page: page, limit: limit }, notify }));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleUpdateUserSubscription = () => {
		dispatch(updateUser({ formData: { ...user, ...formData }, notify })).then((payload) => {
			if (payload) {
				navigate("/checkout", {
					state: {
						user: user,
						type: "subscription",
						subscription: formData?.subscription,
					},
				});
			}
		});
	};

	return (
		<>
			<div className="fade-in">
				<Breadcrumb page="Our Pricing" />
				<section className="package-area section--padding">
					<div className="container mb-50px">
						<div className="section-heading text-center">
							<SectionHeading title="Pricing" text="INDIVIDUALS GO FAR TEAMS GO FARTHER COGNITIVE FEATS" />
						</div>
					</div>
					<div className="container">
						<div className="row justify-content-center">
							{subscriptions?.length > 0 &&
								subscriptions.map((subscription, index) => (
									<div className="col-lg-4 responsive-column-half" key={index}>
										<PricingCard
											setFormData={setFormData}
											payload={subscription}
											setShowUpdateSubscriptionModal={setShowUpdateSubscriptionModal}
										/>
									</div>
								))}
						</div>
					</div>
				</section>
			</div>

			{showUpdateSubscriptionModal && (
				<ActionModalWithAnimatedIcon
					showModal={showUpdateSubscriptionModal}
					setShowModal={setShowUpdateSubscriptionModal}
					handleSubmit={handleUpdateUserSubscription}
					icon="cancel"
					title="Buy Subscription"
					heading="If you already have any subscription. It will be lost forever!"
					description="Continuing this, is a permanent action and cannot be undone. All associated data will also be permanently deleted."
				/>
			)}
		</>
	);
};

export default Pricing;
