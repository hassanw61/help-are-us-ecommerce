
const UserStats = () => {
	return (
		<div className="fade-in">
			<div className="dashboard-heading mb-5">
				<h3 className="fs-22 font-weight-semi-bold">Dashboard</h3>
			</div>
			<div className="row">
				<div className="col-lg-6 responsive-column-half">
					<div className="card card-item dashboard-info-card">
						<div className="card-body d-flex align-items-center bg_blue">
							<div className="icon-element flex-shrink-0 text-white" style={{ background: "black" }}>
								<svg
									className="svg-icon-color-white"
									width={40}
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									x="0px"
									y="0px"
									viewBox="0 0 512 512"
									xmlSpace="preserve"
								>
									<g>
										<path d="M507.606,422.754l-86.508-86.508l42.427-42.426c3.676-3.676,5.187-8.993,3.992-14.053s-4.923-9.14-9.855-10.784   L203.104,184.13c-5.389-1.797-11.333-0.394-15.35,3.624c-4.018,4.018-5.421,9.96-3.624,15.35l84.853,254.559   c1.645,4.932,5.725,8.661,10.784,9.855c5.059,1.197,10.377-0.315,14.053-3.992l42.427-42.426l86.508,86.507   c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.464,10.606-4.394l63.64-63.64C513.465,438.109,513.465,428.612,507.606,422.754z    M433.36,475.787l-86.508-86.507c-5.857-5.858-15.356-5.858-21.213,0l-35.871,35.871l-67.691-203.073l203.073,67.691   l-35.871,35.871c-5.853,5.852-5.858,15.356,0,21.213l86.508,86.508L433.36,475.787z" />
										<path d="M195,120c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15s-15,6.716-15,15v90C180,113.284,186.716,120,195,120z" />
										<path d="M78.327,57.114c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l63.64,63.64   c5.857,5.858,15.356,5.858,21.213,0c5.858-5.858,5.858-15.355,0-21.213L78.327,57.114z" />
										<path d="M120.754,248.033l-63.64,63.64c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.858,15.356,5.858,21.213,0l63.64-63.64   c5.858-5.858,5.858-15.355,0-21.213C136.109,242.175,126.611,242.175,120.754,248.033z" />
										<path d="M269.246,141.967l63.64-63.64c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-63.64,63.64   c-5.858,5.858-5.858,15.355,0,21.213C253.89,147.825,263.389,147.825,269.246,141.967z" />
										<path d="M120,195c0-8.284-6.716-15-15-15H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h90C113.284,210,120,203.284,120,195z" />
									</g>
								</svg>
							</div>
							<div className="pl-4">
								<p className="card-text fs-18 text-white">Discover Board</p>
								<h5 className="card-title pt-2 fs-26 text-white">11</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserStats;