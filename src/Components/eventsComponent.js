import React from 'react'
import {NavLink} from 'react-router-dom'

//import other components here
import '../Stylesheets/Events.css'

const eventComponent = (props) =>
{
  const eventsmapped  = props.eventdb.map((event) => {
    const urlid = event.title
    const baseurl = '/events/'
    const finalurl = baseurl.concat(urlid)
		return(
			<React.Fragment>
        <div className={event.status ? "ev-div-card pastevent" : "ev-div-card"}>
        <p className='ev-p-title'>{event.title} </p>
          <p className='ev-p-date'>{event.date}</p>
          <p className='ev-p-info'>{event.tagline}</p>
          <p className={event.status ? "ev-p-btn disabled" : "ev-p-btn hidden"}>Registrations closed</p>   
          <NavLink to= {finalurl} className={event.status ? "ev-p-btn hidden" : "ev-p-btn"} exact>Register Now</NavLink>     
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
      <p>
      </p>
      <div className='ev-div-event-list'>
        {eventsmapped}
      </div>
		</div>
	)
}

export default eventComponent