import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TestimonialCard from "../cards/TestimonialCard";

const TestimonialSlider = () => {
	const swiperParams = {
		modules: [Navigation],
		spaceBetween: 30,
		navigation: false,
		breakpoints: {
			0: {
				slidesPerColumn: 1,
				slidesPerView: 1,
			},

			768: {
				slidesPerView: 2,
			},
			1023: {
				slidesPerView: 3,
			},
		},
		speed: 1200,
	};
	return (
		<Swiper {...swiperParams} className="mySwiper">
			<SwiperSlide className="d-flex">
				<TestimonialCard
					name="Kevin Martin"
					reviews="Cognitive Feat transformed the way I officiate games. The mentorship program provided me with the skills, knowledge, and confidence to excel on the court. I'm grateful for their unwavering support and dedication to my success."
				/>
			</SwiperSlide>
			<SwiperSlide className="d-flex">
				<TestimonialCard
					name="Kevin Martin"
					reviews="Joining Cognitive Feat was one of the best decisions I made for my officiating career. The mentorship team's guidance and support have been instrumental in my growth."
				/>
			</SwiperSlide>
			<SwiperSlide className="d-flex">
				<TestimonialCard
					name="Kevin Martin"
					reviews="Cognitive Feat transformed the way I officiate games. The mentorship program provided me with the skills, knowledge, and confidence to excel on the court. I'm grateful for their unwavering support and dedication to my success."
				/>
			</SwiperSlide>
			<SwiperSlide className="d-flex">
				<TestimonialCard
					name="Kevin Martin"
					reviews="Joining Cognitive Feat was a game-changer for my officiating career. The mentorship I received was invaluable, and it significantly improved my confidence and decision-making on the court. I can't recommend them enough!"
				/>
			</SwiperSlide>
			<SwiperSlide className="d-flex">
				<TestimonialCard
					name="Kevin Martin"
					reviews="Cognitive Feat transformed the way I officiate games. The mentorship program provided me with the skills, knowledge, and confidence to excel on the court. I'm grateful for their unwavering support and dedication to my success."
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default TestimonialSlider;
