import React from 'react'
import '../Stylesheets/HomeContainer.css'
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Slider from "react-slick";
import SliderWrapper from '../UI/sliderdots'

//import the css files here
import "../../node_modules/slick-carousel/slick/slick.css" 
import "../../node_modules/slick-carousel/slick/slick-theme.css";


const homeComponent = (props) =>
{
	const divclickhandler = (event) =>
	{
		//configure the click handler user React.history.push or something better
	}

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
		appendDots: dots => <ul>{dots}</ul>,
		customPaging: i => (
		  <div className="ft-slick__dots--custom">
			<div className="loading" />
		  </div>
		)
	  };
	  const settings2 = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
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
				dots: true
			  }
			}
		  ]
	  }
	return(
		<div className='home-wrapper'>
		<div className='home-div-header'>
			<p className='home-p-title'>
				<span className='home-span-Swayam'>Swayam</span> <br /> <br />
				The <br />
				<span className='home-span-titledecor'>Entrepreneurship</span> cell  <br />
				of <span className='home-span-titledecor'>Vasavi </span> 
				College of Engineering
			</p>
			<p className='home-p-tagline'>
				"Students to Innovators"
			</p>
		</div>
		<div className='home-div-main'>
			<div className='home-div-sec' onClick={divclickhandler}>
				<div className='home-div-ter'>
					Incubator
				</div>
			</div>
			<div className='home-div-sec'>
				<div className='home-div-ter'>
					Swayam Events
				</div>
			</div>
		</div>
		{/* Add the numbers speak line after this */}
		<div className='home-div-collage'>
			<div className='home-div-collage-title'>
				<p className='home-p-collage-title'>
				Swayam At a Glance
				</p>
			</div>
		<div className="wrapper">
			<div className="one num">
				<div className='overlay'>
					<p className='text'>
						Swayam Internship Drive 2019
					</p>
				</div>
			</div>
			<div className="two num">
				<div className='overlay'>
					<p className='text'>
						TiE MoU &amp; Ideation
						<br />
						28-Aug-2019
					</p>
				</div>
			</div>
			<div className="three num">
				<div className='overlay'>
					<p className='text'>
						T Tribe MoU with T-Hub
					</p>
				</div>
			</div>
			<div className="four num">
				<div className='overlay'>
					<p className='text'>
						Design Thinking Workshop
					</p>
				</div>
			</div>
			
			<div className="five num">
				<div className='overlay'>
					<p className='text'>
						Swayam E Summit
					</p>
				</div>
			</div>
			<div className="six num">
				<div className='overlay'>
					<p className='text'>
						E-Leader Workshop 2k19
					</p>
				</div>
			</div>
		</div>
		</div>
		
			<div className='home-div-numb-title'>
				Swayam in Numbers
			</div>
			<div className='home-div-numb'>
				<div className='home-div-wrapicon'>
					<EmojiEventsOutlinedIcon style={{ fontSize: 55 }} titleAccess = 'Event'></EmojiEventsOutlinedIcon>
					<p>
						50+ Events <br /> Hosted
					</p>
				</div>
				<div className='home-div-wrapicon'>
					<EmojiObjectsIcon style={{fontSize: 55}}></EmojiObjectsIcon>
					<p>
						23+ Startups <br /> Incubated
					</p>
				</div>
				<div className='home-div-wrapicon'>
					<PeopleOutlineRoundedIcon style={{fontSize: 55}}></PeopleOutlineRoundedIcon>
					<p>
						5000+ Students <br /> Impacted
					</p>
				</div>
				<div className='home-div-wrapicon'>
					<LocalAtmRoundedIcon style={{fontSize: 55}}></LocalAtmRoundedIcon>
					
					<p>
						15,00,000+ <br /> Funds <br /> Raised
					</p>
				</div>
				<div className='home-div-wrapicon'>
					<EmojiPeopleRoundedIcon style={{fontSize: 55}}></EmojiPeopleRoundedIcon>
					
					<p>
						70+ <br />  Created <br /> Young Leaders
					</p>
				</div>
				<div className='home-div-wrapicon'>
					<BusinessRoundedIcon style={{fontSize: 55}}></BusinessRoundedIcon>
					<p>
						70+ <br />  Collaborations <br /> made
					</p>
				</div>
			</div>
			
		
		<div className='home-div-caro-title'>
			Here’s What Some of Our Prominent Visitors had to Say
		</div>

		<div className='home-div-show'>
			<SliderWrapper>
			<Slider {...settings}>
				<div className='home-div-show-wrapper'>
					<div className='home-img-avatar'>

					</div>
					<div className='home-div-show-quote'>
						<FormatQuoteIcon style={{ fontSize: 55, color: 'black' }}/>
					</div>
					<div className='home-div-show-text'>
						<br />
						<p className='home-p-show-text'>
							You guys  provided young enthusiasts exposure to experts
							with various initiatives, successes and failures, and that
							is truly Amazing.
							<br />
							<p className='home-p-show-author'>
								Sri Charan Lakkaraju
								<br />
								<p className='home-p-show-title'>
								Forbes 30 Under30 Asia 2018 | Founder, stuMagz
								</p>
							</p>
						</p>
					</div>
				</div>
				<div className='home-div-show-wrapper'>
					<div className='home-img-avatar'>

					</div>
					<div className='home-div-show-quote'>
						<FormatQuoteIcon style={{ fontSize: 55, color: 'black' }}/>
					</div>
					<div className='home-div-show-text'>
						<br />
						<p className='home-p-show-text'>
							You guys  provided young enthusiasts exposure to experts
							with various initiatives, successes and failures, and that
							is truly Amazing.
							<br />
							<p className='home-p-show-author'>
								Sri Charan Lakkaraju
								<br />
								<p className='home-p-show-title'>
								Forbes 30 Under30 Asia 2018 | Founder, stuMagz
								</p>
							</p>
						</p>
					</div>
				</div>
			</Slider>
			</SliderWrapper>
      	</div>

		<div className='home-div-startups'>
			<p className = 'home-div-caro-title'>
				Our College Start-ups
			</p>
			<div className = 'home-div-st'>
			<SliderWrapper>
			<Slider {...settings2}>
				<div className='home-div-show-wrapper-2'>
					<div className='home-img-avatar-2'>

					</div>
					<div className = 'home-div-show-details'>
						<p>
							<p className = 'home-div-show-title'>
								Cure Cloud India
							</p>
							Lorem ipsum dolor sit amet, consetetur
							sadipscing elitr, sed diam nonumy eirmod 
							tempor invidunt ut labore et dolore magna 
							aliquyam erat, sed diam voluptua. At vero 
							eos et accusam et justo duo ... Read More 
						</p>
					</div>
				</div>
				<div className='home-div-show-wrapper-2'>
					<div className='home-img-avatar-2'>

					</div>
					<div className = 'home-div-show-details'>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
							sed diam nonumy eirmod 
							tempor invidunt ut labore et dolore magna 
							aliquyam erat, sed diam voluptua. At vero 
							eos et accusam et justo duo ... Read More 
						</p>
					</div>
				</div>
				<div className='home-div-show-wrapper-2'>
					<div className='home-img-avatar-2'>

					</div>
					<div className = 'home-div-show-details'>
						<p>
							<p className = 'home-div-show-title'>
								Cure Cloud India
							</p>
							Lorem ipsum dolor sit amet, consetetur
							sadipscing elitr, sed diam nonumy eirmod 
							tempor invidunt ut labore et dolore magna 
							aliquyam erat, sed diam voluptua. At vero 
							eos et accusam et justo duo ... Read More 
						</p>
					</div>
				</div>
				<div className='home-div-show-wrapper-2'>
					<div className='home-img-avatar-2'>

					</div>
					<div className = 'home-div-show-details'>
						<p>
							<p className = 'home-div-show-title'>
								Cure Cloud India
							</p>
							Lorem ipsum dolor sit amet, consetetur
							sadipscing elitr, sed diam nonumy eirmod 
							tempor invidunt ut labore et dolore magna 
							aliquyam erat, sed diam voluptua. At vero 
							eos et accusam et justo duo ... Read More 
						</p>
					</div>
				</div>
			</Slider>
			</SliderWrapper>
			</div>
		</div>
		</div>
		
	)
}

export default homeComponent