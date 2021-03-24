import React from 'react'
import {NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

//import other components here
import '../Stylesheets/Events.css'

const EventComponent = (props) =>
{
  var history = useHistory()
  const eventclickhandler = (event) =>
  {
    console.log(event.target.id)
    const baseurl = '/events/'
    const eventurl = event.target.id
    const finalurl = baseurl.concat(eventurl)
    history.push(finalurl)
  }
  const eventsmapped  = props.eventdb.map((event) => 
  {
    const urlid = event.title
    const baseurl = '/events/'
    const finalurl = baseurl.concat(urlid)
    return(
      <React.Fragment>
        <div className={event.status ? "ev-div-card pastevent" : "ev-div-card"} id={event.title} onClick = {eventclickhandler}>
          <p className='ev-p-title' id={event.title}>{event.title} </p>
          <p className='ev-p-date' id={event.title}>{event.date}</p>
          <p className='ev-p-info' id={event.title}>{event.tagline}</p>
          <div className='ev-btn-grp'>
            <NavLink id={event.title} to= {finalurl} className="ev-p-btn" exact>More Details</NavLink>
            <p className={event.status ? "ev-p-btn disabled" : "ev-p-btn hidden"}>Registrations closed</p>
            <a href ='https://forms.office.com/Pages/ResponsePage.aspx?id=2gmg8pG0u02U6FgJFiVJzUlO1dwao5NGoawk9C6n8HlUMzYxNEQwSlBEUDNBTlpaNjRUS0YySzVDMy4u' className={event.status ? "ev-p-btn ev-btn-register hidden" : "ev-p-btn ev-btn-register"} target='blank'>Register Now</a>
          </div>
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

export default EventComponent