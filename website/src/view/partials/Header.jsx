import { Link, NavLink } from "react-router-dom";
import "../../assets/css/Navbar.css";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/users";

const sidebarMenuList = [
	{
		title: "Home",
		path: "/",
		cName: "nav-text",
	},
	{
		title: "About Us",
		path: "/about",
		cName: "nav-text",
	},
	{
		title: "Motivational Speaking",
		path: "/motivational",
		cName: "nav-text",
	},
	{
		title: "Our Pricing",
		path: "/pricing",
		cName: "nav-text",
	},
	{
		title: "Mentoring",
		path: "/mentoring",
		cName: "nav-text",
	},
	{
		title: "Contact Us",
		path: "/contact",
		cName: "nav-text",
	},
];

const Header = () => {
	const dispatch = useDispatch();

	const [sidebar, setSidebar] = useState(false);
	const [showTopNav, setShowTopNav] = useState(true);
	const [scrollPosition, setScrollPosition] = useState(0);

	const showSidebar = () => setSidebar(!sidebar);

	const user = useSelector((state) => state?.users?.userInfo || {});

	useEffect(() => {
		const handleResize = () => {
			setShowTopNav(window.innerWidth > 1200);
			setSidebar(!window.innerWidth > 1200);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<>
			<header className="header-menu-area bg-white">
				<div
					className={`header-top pr-150px pl-150px border-bottom border-bottom-gray py-1 organge ${
						showTopNav ? "d-block " : "d-none"
					}`}>
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="header-widget">
									<ul className="generic-list-item d-flex flex-wrap align-items-center fs-14">
										<li className="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
											<i className="la la-phone mr-1" style={{ color: "white" }} />
											<a href="tel:1234567890" style={{ color: "white" }}>
												1234567890
											</a>
										</li>
										<li className="d-flex align-items-center">
											<i className="la la-envelope-o mr-1" style={{ color: "white" }} />
											<a href="mailto:cogfeats@gmail.com" style={{ color: "white" }}>
												cogfeats@gmail.com
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="header-widget d-flex flex-wrap align-items-center justify-content-end">
									{user?._id ? (
										<ul className="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
											<li className="d-flex align-items-center" style={{ borderRightColor: "white!important" }}>
												<button onClick={handleLogout}>Logout</button>
											</li>
											<li
												className="d-flex align-items-center pr-3 mr-3 border-right"
												style={{ borderRightColor: "white!important" }}>
												<i className="la la-sign-in mr-1" style={{ color: "white" }} />
												<Link to="/dashboard" style={{ color: "white" }}>
													Dashboard
												</Link>
											</li>
										</ul>
									) : (
										<ul className="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
											<li
												className="d-flex align-items-center pr-3 mr-3 border-right"
												style={{ borderRightColor: "white!important" }}>
												<i className="la la-sign-in mr-1" style={{ color: "white" }} />
												<Link to="/login" style={{ color: "white" }}>
													Login
												</Link>
											</li>
											<li className="d-flex align-items-center">
												<i className="la la-user mr-1" style={{ color: "white" }} />
												<Link to="/register" style={{ color: "white" }}>
													Register
												</Link>
											</li>
										</ul>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={`header-menu-content pr-150px pl-150px bg-white ${scrollPosition > 300 ? "fixed-top" : ""}`}>
					<div className="container-fluid">
						<div className="main-menu-content">
							<a onClick={() => setShowTopNav(!showTopNav)} className={`down-button ${showTopNav ? "active " : ""}`}>
								<i className="la la-angle-down" />
							</a>
							<div className="row align-items-center py-0 d-none d-xl-flex">
								<div className="col-lg-2">
									<div className="logo-box">
										<Link to="/" style={{ color: "#175E84" }} className="logo">
											<img
												src="assets/img/logo-cog.webp"
												className="w-100 mble_screen_height height_header"
												alt="logo"
											/>
										</Link>
										<div className="user-btn-action">
											<div
												className="off-canvas-menu-toggle main-menu-toggle icon-element icon-element-sm shadow-sm"
												data-toggle="tooltip"
												data-placement="top"
												title="Main menu">
												<i className="la la-bars" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-10">
									<div className="menu-wrapper">
										<nav className="main-menu">
											<ul>
												<li>
													<NavLink to="/">Home</NavLink>
												</li>
												<li>
													<NavLink to="/about">About Us</NavLink>
												</li>
												<li>
													<NavLink to="/motivational">Motivational Speaking</NavLink>
												</li>
												<li>
													<NavLink to="/pricing">Our Pricing </NavLink>
												</li>
												<li>
													<NavLink to="/mentoring">Mentoring </NavLink>
												</li>
											</ul>
										</nav>
										<div className="nav-right-button">
											<Link to="/contact" className="btn theme-btn d-none d-lg-inline-block">
												<i className="la la-user-plus mr-1" />
												contact us
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="d-block d-xl-none">
								<IconContext.Provider value={{ color: "#fff" }}>
									<div className="navbar d-flex justify-content-between py-0">
										<Link to="/" style={{ color: "#175E84" }} className="logo">
											<img
												src="assets/img/logo-cog.webp"
												className="w-100 mble_screen_height height_header"
												alt="logo"
											/>
										</Link>
										<Link to="#" className="menu-bars">
											<FaIcons.FaBars className="text-dark" onClick={showSidebar} />
										</Link>
									</div>
									<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
										<ul className="nav-menu-items" onClick={showSidebar}>
											<li className="navbar-toggle">
												<Link to="#" className="menu-bars">
													<AiIcons.AiOutlineClose className="text-dark " />
												</Link>
											</li>
											{sidebarMenuList.map((item, index) => {
												return (
													<li key={index} className={item.cName}>
														<Link to={item.path}>
															{item.icon}
															<span>{item.title}</span>
														</Link>
													</li>
												);
											})}
										</ul>
									</nav>
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>

				<div className={`body-overlay ${sidebar ? "active " : ""}`} />
			</header>
		</>
	);
};

export default Header;
