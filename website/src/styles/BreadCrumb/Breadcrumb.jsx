import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
	return (
		<section className="breadcrumb-area section-padding img-bg-2">
			<div className="overlay" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
							<div className="section-heading">
								<h2 className="section__title text-white">{props.page}</h2>
							</div>
							<ul className="generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>{props.page}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Breadcrumb;
