import React from 'react'
import '../Stylesheets/EventDetailsComponent.css'
import styled from 'styled-components'

const eventDetails = (props) =>
{
	const Div = styled.div `
	background-image: url(${props => props.imageurl});
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	width: 70%;
	height: 800px;
	margin: 0px auto;
	border-radius: 15px;

	@media(max-width: 1150px) {
		width: 60%;
		height: 500px
	  }
	  @media(max-width: 800px) {
		width: 50%;
		height: 300px
	  }
	  @media(max-width: 580px) {
		width: 40%;
		height: 200px
	  }
	  @media(max-width: 480px) {
		width: 40%;
		height: 150px
	  }
	  @media(max-width: 350px) {
		width: 30%;
		height: 90px
	  }

	`
	const eventfound = props.eventdetails

	let questionsmapped
	if(eventfound.questions)
	{
		let questionnumber = 0
		questionsmapped = eventfound.questions.map(ques =>
		{
			questionnumber++
			return(
				<React.Fragment>
					<div className='det-p-subtitle det-div-questions'>
						{questionnumber}. {ques.questiontext}
					</div>
					<div className='det-div-wrapper-sec det-div-answer'>
						{ques.answer}
					</div>
				</React.Fragment>
			)
		})
	}
	return(
		<React.Fragment>
			<div className='det-div-main'>
				<div className='det-div-tnd'>
				<p>
					{eventfound.date}&nbsp; | &nbsp;
				</p>
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
				<a href ='https://forms.office.com/Pages/ResponsePage.aspx?id=2gmg8pG0u02U6FgJFiVJzUlO1dwao5NGoawk9C6n8HlUMzYxNEQwSlBEUDNBTlpaNjRUS0YySzVDMy4u' className={eventfound.status ? "det-a-btn hidden" : "det-a-btn"} target = 'blank'>
						Register
				</a>
			</div>
				<div className='det-div-sec'>
					<Div imageurl = {eventfound.imageurl}>
						{/* Just a placeholder for the image*/}
					</Div>
					<div className='det-div-details'>
						<p className='det-p-subtitle'>
							Date, Time, &#38; Location
						</p>
						<div className='det-div-wrapper-sec'>
							<p className='det-p-time det-p-date'>
								{eventfound.date}
							</p>
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
						<a href ='https://forms.office.com/Pages/ResponsePage.aspx?id=2gmg8pG0u02U6FgJFiVJzUlO1dwao5NGoawk9C6n8HlUMzYxNEQwSlBEUDNBTlpaNjRUS0YySzVDMy4u' className='det-a-btn det-a-btn-sec' className={eventfound.status ? "det-a-btn det-a-btn-sec hidden" : "det-a-btn det-a-btn-sec"} target = 'blank'>
							Register	
						</a>
					</div>
					<div className='det-div-details'>
						<div className='det-p-subtitle'>
							Frequently Asked Questions
						</div>
						{questionsmapped}
					</div>
				</div>
			</React.Fragment>
	)
}

export default eventDetails