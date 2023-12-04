import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../actions/users";

const dashboardHeader = (props) => {
	const dispatch = useDispatch();

	const setCurrentComponent = props?.setCurrentComponent;
	const currentComponent = props?.currentComponent;

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<>
			<header className="header-menu-area">
				<div className="header-menu-content dashboard-menu-content pr-30px pl-30px bg-white shadow-sm">
					<div className="container-fluid">
						<div className="main-menu-content">
							<div className="row align-items-center">
								<div className="col-lg-12">
									<div className="logo-box logo--box">
										<Link to="/" className="logo">
											<img src="assets/img/logo-cog.jpeg" className="w-100 mble_screen_height" alt="logo" />
										</Link>
									</div>

									<div className="menu-wrapper">
										<div className="nav-right-button d-flex align-items-center">
											<div className="user-action-wrap d-flex align-items-center">
												<div className="shop-cart user-profile-cart">
													<ul>
														<li>
															<div className="shop-cart-btn">
																<div className="avatar-xs">
																	<img
																		className="rounded-full w-100 w-100"
																		src="assets/images/small-avatar-1.jpg"
																		alt="Avatar image"
																	/>
																</div>
																<span className="dot-status bg-1" />
															</div>
															<ul className="cart-dropdown-menu after-none p-0 notification-dropdown-menu">
																<li className="menu-heading-block d-flex align-items-center">
																	<a className="avatar-sm flex-shrink-0 d-block">
																		<img
																			className="rounded-full img-fluid"
																			src="assets/images/small-avatar-1.jpg"
																			alt="Avatar image"
																		/>
																	</a>
																	<div className="ml-2">
																		<h4>
																			<a className="text-black">Alex Smith</a>
																		</h4>
																		<span className="d-block fs-14 lh-20">info@gmail.com</span>
																	</div>
																</li>
																<li>
																	<ul className="generic-list-item">
																		<li>
																			<button onClick={() => handleLogout()}>
																				<i className="la la-power-off mr-1" /> Logout
																			</button>
																		</li>
																		<li>
																			<div className="section-block" />
																		</li>
																	</ul>
																</li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="off-canvas-menu custom-scrollbar-styled main-off-canvas-menu">
					<div
						className="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
						data-toggle="tooltip"
						data-placement="left"
						title=""
						data-original-title="Close menu">
						<i className="la la-times" />
					</div>

					<h4 className="off-canvas-menu-heading pt-90px">
						<a href="course.php">My Course</a>
					</h4>
					<h4 className="off-canvas-menu-heading pt-10px">
						<a href="profile.php">My Course</a>
					</h4>
					<h4 className="off-canvas-menu-heading pt-10px">
						<a href="index.php">Logout</a>
					</h4>
				</div>
			</header>

			<div className="off-canvas-menu dashboard-off-canvas-menu off--canvas-menu custom-scrollbar-styled pt-20px">
				<div
					className="off-canvas-menu-close dashboard-menu-close icon-element icon-element-sm shadow-sm"
					data-toggle="tooltip"
					data-placement="left"
					title=""
					data-original-title="Close menu">
					<i className="la la-times" />
				</div>

				<div className="logo-box px-4">
					<Link to="/" className="logo" style={{ color: "#233d63" }}>
						<img src="assets/img/logo-cog.jpeg" style={{ height: 130 }} className="w-100 mble_screen_height" alt="logo" />
					</Link>
				</div>
				<ul className="generic-list-item off-canvas-menu-list off--canvas-menu-list pt-35px">
					<li>
						<Link
							onClick={() => setCurrentComponent("UserStats")}
							style={{ color: currentComponent === "UserStats" ? "#2478B8" : "" }}>
							<svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
							</svg>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setCurrentComponent("MemberChatGroup")}
							style={{ color: currentComponent === "MemberChatGroup" ? "#2478B8" : "" }}>
							<svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
							</svg>
							Member Chat Group
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setCurrentComponent("ChatWithAdmin")}
							style={{ color: currentComponent === "ChatWithAdmin" ? "#2478B8" : "" }}>
							<svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
							</svg>
							Private Chat With Admin
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setCurrentComponent("DiscoverBoard")}
							style={{ color: currentComponent === "DiscoverBoard" ? "#2478B8" : "" }}>
							<svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
							</svg>
							Discover Board
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setCurrentComponent("Profile")}
							style={{ color: currentComponent === "Profile" ? "#2478B8" : "" }}>
							<svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
							</svg>
							Profile
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default dashboardHeader;
