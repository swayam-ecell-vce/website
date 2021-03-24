import React from 'react'
import '../Stylesheets/EventDetailsComponent.css'
import styled from 'styled-components'

const eventDetails = (props) =>
{
	const Div = styled.div `
	background-image: url(${props => props.imageurl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 70%;
	height: 500px;
	margin: 0px auto;
	border-radius: 15px;
`
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
				<a href ='https://forms.office.com/Pages/ResponsePage.aspx?id=2gmg8pG0u02U6FgJFiVJzUlO1dwao5NGoawk9C6n8HlUMzYxNEQwSlBEUDNBTlpaNjRUS0YySzVDMy4u' className='det-a-btn' target = 'blank'>
						Register
				</a>
			</div>
				<div className='det-div-sec'>
					<Div imageurl = {eventfound.imageurl}>
						{/* Just a placeholder for the image*/}
					</Div>
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
						<a href ='https://forms.office.com/Pages/ResponsePage.aspx?id=2gmg8pG0u02U6FgJFiVJzUlO1dwao5NGoawk9C6n8HlUMzYxNEQwSlBEUDNBTlpaNjRUS0YySzVDMy4u' className='det-a-btn det-a-btn-sec' target = 'blank'>
							Register	
						</a>
					</div>
				</div>
			</React.Fragment>
	)
}

export default eventDetails