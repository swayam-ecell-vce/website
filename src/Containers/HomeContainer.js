import React, {Component} from 'react'

//import other containters here
import Navbar from './Navbar'
import Footer from './Footer'
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
			<Footer />
			</React.Fragment>
		)
	}

}

export default HomeContainer