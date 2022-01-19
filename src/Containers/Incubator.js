import React, {Component} from 'react'
import Footer from './Footer'

//import other containers and components here

import IncubatorComponent from '../Components/incubatorComponent'

class Incubator extends Component
{
	render()
	{
		return(
			<React.Fragment>

				<IncubatorComponent />
				<Footer />
			</React.Fragment>
		)
	}
}

export default Incubator