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
				Everything You Need to Know About Swayam
			</div>
			<div className='home-div-abt-vid'>
			<ReactPlayer
				className='react-player'
				url='https://www.youtube.com/watch?v=-8e9RjTn7Lg'
				light = {true}
				width='100%'
				height='100%'
			/>
			</div>
			<div>
				<p className='home-p-abt-details'>
					Swayam is the entrepreneurship cell of Vasavi College of Engineering. It's a manifestation of the effort, ideas, dreams, and aspirations of all associated with it. It exists to develop and nourish the latent entrepreneurial spirit which is inherent in every student. It helps them gain a diverse perspective of life and teaches them how to use design thinking in life's everyday aspects. It empowers them to become independent thinkers who pitch their unique ideas and work in teams to watch them come alive. 
					Swayam takes curious, insightful, and hard-working students and shapes them into competent Entrepreneurs.
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
						To develop confidence by creating an ecosystem that encourages and supports the entrepreneurial potential of students.
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
						To inculcate the spirit of entrepreneurship among students and to provide them with all necessary support and mentoring. Helping students by equipping them with the right skills and attitude to convert an idea into a successful business venture.
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
						But be aware slick-carousel has a peer-dependancy on jQuery which you
						so you can always grab the CSS from there and convert it
						
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