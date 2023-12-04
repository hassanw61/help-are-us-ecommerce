import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "./view/partials/Header";
import Footer from "./view/partials/Footer";
import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "./store/hooks/useToast";
import { getUser, verifyUserLogin } from "./actions/users";

const LazyComponents = {
	Home: lazy(() => import("./view/Home")),
	AboutUs: lazy(() => import("./view/AboutUs")),
	MotivationalSpeaking: lazy(() => import("./view/MotivationalSpeaking")),
	Pricing: lazy(() => import("./view/Pricing")),
	Mentoring: lazy(() => import("./view/Mentoring")),
	ContactUs: lazy(() => import("./view/ContactUs")),
	Register: lazy(() => import("./view/component/auth/Register")),
	Login: lazy(() => import("./view/component/auth/Login")),
	ForgotPassword: lazy(() => import("./view/component/auth/ForgotPassword")),
	ResetPassword: lazy(() => import("./view/component/auth/ResetPassword")),
	Dashboard: lazy(() => import("./view/Dashboard")),
	Checkout: lazy(() => import("./view/Checkout")),
	NotFound: lazy(() => import("./view/Error404")),
};
const LoadingComponent = (
	<div className="preloader">
		<div className="loader">
			<svg className="spinner" viewBox="0 0 50 50">
				<circle className="path" cx={25} cy={25} r={20} fill="none" strokeWidth={5} />
			</svg>
		</div>
	</div>
);

const ProtectedRoute = ({ authStatus }) => {
	return authStatus === true ? <Outlet /> : authStatus === false ? <Navigate to="/login" /> : null;
};

const GuestRoute = ({ authStatus }) => {
	return authStatus === true ? <Navigate to="/dashboard" /> : authStatus === false ? <Outlet /> : null;
};

function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	const { notify } = useToast();

	const loggedIn = useSelector((state) => state?.users?.loggedIn || false);

	const [authStatus, setAuthStatus] = useState(null);

	useEffect(() => {
		dispatch(verifyUserLogin(notify)).then(() => {
			setAuthStatus(loggedIn && true);
			if (loggedIn) dispatch(getUser(notify));
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loggedIn]);

	return (
		<div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
			{location.pathname !== "/dashboard" && <Header />}
			<Suspense fallback={LoadingComponent}>
				<Routes>
					<Route path="/" element={<LazyComponents.Home />} />
					<Route path="/about" element={<LazyComponents.AboutUs />} />
					<Route path="/motivational" element={<LazyComponents.MotivationalSpeaking />} />
					<Route path="/pricing" element={<LazyComponents.Pricing />} />
					<Route path="/mentoring" element={<LazyComponents.Mentoring />} />
					<Route path="/contact" element={<LazyComponents.ContactUs />} />

					{/* Guest routes for users not logged in */}
					<Route path="/" element={<GuestRoute authStatus={authStatus} />}>
						<Route path="/register" element={<LazyComponents.Register />} />
						<Route path="/login" element={<LazyComponents.Login />} />
						<Route path="/forgot-password" element={<LazyComponents.ForgotPassword />} />
						<Route path="/reset-password" element={<LazyComponents.ResetPassword />} />
					</Route>

					{/* Protected routes for logged in users */}
					<Route path="/" element={<ProtectedRoute authStatus={authStatus} />}>
						<Route path="/dashboard" element={<LazyComponents.Dashboard />} />
						<Route path="/checkout" element={<LazyComponents.Checkout />} />
					</Route>
					<Route path="*" element={<LazyComponents.NotFound />} />
				</Routes>
			</Suspense>
			<Footer />
		</div>
	);
}

export default App;
