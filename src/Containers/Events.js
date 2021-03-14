import React, {Component} from 'react'
import Navbar from '../Containers/Navbar'
import Footer from './Footer'

//import the components here
import EventComponent from '../Components/eventsComponent'

class EventContainer extends Component
{
	render()
	{
		return(
			<div>
				<Navbar />
				
				<EventComponent />

				<Footer />
			</div>
		)
	}
}

export default EventContainer