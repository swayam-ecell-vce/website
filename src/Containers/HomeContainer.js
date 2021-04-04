import React, {Component, lazy, Suspense} from 'react'

//import other containters here
import Navbar from './Navbar'
import Footer from './Footer'
import HomeComponent from '../Components/homeComponent'
import '../Stylesheets/HomeContainer.css'

class HomeContainer extends Component {

	render()
	{
		const visitor1 = {img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80', text:'You guys  provided young enthusiasts exposure to experts with various initiatives,successes and failures, and that is truly Amazing.', author:'Sri Charan Lakkaraju', title:'Forbes 30 Under30 Asia 2018 | Founder, stuMagz'}
		const visitor2 = {img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80', text:'You guys  provided young enthusiasts exposure to experts with various initiatives,successes and failures, and that is truly Amazing.', author:'Sri Charan Lakkaraju', title:'Forbes 30 Under30 Asia 2018 | Founder, stuMagz'}
		const startup1 = {img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80', title:'Cure Cloud India', text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ... Read More '}
		const startup2 = {img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80', title:'Cure Cloud India', text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ... Read More '}
		const startup3 = {img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80', title:'Cure Cloud India', text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ... Read More '}
		const startup4 = {img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80', title:'Cure Cloud India', text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ... Read More '}
		const visitors={visitor1,visitor2}
		const startups={startup1,startup2,startup3,startup4}
		return(
			<React.Fragment>
			<Navbar />
			<div className='Home-Main-Div'>
				<HomeComponent  visitorsdetails={visitors} startupsdetails={startups}/>
			</div>
			<Footer />
			</React.Fragment>
		)
	}

}

export default HomeContainer