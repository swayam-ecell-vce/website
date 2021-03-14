import React, {Component, Container} from 'react'

//import components here
import FooterComponent from '../Components/footerComponent'
import '../Stylesheets/Footer.css'

class Footer extends Component
{
	render()
	{
		return(
			<React.Fragment>
			<div className='Footer-diff-line'></div>
			<div className= 'Footer-Div-Main'>
				<FooterComponent />
			</div>
			</React.Fragment>
		)
	}
}

export default Footer