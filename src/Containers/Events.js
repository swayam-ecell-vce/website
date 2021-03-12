import React, {Component} from 'react'
import Navbar from '../Containers/Navbar'

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
			</div>
		)
	}
}

export default EventContainer