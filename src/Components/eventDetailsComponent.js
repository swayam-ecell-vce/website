import React from 'react'
import '../Stylesheets/EventDetailsComponent.css'

const eventDetails = (props) =>
{
	const eventfound = props.eventdetails
	return(
		<React.Fragment>
			<div className='det-div-main'>
				<div className='det-div-tnd'>
				<p>
					{eventfound.time}
				</p>
				<p>
					&nbsp; | &nbsp;
				</p>
				<p>
					{eventfound.location}
				</p>
				</div>
				<p className = 'det-p-title'>
					{eventfound.title}
				</p>
				<p className='det-p-tagline'>
					{eventfound.tagline}
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
								{eventfound.time}
							</p>
							<p className = 'det-p-place'>
								{eventfound.location}
							</p>
						</div>
					</div>
					<div className='det-div-details'>
						<p className='det-p-subtitle'>
							About the Event
						</p>
						<div className='det-div-wrapper-sec'>
						{eventfound.details}
						</div>
					</div>
					<div className='det-div-details'>
						<a className='det-a-btn-sec'>
							Register	
						</a>
					</div>
				</div>
			</React.Fragment>
	)
}

export default eventDetails