import React, {Component} from 'react'

//import the other components here
import Navbar from './Navbar'
import '../Stylesheets/EventDetailsComponent.css'

class EventDetails extends Component
{
	render()
	{
		return(
			<div className='det-div-wrapper'>
				<Navbar />
				<div className='det-div-main'>
					<div className='det-div-tnd'>
					<p>
						9:30 pm {/* DynCont */}
					</p>
					<p>
						&nbsp; | &nbsp;
					</p>
					<p>
						Online Event {/* DynCont */}
					</p>
					</div>
					<p className = 'det-p-title'>
						Swayam Incubation Contest
					</p>
					<p className='det-p-tagline'>
						Ethereum is a technology that's home to digital money, global payments
					</p>
					<a className='det-a-btn'>
						Register
					</a>
				</div>
				<div className='det-div-sec'>
					<div className='det-div-img'>
						{/* Just a placeholder for the image*/}
					</div>
					<div className='det-div-details'>
						<p className='det-p-subtitle'>
							Time &#38; Location
						</p>
						<div className='det-div-wrapper-sec'>
							<p className='det-p-time'>
								9:30 pm {/* DynCont */}
							</p>
							<p className = 'det-p-place'>
								Online Event {/* DynCont */}
							</p>
						</div>
					</div>
					<div className='det-div-details'>
						<p className='det-p-subtitle'>
							About the Event
						</p>
						<div className='det-div-wrapper-sec'>
						Thanks to the field of linguistics we know much about the development of the 5,000 plus languages in existence today.
						We can describe their grammar and pronunciation and see how their spoken and written forms have changed over time.
						For example, we understand the origins of the Indo-European group of languages, which includes Norwegian, Hindi and English,
						and can trace them back to tribes in eastern Europe in about 3000 BC.
						So, we have mapped out a great deal of the history of language, but there are still areas we know little about.
						Experts are beginning to look to the field of evolutionary biology to find out how the human species developed to be able to use language. 
						So far, there are far more questions and half-theories than answers.
						</div>
					</div>
					<div className='det-div-details'>
						<a className='det-a-btn-sec'>
							Register	
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default EventDetails