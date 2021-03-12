import React from 'react'

//import other components here
import '../Stylesheets/Events.css'

const eventComponent = (props) =>
{

  //Need to connect the events with a database and get the details from there using Axios
	return(
		<div className='ev-div-main'>
			<p className='ev-p-head'>
				Events <br/>
			</p>			
      <div className='ev-div-event-list'>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>     
      </div>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>    
      </div>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>     
      </div>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>    
      </div>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>     
      </div>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>    
      </div>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>   
      </div>
      <div className='ev-div-card'>
	    <p className='ev-p-title'>Incubation Contest </p>
        <p className='ev-p-date'>21.03.2021</p>
        <p className='ev-p-info'>Ethereum is a technology that's home to digital money, global payments</p>   
        <a href='/events/1' className='ev-p-btn'>Register Now</a>  
      </div>
      
     
      
      </div>
		</div>
	)
}

export default eventComponent