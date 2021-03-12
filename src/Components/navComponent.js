import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Stylesheets/Navbar.css'

const navcomponent = (props) =>
{
	return(
		<ul className='Nav-ul-main'>
			<NavLink to='/events' className='Nav-li' activeClassName='selected' exact>
				Events
			</NavLink>
			<NavLink to='/incubator' className='Nav-li' activeClassName='selected' exact>
				Incubator
			</NavLink>
			<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
				Resources
			</NavLink>
			<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
				Swayam
			</NavLink>
		</ul>
	)
}

export default navcomponent