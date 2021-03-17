import React from 'react'
import {NavLink} from 'react-router-dom'

//import other components here
import '../Stylesheets/Events.css'

const eventComponent = (props) =>
{
  const eventsmapped  = props.eventdb.map((event) => {
    const urlid = event.id
    const baseurl = '/events/'
    const finalurl = baseurl.concat(urlid)
		return(
			<React.Fragment>
        <div className='ev-div-card'>
        <p className='ev-p-title'>{event.title} </p>
          <p className='ev-p-date'>{event.date}</p>
          <p className='ev-p-info'>{event.tagline}</p>   
          <NavLink to= {finalurl} className='ev-p-btn' exact>Register Now</NavLink>     
        </div>
        </React.Fragment>
		)
  })

  //Need to connect the events with a database and get the details from there using Axios

	return(
		<div className='ev-div-main'>
			<p className='ev-p-head'>
				Events <br/>
			</p>
      <div className='ev-div-event-list'>
        {eventsmapped}
      </div>
		</div>
	)
}

export default eventComponent