import React, {Component} from 'react'
import instance from '../axios/instance'

//import the components here
import EventComponent from '../Components/eventsComponent'
import Navbar from '../Containers/Navbar'
import Loader from '../UI/loader'
import Footer from './Footer'

class EventContainer extends Component
{
	state = {
		totalevents: [],
		loading: true
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
			this.setState({totalevents: eventdata, loading: false}, (console.log(this.state.totalevents)))
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
			<div>
				<Navbar />
				
				<EventComponent eventdb = {this.state.totalevents} />

				<Footer />
			</div>
		)
	}
}

export default EventContainer