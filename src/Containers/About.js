import React, {Component, Container} from 'react'

//import other containers here
import Navbar from './Navbar'
import Footer from './Footer'
import AboutComponent from '../Components/aboutComponent'

class AboutUs extends Component
{
	render()
	{
		return(
			<div>
				<Navbar />
				<AboutComponent />
				<Footer />
			</div>
		)
	}
}

export default AboutUs