import React, {Component, Container} from 'react'

//import other containers here
import Navbar from './Navbar'
import AboutComponent from '../Components/aboutComponent'

class AboutUs extends Component
{
	render()
	{
		return(
			<div>
				<Navbar />
				<AboutComponent />
			</div>
		)
	}
}

export default AboutUs