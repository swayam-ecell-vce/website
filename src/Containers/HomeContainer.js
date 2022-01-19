import React, {Component, lazy, Suspense} from 'react'

//import other containters here

import Footer from './Footer'
import HomeComponent from '../Components/homeComponent'
import '../Stylesheets/HomeContainer.css'

class HomeContainer extends Component {

	render()
	{
		return(
			<React.Fragment>

			<div className='Home-Main-Div'>
				<HomeComponent />
			</div>
			<Footer />
			</React.Fragment>
		)
	}

}

export default HomeContainer