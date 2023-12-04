
const SectionHeading = (props) => {
	return (
		<>
			<h5 className="ribbon ribbon-lg mb-2">{props.text}</h5>
			<h2 className="section__title">{props.title}</h2> <span className="section-divider" />
		</>
	);
};

export default SectionHeading;
