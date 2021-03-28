import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Stylesheets/Incubator.css";

const incubatorComponent = (props) => {
	const images = [
		"https://images.unsplash.com/photo-1505017791108-7b40f307cdc5?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1615477014681-de625be36eba?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEd0ckJTY3YxYjVNfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1542314820-e04ce1d3d81a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		"https://image.shutterstock.com/image-vector/start-banner-chart-keywords-icons-260nw-647719243.jpg",
	];

	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		speed: 500,
		adaptiveHeight: true,
	};

	return (
		<React.Fragment>
			<div className="inc-div-main coming-soon">Coming Soon...</div>
			<div className="inc-div-main">
				{/* <div className='inc-head-div-main'> */}
				<p className="inc-p-head">Swayam Incubator</p>
				{/* <div className='slider-div-main'> */}
				<div className="slider-wrapper">
					<Slider {...settings}>
						{images.map((image_src, index) => (
							<div className="slider" key={index}>
								<img src={image_src} className="img" />
							</div>
						))}
					</Slider>
				</div>
				{/* </div> */}
				{/* </div> */}
				<div className="inc-div-jumbo-main">
					<div className="inc-div-jumbo">
						<div className="inc-abt-wrapper">
							<div
								className="inc-img-abt"
								aria-labelledby="Swayam E-Cell Vasavi"
							></div>
							<p className="inc-p-content">
								<p className="inc-p-abt-head">
									What is Swayam Incubator?
								</p>
								Enim esse elit cupidatat laborum Sint labore
								minim officia aliquip aliquip cillum voluptate
								et do dolor Lorem. Aliquip minim in incididunt
								ut elit non cillum consectetur cupidatat anim id
								qui
							</p>
						</div>
					</div>
				</div>
				<div className="inc-div-facility">
					<div className="inc-fac-card">
						<div className="inc-fac-image">
							<img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
						</div>

						<div className="inc-fac-details">
							<div className="inc-fac-content">
								<h1>
									Mentors
									<br />
									<span>team leader</span>
								</h1>
								<p>
									Lorem ipsum is simple dummy text on the
									printing and typesetting industry.
								</p>
							</div>
						</div>
					</div>
					<div className="inc-fac-card">
						<div className="inc-fac-image">
							<img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
						</div>
						<div className="inc-fac-details">
							<div className="inc-fac-content">
								<h1>
									Mentors
									<br />
									<span>team leader</span>
								</h1>
								<p>
									Lorem ipsum is simple dummy text on the
									printing and typesetting industry.
								</p>
							</div>
						</div>
					</div>
					<div className="inc-fac-card">
						<div className="inc-fac-image">
							<img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
						</div>
						<div className="inc-fac-details">
							<div className="inc-fac-content">
								<h1>
									Mentors
									<br />
									<span>team leader</span>
								</h1>
								<p>
									Lorem ipsum is simple dummy text on the
									printing and typesetting industry.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default incubatorComponent;
