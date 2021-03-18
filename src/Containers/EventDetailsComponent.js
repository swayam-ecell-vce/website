import React, {Component} from 'react'

//import the other components here
import Navbar from './Navbar'
import Footer from './Footer'
import EventDeatilscomponent from '../Components/eventDetailsComponent'
import '../Stylesheets/EventDetailsComponent.css'

class EventDetails extends Component
{
	state = {
		foundevent: {}
	}

	componentDidMount()
	{
		let eventid = this.props.match.params.id
		const event1 = {title: 'Swayam Orientation Session', status: false, date: '21st August 2019.', imageurl: 'https://scontent.fhyd13-1.fna.fbcdn.net/v/t1.0-9/40648180_1950992548294478_2060643906105638912_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Z-KK-dL8PBIAX9Bmo1P&_nc_ht=scontent.fhyd13-1.fna&oh=808c2ded5f0ef2b74fae5613651c2453&oe=6079C228',  location: 'ED Cell, Vasavi College of Engineering', id: '1',  details: 'Swayam Orientation Session was held on 21st August 2019 to welcome all the students joining the team that year. The program was graced by the presence of Mr. Umesh Thota, our Chief Guest. Mr. Thota is the founder of AuthBase, a deeptech cybersecurity startup that uses artificial intelligence and machine learning to identify and mitigate attacks across networks. Dr. S.V. Ramana, the principal, and Dr. T Ramamohan Rao, the head of the Mechanical Department also presided over the gathering. The session began by welcoming the dignitaries onto the dais, followed by lighting of the lamp and a prayer song. The principal and HoD congratulated the existing members of Swayam for their success so far. They also encouraged the new-comers to do their best in their respective speeches. This was followed by an interactive session with the Chief Guest, Umesh Thota. He shared his experience of launching his start-up and the hardships encountered along the way. He was truly an entrepreneurial inspiration to everyone present. The program progressed with Shreya, a former Swayam member, talking about the importance of working in a team. She, along with the Chief Guest, assigned duties to the  Swayam Team. 2019&#39;s Swayam team was declared to work under the leadership of Ankita Reddy and Shiva Kumar Gattu, as the President and Vice President respectively. K. I. Spurgeon, the in-charge of Swayam, spoke earnestly about being the backbone of the ED Cell and encouraged students to maximize their potential. The year&#39;s plan of action was explained by Ankita to give insights into the wonderful projects. The dignitaries were presented with flowering plants as a token of appreciation. The session came to an end with the Vote of Thanks by Shiva Kumar.'}
		const event2 = {title: 'Design Thinking Workshop', status: true, date: '6th November, 2019.', location: 'QEEE Hall, Vasavi College of Engineering', id: '2', details: 'The Design Thinking Workshop was organized by Swayam and held on 6th November 2019. Students were mentored by Ms. Radhika Meenakshi Shankar, a professor of Entrepreneurship and Finance at Amity Business School. She is also the founder of Wise Owl Consulting, an organisation that guides SMEs in developing their digital strategy. The one-day interactive workshop was divided into two sessions. The morning session focussed on observation and idea generation. Students were encouraged to empathize, identify and define problems they see around them. The evening session focussed on ideation and creative problem-solving. This was followed by a team-building activity where students worked in groups to build stable balloon towers. Ms. Radhika Shankar used her expertise and insight to make students participate in activities that illustrate Design Thinking. She successfully lighted a spark of curiosity to help the students further explore these ideas. Each student left the workshop with hands-on experience in Design Thinking and plenty of pleasant memories.'}
		const event3 = {title: 'Swayam Orientation Session', status: true, date: '21st August 2019.',  location: 'ED Cell, Vasavi College of Engineering', id: '3',  details: 'Swayam Orientation Session was held on 21st August 2019 to welcome all the students joining the team that year. The program was graced by the presence of Mr. Umesh Thota, our Chief Guest. Mr. Thota is the founder of AuthBase, a deeptech cybersecurity startup that uses artificial intelligence and machine learning to identify and mitigate attacks across networks. Dr. S.V. Ramana, the principal, and Dr. T Ramamohan Rao, the head of the Mechanical Department also presided over the gathering. The session began by welcoming the dignitaries onto the dais, followed by lighting of the lamp and a prayer song. The principal and HoD congratulated the existing members of Swayam for their success so far. They also encouraged the new-comers to do their best in their respective speeches. This was followed by an interactive session with the Chief Guest, Umesh Thota. He shared his experience of launching his start-up and the hardships encountered along the way. He was truly an entrepreneurial inspiration to everyone present. The program progressed with Shreya, a former Swayam member, talking about the importance of working in a team. She, along with the Chief Guest, assigned duties to the  Swayam Team. 2019&#39;s Swayam team was declared to work under the leadership of Ankita Reddy and Shiva Kumar Gattu, as the President and Vice President respectively. K. I. Spurgeon, the in-charge of Swayam, spoke earnestly about being the backbone of the ED Cell and encouraged students to maximize their potential. The year&#39;s plan of action was explained by Ankita to give insights into the wonderful projects. The dignitaries were presented with flowering plants as a token of appreciation. The session came to an end with the Vote of Thanks by Shiva Kumar.'}
		const event4 = {title: 'E- Summit 2k19', status:true, date: '19th and 20th January 2019', location: 'Tagore auditorium, OU', id: '4',  details: 'This event was not just a conference but a conclave of inspiring talks, panel discussions, tech-entrepreneurs, idea-pitching, and women entrepreneurs. The workshop on Day 1 of the Summit aimed at teaching the participants diverse aspects of entrepreneurship such as generating, analyzing, executing and modifying ideas. On Day-2 of the Summit, there was a competition in which the participants had an opportunity to present their ideas to all student delegates, mentors, and investors from the industry. This event provided an excellent chance for all students to learn, know and showcase their business talents. It was not just for business enthusiasts but also for every student who was looking for guidance in career prospects.'}
		const eventdetails = [event1, event2, event3, event4]
		eventdetails.forEach(event => {
			if(event.id === eventid)
			{
				console.log(event)
				this.setState({foundevent: event})
			}
			else
			{
				console.log('Page Not found')
			}
		});
	}
	render()
	{
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