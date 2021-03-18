import React from 'react'
import ReactPlayer from 'react-player/lazy'
import Slider from "react-slick";
import SliderWrapper from '../UI/sliderdots'
import '../Stylesheets/About.css'

const aboutComponent = (props) =>
{
	//carousel settings
	const settings2 = {
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		speed: 500,
		adaptiveHeight: true,
	  }

	return(
		<div className='home-div-abt'>
			<div className='home-div-abt-title'>
				Everything You Need to Know About Swayam?
			</div>
			<div className='home-div-abt-vid'>
			<ReactPlayer
				className='react-player'
				url='https://youtu.be/PsVk5nZ0weE'
				light = {true}
				width='100%'
				height='100%'
			/>
			</div>
			<div>
				<p className='home-p-abt-details'>
				Between 1961 and 1970, Emanuele Severino was subjected to a thorough investigation by the Vatican Inquisition.
				The “fundamental incompatibility” identified between his thought and Christian doctrine ejected him from his position
				as Professor of Philosophy at the Catholic University in Milan. The Essence of Nihilism, published in 1972,
				was the first book to follow his expulsion, and it established Severino’s preeminent position within the the
				constellation of contemporary philosophy.
				</p>
			</div>
			<div className='home-div-abt-sec'>
				<div className='home-abt-wrapper'>
					<div className='home-div-abt-text'>
						<div className= 'home-div-abt-color'>

						</div>
						<p className='home-p-abt-alt'>
							Our Vision
						</p>
						<br />
						<p className='home-p-content-alt'>
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old. Richard McClintock, a Latin professor at
						</p>
					</div>
					<div className='home-img-abt-2'>

					</div>
				</div>
			</div>
			<div className='home-div-abt-sec'>
				<div className='home-abt-wrapper-alt'>
				<div className='home-img-abt'>

				</div>
					<div className='home-div-abt-text'>
						<div className= 'home-div-abt-color'>

						</div>
						<p className='home-p-abt'>
							Our Mission
						</p>
						<br />
						<p className='home-p-content'>
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old. Richard McClintock, a Latin professor at
						</p>
					</div>
				</div>
			</div>
			<div className='home-div-abt-car-wrapper'>
			<SliderWrapper>
			<Slider {...settings2}>
				<div className='home-div-abt-slideshow'>				
					<div className='home-div-abt-car-img-wrapper'>
						<div className='home-div-abt-car'>

						</div>
					</div>
					<div className='home-div-abt-cert-wrapper'>
						<p className='home-div-abt-cert'>
							Best Startup Club Award
						</p>
						<p className='home-div-abt-cert-awarder'>
							--------------Tie Global--------------
						</p>
						<p className='home-div-abt-cert-det'>
						But be aware slick-carousel has a peer-dependancy on jQuery which you,
						or your colleagues may not like to see in your console output,
						so you can always grab the CSS from there and convert it
						into any CSS in JS solution that you might be using.
						</p>
					</div>
				</div>
				<div className='home-div-abt-slideshow'>				
					<div className='home-div-abt-car-img-wrapper'>
						<div className='home-div-abt-car'>

						</div>
					</div>
					<div className='home-div-abt-cert-wrapper'>
						<p className='home-div-abt-cert'>
							Best Startup Club Award
						</p>
						<p className='home-div-abt-cert-awarder'>
							--------------Tie Global--------------
						</p>
						<p className='home-div-abt-cert-det'>
						But be aware slick-carousel has a peer-dependancy on jQuery which you,
						or your colleagues may not like to see in your console output,
						so you can always grab the CSS from there and convert it
						into any CSS in JS solution that you might be using.
						</p>
					</div>
				</div>
				<div className='home-div-abt-slideshow'>				
					<div className='home-div-abt-car-img-wrapper'>
						<div className='home-div-abt-car'>

						</div>
					</div>
					<div className='home-div-abt-cert-wrapper'>
						<p className='home-div-abt-cert'>
							Best Startup Club Award
						</p>
						<p className='home-div-abt-cert-awarder'>
							--------------Tie Global--------------
						</p>
						<p className='home-div-abt-cert-det'>
						But be aware slick-carousel has a peer-dependancy on jQuery which you,
						or your colleagues may not like to see in your console output,
						so you can always grab the CSS from there and convert it
						into any CSS in JS solution that you might be using.
						</p>
					</div>
				</div>
				<div className='home-div-abt-slideshow'>				
					<div className='home-div-abt-car-img-wrapper'>
						<div className='home-div-abt-car'>

						</div>
					</div>
					<div className='home-div-abt-cert-wrapper'>
						<p className='home-div-abt-cert'>
							Best Startup Club Award
						</p>
						<p className='home-div-abt-cert-awarder'>
							--------------Tie Global--------------
						</p>
						<p className='home-div-abt-cert-det'>
						But be aware slick-carousel has a peer-dependancy on jQuery which you,
						or your colleagues may not like to see in your console output,
						so you can always grab the CSS from there and convert it
						into any CSS in JS solution that you might be using.
						</p>
					</div>
				</div>
			</Slider>
			</SliderWrapper>
			</div>
		</div>
	)
}

export default aboutComponent