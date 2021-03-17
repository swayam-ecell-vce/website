import React, {Component} from 'react'
import Navbar from '../Containers/Navbar'
import Footer from './Footer'

//import the components here
import EventComponent from '../Components/eventsComponent'

class EventContainer extends Component
{
	render()
	{
		const event1 = {time: '9:30 pm', date: '03/23/2021', location: 'online', id: '1', title: 'Swayam Incubation Contest', tagline: 'Ethereum is a technology that is home to digital money, global payments', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
		const event2 = {time: '9:30 pm', date: '03/23/2021', location: 'online', id: '2', title: 'Swayam Incubation Contest', tagline: 'Ethereum is a technology that is home to digital money, global payments', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
		const event3 = {time: '9:30 pm', date: '03/23/2021', location: 'online', id: '3', title: 'Swayam Incubation Contest', tagline: 'Ethereum is a technology that is home to digital money, global payments', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
		const event4 = {time: '9:30 pm', date: '03/23/2021', location: 'online', id: '4', title: 'Swayam Incubation Contest', tagline: 'Ethereum is a technology that is home to digital money, global payments', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
		const eventdetails = [event1, event2, event3, event4]
		return(
			<div>
				<Navbar />
				
				<EventComponent eventdb = {eventdetails} />

				<Footer />
			</div>
		)
	}
}

export default EventContainer