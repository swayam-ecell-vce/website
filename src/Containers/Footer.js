import React, {Component, Container} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import instance from '../axios/instance'

//import components here
import FooterComponent from '../Components/footerComponent'
import '../Stylesheets/Footer.css'

class Footer extends Component
{
	state = 
	{
		name: null,
		mail: null,
		number: null,
		subject: null,
		message: null,
		valid: true
	}
	render()
	{
		const formhandler = (event) =>
		{
			event.preventDefault()

			const details = {
				name: this.state.name,
				mail: this.state.mail,
				number: this.state.number,
				subject: this.state.subject,
				message: this.state.message
			}
			instance.post('/formsubmissions.json', details).then(res =>
				{
					toast.success('Submitted the Form Succesfully! Someone should get in touch with you soon', {style: {
						borderRadius: '10px',
						background: '#6200EE',
						color: 'white',
					  }});
					event.target.reset()
					console.log(res.data)
				}).catch(err =>
					{
						toast.error('We ran into an error submitting your form! Please send us a mail at swayam.vasavi@gmail.com', {style: {
							borderRadius: '10px',
							background: 'rgb(224, 65, 65)',
							color: 'white',
						  }});
						console.log(err)
					})
		}
		const handlechange = (event) => {
			const target = event.target
			const value = target.value
			const name = target.name
			console.log(value)
			this.setState({[name]: value}, () =>
			{
				console.log(this.state.name)
			})
		}
		return(
			<React.Fragment>
			<div className='Footer-diff-line'></div>
			<div className= 'Footer-Div-Main'>
				<FooterComponent formhandler = {formhandler} changehandler = {handlechange}/>
			</div>
			<Toaster />
			</React.Fragment>
		)
	}
}

export default Footer