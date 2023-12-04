import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
const ChatWithAdmin = () => {
	const [isPickerVisible, setPickerVisible] = useState(false);
	const [selectedEmojis, setSelectedEmojis] = useState([]);
	return (
		<div className="fade-in">
			<div className="container-fluid">
				<div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
					<div className="media media-card align-items-center">
						<div className="media-img media--img media-img-md rounded-full">
							<img className="rounded-full" src="assets/images/small-avatar-1.jpg" alt="Student thumbnail image" />
						</div>
						<div className="media-body">
							<h2 className="section__title fs-30">Tim David</h2>
						</div>
					</div>
				</div>

				<div className="dashboard-message-wrapper d-flex my-4">
					<div className="message-sidebar">
						<form action="#" className="p-4 MultiFile-intercepted">
							<div className="form-group mb-0">
								<input
									className="form-control form--control form--control-gray pl-3"
									type="text"
									placeholder="Search..."
								/>
								<button type="submit" className="search-icon">
									<i className="la la-search" />
								</button>
							</div>
						</form>
						<div className="message-inbox-item border-bottom border-bottom-gray">
							<div className="notification-body scrolled-box scrolled--box custom-scrollbar-styled">
								<a href="#" className="media media-card align-items-center message-active">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status bg-success position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">Daniel Hardman</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
								<a href="#" className="media media-card align-items-center">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">
											Daniel Hardman <span className="badge badge-success p-1 ml-2">2</span>
										</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
								<a href="#" className="media media-card align-items-center">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status bg-success position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">Daniel Hardman</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
								<a href="#" className="media media-card align-items-center">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">Daniel Hardman</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
								<a href="#" className="media media-card align-items-center">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">Daniel Hardman</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
								<a href="#" className="media media-card align-items-center">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">Daniel Hardman</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
								<a href="#" className="media media-card align-items-center">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">Daniel Hardman</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
								<a href="#" className="media media-card align-items-center">
									<div className="avatar-sm flex-shrink-0 mr-2 position-relative">
										<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
										<span className="dot-status position-absolute bottom-0 right-0" />
									</div>
									<div className="media-body overflow-hidden">
										<h5 className="fs-14">Daniel Hardman</h5>
										<p className="text-truncate lh-18 pt-1 text-gray fs-13">
											How the hell am I supposed to get a jury to believe you when I am not even sure that I do
										</p>
									</div>
								</a>
							</div>
						</div>
						{/* end message-inbox-item */}
					</div>
					{/* message-sidebar */}
					<div className="message-content flex-grow-1">
						<div className="message-header bg-gray d-flex align-items-center justify-content-between p-4 border-bottom border-bottom-gray">
							<div className="media media-card align-items-center">
								<div className="avatar-sm flex-shrink-0 mr-2">
									<img className="rounded-full img-fluid" src="assets/images/small-avatar-1.jpg" alt="Avatar image" />
								</div>
								<div className="media-body overflow-hidden">
									<h5 className="fs-14">Daniel Hardman</h5>
								</div>
							</div>
						</div>
						{/* message-header */}
						<div className="conversation-wrap">
							<div className="conversation-box custom-scrollbar-styled">
								<div className="message-time text-center mb-3">
									<span className="ribbon">2 Aug, 2023</span>
								</div>
								<div className="conversation-item message-sent mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkFour"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkFour">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">
													{" "}
													How the hell am I supposed to get a jury to believe you when I am not even sure that I do?
													😒
												</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="conversation-item message-reply mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkFive"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkFive">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">When you're backed against the wall, break the god damn thing down.</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="conversation-item message-reply mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkSix"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkSix">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">Excuses don't win championships. 😐</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="message-time text-center mb-3">
									<span className="ribbon">Yesterday</span>
								</div>

								<div className="conversation-item message-sent mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkSeven"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkSeven">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">Oh yeah, you said right 👍</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="conversation-item message-reply mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkEight"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkEight">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">Anyway! when i will start working on your project 😎😎😎</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="conversation-item message-sent mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkNine"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkNine">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">You can start working on project tomorrow 🙂</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="conversation-item message-reply mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkTen"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkTen">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">Ok, i will 😉</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="message-time text-center mb-3">
									<span className="ribbon">Today</span>
								</div>

								<div className="conversation-item message-reply mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLinkTwo"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLinkTwo">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">Hi John, I just wanted to let you know that project is finished</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="conversation-item message-sent mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="generic-action-wrap generic--action-wrap-3">
												<div className="dropdown">
													<a
														className="action-btn"
														href="#"
														role="button"
														id="dropdownMenuLink"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="la la-ellipsis-v" />
													</a>
													<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
														<a className="dropdown-item" href="#">
															Copy
														</a>
														<a className="dropdown-item" href="#">
															Cut
														</a>
														<a className="dropdown-item" href="#">
															Edit
														</a>
														<a className="dropdown-item" href="#">
															Delete
														</a>
													</div>
												</div>
											</div>
											<div className="message-body">
												<h5 className="fs-13">
													Hi Daniel! I'm actually on vacation 🏖️ until Sunday so I can't check it now 😎
												</h5>
												<span className="fs-12 d-block lh-18 pt-1">
													11:44 AM <i className="la la-check ml-1" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="conversation-item message-reply mb-3">
									<div className="media media-card align-items-center">
										<div className="avatar-sm flex-shrink-0 mr-4">
											<img
												className="rounded-full img-fluid"
												src="assets/images/small-avatar-1.jpg"
												alt="Avatar image"
											/>
										</div>
										<div className="media-body d-flex align-items-center">
											<div className="message-body message-typing">
												<h5 className="fs-13">Typing</h5>
												<div className="typing-director">
													<span />
													<span />
													<span />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="message-reply-body d-flex align-items-center pt-2 px-4 border-top border-top-gray">
							<div className="d-flex justify-content-between w-100">
								<input className="emojionearea-editor" value={selectedEmojis.join(" ")} placeholder="your message" />
								<div className="d-flex position-relative">
									<div className={`position-absolute chat-box-dropdown ${isPickerVisible ? "d-block " : "d-none"}`}>
										<Picker
											data={data}
											previewPosition="top"
											onEmojiSelect={(e) => {
												const updatedEmojis = [...selectedEmojis, e.native];
												setSelectedEmojis(updatedEmojis);
												setPickerVisible(!isPickerVisible);
											}}
										/>
									</div>
									<a onClick={() => setPickerVisible(!isPickerVisible)}>{"😎"}</a>
									<div className="file-upload-wrap file--upload-wrap file-upload-wrap-3 mr-3">
										<div className="MultiFile-wrap" id="MultiFile1">
											<input
												type="file"
												name="files[]"
												className="multi file-upload-input lh-18 MultiFile-applied"
												multiple=""
												id="MultiFile1"
												defaultValue=""
											/>
											<div className="MultiFile-list" id="MultiFile1_list" />
										</div>
										<span className="file-upload-text">
											<i className="la la-paperclip" />
										</span>
									</div>
									<button
										type="button"
										className="message-send icon-element icon-element-xs bg-1 text-white ml-2 border-0"
									>
										<i className="la la-paper-plane" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatWithAdmin;
