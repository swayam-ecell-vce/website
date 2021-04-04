
import React, {useState, useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'

import '../Stylesheets/Navbar.css'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const slidebarData = [
    {
        title: 'Swayam',
        path: '/',
        cNAme: 'nav-text'
    },
    {
        title: 'Incubator',
        path: '/incubator',
        cNAme: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        cNAme: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about',
        cNAme: 'nav-text'
    }
]

const Navcomponent = (props) =>
{
	let [width, height]=useWindowSize()
	const [sidebar, setSidebar]=useState(false)
	const showSidebar = () => setSidebar(!sidebar)

	if(width > 720)
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
	else
	{
		return(
			<>
				<div className='nav-toggle-main'>
					<Link to='#' className='toggle-menu-bars'>
						<FaBars onClick={showSidebar} />
					</Link>
					<span className='nav-toggle-title'>TITLE</span>
				</div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className='nav-menu-items' onClick={showSidebar}>
						<li className='navbar-toggle'>
							<Link to='#' className='menu-bars'>
								<AiOutlineClose />
							</Link>
						</li>
						{slidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cNAme}>
									<Link to={item.path}>
										<span>{item.title}</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</>
		)
	}	
}

export default Navcomponent