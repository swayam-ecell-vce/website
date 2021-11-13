import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from 'emailjs-com'
import instance from "../axios/instance";

//import components here
import FooterComponent from "../Components/footerComponent";
import "../Stylesheets/Footer.css";

const nameRegularExpression = /^([a-zA-Z]+[\s]*){3,15}$/;
const emailRegularExpression = /^$|^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z ]{2,})$/;
const numberRegularExpression = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
const subjectRegularExpression = /^([a-zA-Z0-9]+[\s.?_\-!,\\/<>:;"'[\]{}()*&#]*){3,30}$/;
const messageRegularExpression = /^([a-zA-Z0-9]+[\s.?_\-!,\\/<>:;"'[\]{}()*&#]*){5,100}$/;

class Footer extends Component {
	
	state = {
		name: null,
		mail: null,
		number: null,
		subject: null,
		message: null,
		valid: true,
		details:{}
	};
	render() {
		const formhandler = (event) => {
			event.preventDefault();

			const details = {
				name: this.state.name,
				mail: this.state.mail,
				number: this.state.number,
				subject: this.state.subject,
				message: this.state.message,
			};
			this.setState({ details: details }, () => {
				console.log(this.state.details)
			})
			if (
				nameRegularExpression.test(this.state.name) &&
				emailRegularExpression.test(this.state.mail) &&
				numberRegularExpression.test(this.state.number) &&
				subjectRegularExpression.test(this.state.subject) &&
				messageRegularExpression.test(this.state.message)
			) {
				instance
					.post("/formsubmissions.json", details)
					.then((res) => {
						toast.success(
							"Submitted the Form Succesfully! Someone should get in touch with you soon",
							{
								style: {
									borderRadius: "10px",
									background: "#d5ff45",
									color: "#001b29",
								},
							}
						)
						let templatevalues = {
							from_name: this.state.name,
							from_mail: this.state.mail,
							subject: this.state.subject,
							message: this.state.message,
						}
						emailjs.send('service_0o5riss', 'template_mgd006b', templatevalues, 'user_DhBWVrqL2P3RiErJBASmS').then(res =>
							{
								console.log('email sent succesfully')
							}).catch(err =>
								{
									console.log('there is an error sending the email')
								})
						event.target.reset();
						console.log(res.data);
					})
					.catch((err) => {
						toast.error(
							"We ran into an error submitting your form! Please send us a mail at swayam.vasavi@gmail.com",
							{
								style: {
									borderRadius: "10px",
									background: "rgb(224, 65, 65)",
									color: "white",
								},
							}
						);
						console.log(err);
					});
			} else {
				toast.error("Please Enter valid Details ");
			}
		};
		const handlechange = (event) => {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			console.log(value);
			this.setState({ [name]: value }, () => {
				console.log(this.state.name);
			});
		};
		return (
			<React.Fragment>
				<div className="Footer-diff-line"></div>
				<div className="Footer-Div-Main">
					<FooterComponent
						formhandler={formhandler}
						changehandler={handlechange}
						details = {this.state.details}
					/>
				</div>
				<Toaster />
			</React.Fragment>
		);
	}
}

export default Footer;
