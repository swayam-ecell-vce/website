import React, {Component} from 'react'

//import components here
import Navcomponent from '../Components/navComponent'
import '../Stylesheets/Navbar.css'

class Navbar extends Component
{
	render()
	{
		return(
			<div className= 'Nav-Div-Main'>
				<Navcomponent />
			</div>
		)
	}
}

export default Navbar