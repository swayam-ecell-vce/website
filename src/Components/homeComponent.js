import React from 'react'
import '../Stylesheets/HomeContainer.css'
import styled from 'styled-components'
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import { Grid, SvgIcon } from '@material-ui/core';

const Div = styled.div `

height: 50vh;
width: 70%;
margin-top: 4%;
padding: 3%;
background-image: url(${props => props.urlparam || 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
box-shadow: 10px 10px #a361f3;
margin-bottom: 3%;

`

const homeComponent = (props) =>
{
	const divclickhandler = (event) =>
	{
		//configure the click handler user React.history.push or something better
	}
	return(
		<React.Fragment>
		<div className='home-div-header'>
			<p className='home-p-title'>
			<span className='home-span-Swayam'>//Swayam Logo//</span> <br />
			The <br />
			<span className='home-span-titledecor'>Entrepreneurship</span> cell  <br />
			of <span className='home-span-titledecor'>Vasavi</span> College of Engineering
			</p>
			<p className='home-p-tagline'>
				"Students to Innovators"
			</p>
		</div>
		<div className='home-div-main'>
			<div className='home-div-sec' onClick={divclickhandler}>
				<div className='home-div-ter'>
					Incubator
				</div>
			</div>
			<div className='home-div-sec'>
				<div className='home-div-ter'>
					Swayam Events
				</div>
			</div>
		</div>
		{/* Add the numbers speak line after this */}

		<div className='home-div-numb-title'>
			Swayam in Numbers
		</div>
		<div className='home-div-numb'>
			<EmojiEventsOutlinedIcon style={{ fontSize: 55 }} titleAccess = 'Event'></EmojiEventsOutlinedIcon>
			<EmojiObjectsIcon style={{fontSize: 55}}></EmojiObjectsIcon>
			<PeopleOutlineRoundedIcon style={{fontSize: 55}}></PeopleOutlineRoundedIcon>
			<LocalAtmRoundedIcon style={{fontSize: 55}}></LocalAtmRoundedIcon>
			<EmojiPeopleRoundedIcon style={{fontSize: 55}}></EmojiPeopleRoundedIcon>
			<BusinessRoundedIcon style={{fontSize: 55}}></BusinessRoundedIcon>
		</div>
		
		<div className='home-div-numb-sec'>
			<p>
				50+ Events <br /> Hosted
			</p>
			<p>
				23+ Startups <br /> Incubated
			</p>
			<p>
				5000+ Students <br /> Impacted
			</p>
			<p>
				15,00,000+ <br /> Funds <br /> Raised
			</p>
			<p>
				70+ <br />  Created <br /> Young Leaders
			</p>
			<p>
				70+ <br />  Collaborations <br /> made
			</p>
		</div>
		<div className='home-div-caro-title'>
			Here’s What Some of Our Prominent Visitors had to Say
		</div>
		<div className='home-div-caro'>
			<Div urlparam = '/1.PNG'>

			</Div>
		</div>
		</React.Fragment>
		
	)
}

export default homeComponent