import React, {Component} from 'react'

//import other containters here
import Navbar from './Navbar'
import HomeComponent from '../Components/homeComponent'
import '../Stylesheets/HomeContainer.css'

class HomeContainer extends Component {

	render()
	{
		return(
			<React.Fragment>
				<Navbar />
			<div className='Home-Main-Div'>
				<HomeComponent />
			</div>
			</React.Fragment>
		)
	}

}

export default HomeContainer