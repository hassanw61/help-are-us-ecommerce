const TestimonialCard = (props) => {
	return (
		<div className="card card-item border border-gray shadow-none d-flex h-100">
			<div className="card-body h-100">
				<div className="avatar-md mb-4">
					<img src="assets/images/small-avatar-3.jpg" alt="Testimonial avatar" className="w-100 h-100 rounded-full" />
				</div>
				<p className="card-text pb-4">{props.reviews}</p>
				<div className="section-block" />
				<h3 className="card-title fs-18 pt-4">{props.name}</h3>
			</div>
		</div>
	);
};

export default TestimonialCard;
