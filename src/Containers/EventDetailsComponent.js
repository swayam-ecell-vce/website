import React, {Component} from 'react'
import instance from '../axios/instance'
//import the other components here
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from '../UI/loader'
import EventDeatilscomponent from '../Components/eventDetailsComponent'
import '../Stylesheets/EventDetailsComponent.css'

class EventDetails extends Component
{
	state = {
		foundevent: {},
		eventdatastate: [],
		loading: true,
	}

	componentDidMount()
	{
		instance.get('/events/-MW8IpHH_2mDasrrIL-H.json').then(res => {
			const eventdata = []
			for (let key in res.data)
			{
				eventdata.push({
					...res.data[key],
					id: key
				})
			}
			this.setState({eventdatastate: eventdata, loading: false}, () => {
				let eventid = this.props.match.params.id
				this.state.eventdatastate.forEach(event => {
					if(event.title === eventid)
					{
						console.log(event)
						this.setState({foundevent: event})
					}
					else
					{
						console.log('Page Not found')
					}
				});
			})
		}).catch(err =>
			{
				console.log(err)
			})
	}
	render()
	{
		if(this.state.loading === true)
		{
			return(
				<Loader loading={this.state.loading}/>
			)
		}
		return(
			<div className='det-div-wrapper'>
				<Navbar />
				<EventDeatilscomponent eventdetails = {this.state.foundevent} />
				<Footer />
			</div>
		)
	}
}

export default EventDetails