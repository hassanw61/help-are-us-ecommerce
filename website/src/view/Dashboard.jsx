import { useEffect, useState } from "react";
import DashboardHeader from "./component/dashboard/DashboardHeader";
import UserStats from "./component/dashboard/UserStats";
import MemberChatGroup from "./component/dashboard/MemberChatGroup.jsx";
import ChatWithAdmin from "./component/dashboard/ChatWithAdmin.jsx";
import DiscoverBoard from "./component/dashboard/DiscoverBoard.jsx";
import Profile from "./component/dashboard/Profile.jsx";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./component/dashboard/SidebarData";
import "../assets/css/Navbar.css";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptions } from "../actions/subscriptions.js";
import { useToast } from "../store/hooks/useToast.js";
// import EmailOTPVerification from "./component/auth/emailOTPVerification.jsx";

const Dashboard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { notify } = useToast();
	const showSidebar = () => setSidebar(!sidebar);

	const [sidebar, setSidebar] = useState(false);
	const [currentComponent, setCurrentComponent] = useState("UserStats");
	const [currentSubscription, setCurrentSubscription] = useState({});
	const [isUserSubscriptionPaid, setIsUserSubscriptionPaid] = useState(false);
	const [isFetchingAndVerifyingUser, setIsFetchingAndVerifyingUser] = useState(true);

	const user = useSelector((state) => state?.users?.userInfo || {});
	const subscriptions = useSelector((state) => state?.subscriptions?.all || []);

	useEffect(() => {
		dispatch(getSubscriptions({ formData: { page: 1, limit: 100 }, notify }));

		const handleResize = () => {
			setSidebar(!window.innerWidth > 1200);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (subscriptions?.length && user?._id) {
			// getUserVerificationAndPaymentStatus();

			setCurrentSubscription(
				subscriptions.find((subscription) => subscription._id === user?.subscription?.subscriptionPlanID),
			);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subscriptions, user]);

	const renderCurrentComponent = () => {
		switch (currentComponent) {
			case "UserStats":
				return <UserStats />;
			case "MemberChatGroup":
				return <MemberChatGroup />;
			case "ChatWithAdmin":
				return <ChatWithAdmin />;
			case "DiscoverBoard":
				return <DiscoverBoard />;
			case "Profile":
				return <Profile />;

			default:
				return null;
		}
	};

	const getUserVerificationAndPaymentStatus = () => {
		if (user?.subscription?.subscriptionPlanID) {
			if (
				(user?.subscription?.paymentStatus === "paid" && user?.subscription?.isActive) ||
				user?.subscription?.isActiveByAdmin ||
				user?.subscription?.duration === "lifetime" ||
				new Date(user?.subscription?.expiryDate) > new Date()
			) {
				setIsUserSubscriptionPaid(true);
				// dispatch(
				// 	getUserMessageNotifications({
				// 		formData: { page: 1, limit: 10000, userID: user._id, notificationType: "message", messageIsRead: false },
				// 		notify,
				// 	}),
				// );
				// dispatch(
				// 	getUserNotifications({
				// 		formData: { page: 1, limit: 10000, userID: user._id, isRead: false },
				// 		notify,
				// 	}),
				// );
			} else {
				navigate("/checkout", {
					state: {
						user: user,
						type: "subscription",
						subscription: currentSubscription,
					},
				});
			}
		} else {
			navigate("/pricing");
		}

		setIsFetchingAndVerifyingUser(false);
	};

	return (
		<div className="fade-in">
			<div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
				<DashboardHeader currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
				{isUserSubscriptionPaid && !user?.isVerified?.status ? (
					// <EmailOTPVerification />
					<></>
				) : (
					<section className="dashboard-area">
						<div className="dashboard-content-wrap">
							<div className="d-block d-xl-none">
								<IconContext.Provider value={{ color: "#fff" }}>
									<div className="navbar">
										<Link to="#" className="menu-bars ml-0">
											<div
												onClick={showSidebar}
												className="dashboard-menu-toggler btn theme-btn theme-btn-sm lh-28 theme-btn-transparent mb-4">
												<i className="la la-bars mr-1" /> Dashboard Nav
											</div>
										</Link>
									</div>
									<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
										<ul className="nav-menu-items" onClick={showSidebar}>
											<li className="navbar-toggle">
												<Link to="#" className="menu-bars text-end">
													<AiIcons.AiOutlineClose className="text-dark" />
												</Link>
											</li>
											{SidebarData.map((item, index) => {
												return (
													<li key={index} className={item.cName}>
														<Link
															to={item.path === "logout" ? "/" : ""}
															onClick={() => setCurrentComponent(item.path)}
															style={{ color: currentComponent === item.path ? "#2478B8" : "" }}>
															<i className={`fa ${item.icon}`} />
															<span>{item.title}</span>
														</Link>
													</li>
												);
											})}
										</ul>
									</nav>
								</IconContext.Provider>
							</div>
							<div className={`body-overlay ${sidebar ? "active " : ""}`} />
							<div className="container-fluid d-flex flex-column" style={{ minHeight: "99%" }}>
								<div className="section-block mb-5" />
								{renderCurrentComponent()}

								<div className="row align-items-center dashboard-copyright-content py-2 organge mt-auto">
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
				)}
			</div>
		</div>
	);
};

export default Dashboard;
