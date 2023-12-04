import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Slider() {
	const swiperParams = {
		modules: [Navigation, Pagination],
		navigation: true,
		pagination: {
			clickable: true,
		},
		speed: 1000,
	};

	const animation = {
		whileInView: {
			x: 0,
			y: 0,
			opacity: 1,
		},
		one: {
			y: 70,
			opacity: 0,
		},
		two: {
			y: 80,
			opacity: 0,
		},
		three: {
			y: 90,
			opacity: 0,
		},
	};

	return (
		<>
			<Swiper {...swiperParams} className="mySwiper">
				<SwiperSlide>
					<div className="hero-slider-item hero-bg-1">
						<div className="container">
							<div className="hero-content">
								<div className="section-heading">
									<motion.h2
										whileInView={animation.whileInView}
										initial={animation.one}
										transition={{ duration: 0.6, delay: 0.1 }}
										className="section__title text-white fs-65 lh-80 pb-3"
									>
										Guiding Referees, Motivating <br />
										Athletes Changing Games.
									</motion.h2>
									<motion.p
										whileInView={animation.whileInView}
										initial={animation.two}
										transition={{ duration: 0.5, delay: 0.4 }}
										className="section__desc text-white pb-4"
									>
										Our mentorship programs are designed to provide individuals with the invaluable support and wisdom
										they need to excel in their sports endeavors, with a special focus on basketball referees.
									</motion.p>
								</div>

								<motion.div
									whileInView={animation.whileInView}
									initial={animation.three}
									transition={{ duration: 0.7, delay: 0.6 }}
									className="hero-btn-box d-flex flex-wrap align-items-center pt-1"
								>
									<Link to="/contact" className="btn theme-btn mr-4 mb-4">
										Contact Us <i className="la la-arrow-right icon ml-1" />
									</Link>
									<Link to="/pricing" className="btn theme-btn mr-4 mb-4">
										Our Pricing <i className="la la-arrow-right icon ml-1" />
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="hero-slider-item hero-bg-2">
						<div className="container" data-aos="fade-up" data-aos-duration="1000">
							<div className="hero-content text-center">
								<div className="section-heading">
									<motion.h2
										whileInView={animation.whileInView}
										initial={animation.one}
										transition={{ duration: 0.6, delay: 0.1 }}
										className="section__title fs-65 lh-80 pb-3 text-white"
									>
										Unlock Your Potential <br /> Dominate Your Field.
									</motion.h2>
									<motion.p
										whileInView={animation.whileInView}
										initial={animation.two}
										transition={{ duration: 0.5, delay: 0.4 }}
										className="section__desc  pb-4 text-white"
									>
										Our mentorship programs are designed to provide individuals with the invaluable support and wisdom
										they need to excel in their sports endeavors, with a special focus on basketball referees.
									</motion.p>
								</div>

								<motion.div
									whileInView={animation.whileInView}
									initial={animation.three}
									transition={{ duration: 0.7, delay: 0.6 }}
									className="hero-btn-box d-flex flex-wrap align-items-center pt-1 justify-content-center"
								>
									<Link to="/contact" className="btn theme-btn mr-4 mb-4">
										Contact Us <i className="la la-arrow-right icon ml-1" />
									</Link>
									<Link to="/pricing" className="btn theme-btn mr-4 mb-4">
										Our Pricing <i className="la la-arrow-right icon ml-1" />
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
