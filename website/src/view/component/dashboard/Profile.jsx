const Profile = () => {
	return (
		<div className="fade-in">
			<div className="container-fluid">
				<div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
					<div className="media media-card align-items-center">
						<div className="media-img media--img media-img-md rounded-full">
							<img className="rounded-full" src="assets/images/small-avatar-1.jpg" alt="Student thumbnail image" />
						</div>
						<div className="media-body">
							<h2 className="section__title fs-30">User</h2>
						</div>
					</div>

					<div className="file-upload-wrap file-upload-wrap-2 file--upload-wrap">
						<a className="bg_blue text-white rounded p-3" href="update_profile.php">
							Update Profile
						</a>
					</div>
				</div>

				<div className="section-block mb-5" />
				<div className="dashboard-heading mb-5">
					<h3 className="fs-22 font-weight-semi-bold">My Profile</h3>
				</div>
				<div className="profile-detail mb-5">
					<ul className="generic-list-item generic-list-item-flash">
						<li>
							<span className="profile-name">First Name:</span>
							<span className="profile-desc">Alex</span>
						</li>
						<li>
							<span className="profile-name">Last Name:</span>
							<span className="profile-desc">Smith</span>
						</li>
						<li>
							<span className="profile-name">User Name:</span>
							<span className="profile-desc">alex-admin</span>
						</li>
						<li>
							<span className="profile-name">Email:</span>
							<span className="profile-desc">alexsmith@gmail.com</span>
						</li>
						<li>
							<span className="profile-name">Phone Number:</span>
							<span className="profile-desc">(91) 7547 622250</span>
						</li>
						<li>
							<span className="profile-name">Bio:</span>
							<span className="profile-desc">
								Hello! I am a Alex Smith, Washington area graphic designer with over 6 years of graphic design experience.
								I specialize in designing infographics, icons, brochures, and flyers.
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Profile;
