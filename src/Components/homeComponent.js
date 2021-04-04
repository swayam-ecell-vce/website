import React, {lazy, Suspense} from "react";
import { useHistory } from "react-router-dom";
import "../Stylesheets/HomeContainer.css";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import LocalAtmRoundedIcon from "@material-ui/icons/LocalAtmRounded";
import EmojiPeopleRoundedIcon from "@material-ui/icons/EmojiPeopleRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import SliderWrapper from "../UI/sliderdots";
//import the css files here
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Slider = lazy(() => import("react-slick"))

function HomeComponent(props) {
	var history = useHistory();
	const incubatorclicker = () => {
		history.push("/incubator");
	};

	const eventclicker = (event) => {
		history.push("/events");
	};

	//settings needed for the testimonials carousel to run
	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		speed: 500,
		arrows: false,
		adaptiveHeight: true,
		appendDots: (dots) => <ul>{dots}</ul>,
		customPaging: (i) => (
			<div className="ft-slick__dots--custom">
				<div className="loading" />
			</div>
		),
	};
	const settings2 = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 0,
		initialSlide: 0,
		speed: 500,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	return (
		<div className="home-wrapper">
			<div className="home-div-header">
				<h1 className="home-p-title">
					<span className="home-span-Swayam">Swayam</span>{" "}
					<br />
					The <br />
					<span className="home-span-titledecor">
						Entrepreneurship
					</span>{" "}
					cell <br />
					of <span className="home-span-titledecor">Vasavi</span>{" "}
					College of Engineering
				</h1>
				<p className="home-p-tagline">"Students to Innovators"</p>
			</div>
			<div className="home-div-main">
				<div
					className="home-div-sec"
					onClick={incubatorclicker}
					values="incubator"
					aria-labelledby="Swayam E-Cell Incubator"
				>
					<div className="home-div-ter">Incubator</div>
				</div>
				<div
					className="home-div-sec home-div-sec-bg"
					aria-labelledby="Swayam E-Cell Vasavi College of Engineering"
					onClick={eventclicker}
					values="events"
				>
					<div className="home-div-ter">Swayam Events</div>
				</div>
			</div>
			{/* Add the numbers speak line after this */}
			<div className="home-div-collage">
				<div className="home-div-collage-title">
					<p className="home-p-collage-title">Swayam At a Glance</p>
				</div>
				<div className="wrapper">
					<div className="one num">
						<div className="overlay">
							<p
								className="text"
								aria-labelledby="Swayam Internship Drive 2019"
							>
								Swayam Internship Drive 2019
							</p>
						</div>
					</div>
					<div className="two num">
						<div className="overlay">
							<p
								className="text"
								aria-labelledby="Swayam E-Cell TiE MoU and Ideation"
							>
								TiE MoU &amp; Ideation
								<br />
								28-Aug-2019
							</p>
						</div>
					</div>
					<div className="three num">
						<div className="overlay">
							<p
								className="text"
								aria-labelledby="Swayam E-Cell T Tribe MoU with T-Hub"
							>
								T Tribe MoU with T-Hub
							</p>
						</div>
					</div>
					<div className="four num">
						<div className="overlay">
							<p
								className="text"
								aria-labelledby="Swayam E-Cell Design Thinking Workshop"
							>
								Design Thinking Workshop
							</p>
						</div>
					</div>

					<div className="five num">
						<div className="overlay">
							<p
								className="text"
								aria-labelledby="Swayam E Summit"
							>
								Swayam E Summit
							</p>
						</div>
					</div>
					<div className="six num">
						<div className="overlay">
							<p
								className="text"
								aria-labelledby="Swayam E-Leader Workshop 2k19"
							>
								E-Leader Workshop 2k19
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="home-div-numb-title">Swayam in Numbers</div>
			<div className="home-div-numb">
				<div className="home-div-wrapicon">
					<EmojiEventsOutlinedIcon
						style={{ fontSize: 55 }}
						titleAccess="Event"
					></EmojiEventsOutlinedIcon>
					<p>
						50+ Events <br /> Hosted
					</p>
				</div>
				<div className="home-div-wrapicon">
					<EmojiObjectsIcon
						style={{ fontSize: 55 }}
					></EmojiObjectsIcon>
					<p>
						23+ Startups <br /> Incubated
					</p>
				</div>
				<div className="home-div-wrapicon">
					<PeopleOutlineRoundedIcon
						style={{ fontSize: 55 }}
					></PeopleOutlineRoundedIcon>
					<p>
						5000+ Students <br /> Impacted
					</p>
				</div>
				<div className="home-div-wrapicon">
					<LocalAtmRoundedIcon
						style={{ fontSize: 55 }}
					></LocalAtmRoundedIcon>

					<p>
						15,00,000+ <br /> Funds <br /> Raised
					</p>
				</div>
				<div className="home-div-wrapicon">
					<EmojiPeopleRoundedIcon
						style={{ fontSize: 55 }}
					></EmojiPeopleRoundedIcon>

					<p>
						70+ <br /> Created <br /> Young Leaders
					</p>
				</div>
				<div className="home-div-wrapicon">
					<BusinessRoundedIcon
						style={{ fontSize: 55 }}
					></BusinessRoundedIcon>
					<p>
						70+ <br /> Collaborations <br /> made
					</p>
				</div>
			</div>

			<div className="home-div-show-comingsoon">
				<div className="home-div-caro-title">
					Here’s What Some of Our Prominent Visitors had to Say
				</div>
				<div className="home-div-show">
					<SliderWrapper>
						<Suspense fallback = {<div>Loading...</div>}>
						<Slider {...settings}>
							<div className="home-div-show-wrapper">
								<div
									className="home-img-avatar"
									aria-labelledby="Swayam E-cell Vasavi"
								></div>
								<div className="home-div-show-quote">
									<FormatQuoteIcon
										style={{ fontSize: 55, color: "black" }}
									/>
								</div>
								<div className="home-div-show-text">
									<br />
									<p className="home-p-show-text">
										You guys provided young enthusiasts
										exposure to experts with various
										initiatives, successes and failures, and
										that is truly Amazing.
										<br />
										<p className="home-p-show-author">
											Sri Charan Lakkaraju
											<br />
											<p className="home-p-show-title">
												Forbes 30 Under30 Asia 2018 |
												Founder, stuMagz
											</p>
										</p>
									</p>
								</div>
							</div>
							<div className="home-div-show-wrapper">
								<div className="home-img-avatar"></div>
								<div className="home-div-show-quote">
									<FormatQuoteIcon
										style={{ fontSize: 55, color: "black" }}
									/>
								</div>
								<div className="home-div-show-text">
									<br />
									<p className="home-p-show-text">
										You guys provided young enthusiasts
										exposure to experts with various
										initiatives, successes and failures, and
										that is truly Amazing.
										<br />
										<p className="home-p-show-author">
											Sri Charan Lakkaraju
											<br />
											<p className="home-p-show-title">
												Forbes 30 Under30 Asia 2018 |
												Founder, stuMagz
											</p>
										</p>
									</p>
								</div>
							</div>
						</Slider>
						</Suspense>
					</SliderWrapper>
				</div>
			</div>

			<div className="home-div-startups">
				<p className="home-div-caro-title">Our College Start-ups</p>
				<div className="home-div-st">
					<SliderWrapper>
					<Suspense fallback = {<div>Loading...</div>}>
						<Slider {...settings2}>
							<div className="home-div-show-wrapper-2">
								<div
									className="home-img-avatar-2"
									aria-labelledby="Swayam E-Cell Vasavi"
								></div>
								<div className="home-div-show-details">
									<p>
										<p className="home-div-show-title">
											Cure Cloud India
										</p>
											Cure Cloud India is dedicated to providing excellent patient’s hospital experience seamless,
											privacy and security of the customer’s data is the foremost priority and bridge between
											Electronic Health Record (EHR) hospitals and non-EHR hospitals via its responsive application CUON,
											which provides a digital platform for individuals to store their medical documents on the cloud,
											accessible at one’s convenience and keeping the conventional doctor-patient connect as alive as possible.
											Now Cure Cloud India is acqui-hired by a company named Conscious AI Pvt Ltd.,
											which is building a similar but more sophisticated to a wider set of audience.
									</p>
								</div>
							</div>
						</Slider>
						</Suspense>
					</SliderWrapper>
				</div>
			</div>
		</div>
	);
}

export default HomeComponent;
