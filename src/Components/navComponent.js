import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Stylesheets/Navbar.css'

const navcomponent = (props) =>
{
	return(
		<ul className='Nav-ul-main'>
			<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
				Swayam
			</NavLink>
			<NavLink to='/incubator' className='Nav-li' activeClassName='selected' exact>
				Incubator
			</NavLink>
			<NavLink to='/events' className='Nav-li' activeClassName='selected' exact>
				Events
			</NavLink>
			<NavLink to='/about' className='Nav-li' activeClassName='selected' exact>
				About Us
			</NavLink>
		</ul>
	)
}

export default navcomponent