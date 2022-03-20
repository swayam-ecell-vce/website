
import React, {useState, useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'

import '../Stylesheets/Navbar.css'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai";
import swayamLogo from "../media/swayam_logo-removebg-preview.png";

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
        title: 'Home',
        path: '/',
        cNAme: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
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
		<div className="Nav-Bar">
		<div className="Nav-front">
			<NavLink to="/" className="">
				<img src={swayamLogo} alt="swayam-logo"></img>
			</NavLink>
		</div>
			
		<ul className='Nav-ul-main'>
			<NavLink to='/' className='Nav-li' activeClassName='selected' exact>
				Home
			</NavLink>
			<NavLink to='/blog' className='Nav-li' activeClassName='selected' exact>
				Blog
			</NavLink>
			<NavLink to='/events' className='Nav-li' activeClassName='selected' exact>
				Events
			</NavLink>
			<NavLink to='/about' className='Nav-li' activeClassName='selected' exact>
				About Us
			</NavLink>
		</ul>
		</div>
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
					<span className='nav-toggle-title'>Swayam</span>
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