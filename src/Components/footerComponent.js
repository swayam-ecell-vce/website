import React from "react";
import TextField from "@material-ui/core/TextField";
import {
	FaInstagram,
	FaLinkedin,
	FaLinkedinIn,
	FaYoutube,
	FaSpotify,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "../Stylesheets/Footer.css";


const nameRegularExpression = /^([a-zA-Z]+[\s]*){3,15}$/;
const emailRegularExpression = /^$|^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z ]{2,})$/;
const numberRegularExpression = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/; 
const subjectRegularExpression = /^([a-zA-Z0-9]+[\s\.\?\_\-\!\,\\\/\<\>\:\;\"\'\[\]\{\}\(\)\*\&\#]*){3,30}$/;
const messageRegularExpression = /^([a-zA-Z0-9]+[\s\.\?\_\-\!\,\\\/\<\>\:\;\"\'\[\]\{\}\(\)\*\&\#]*){5,100}$/;



const footerComponent = (props,details) =>
{
	return (
		<div className="footer">
			<p className="foo-p-title">Have a Query? Get in Touch</p>
			<div className="foo-div-det">
				<div classname="foo-div-mapaddress">
					<div className="foo-div-map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6508028487688!2d78.3804256148477!3d17.3805281880827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb942a2497f349%3A0x5c30ca8d2ffb8734!2sVasavi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1615702592047!5m2!1sen!2sin"
							width="100%"
							height="100%"
							allowfullscreen="true"
							loading="lazy"
							passive={true}
						></iframe>
					</div>
					<br />
					<p className="foo-p-address">
						9-5-81, Swayam E-Cell, <br />
						Vasavi College of Engineering, Ibrahimbagh, <br />
						Hyderabad - 500 031 <br />
						Telangana, India
					</p>
					<br />
					<p className="foo-p-address foo-p-contact">
						Swayam@vce.ac.in <br />
						+91 9642000800
					</p>
					<br />
					<div className="foo-div-logos">
						<a
							className="foo-link"
							href="https://instagram.com/ecellvce?igshid=7jx0mp2y8kkp"
							target="_blank"
						>
							<FaInstagram size={30} />
						</a>
						<a
							className="foo-link"
							href="https://www.linkedin.com/in/swayamvce"
							target="_blank"
						>
							<FaLinkedinIn size={30} />
						</a>
						<a
							className="foo-link"
							href="https://youtube.com/channel/UCoVsbo-Sxgda-efVL6QuH3g"
							target="_blank"
						>
							<FaYoutube size={30} />
						</a>
						<a className="foo-link" href="#" target="_blank">
							<FaSpotify size={30} />
						</a>
					</div>
				</div>
				<div className="foo-div-form">
					<form onSubmit={props.formhandler}>
						<TextField
							required
							id="standard-required name"
							label="Name"
							name="name"
							defaultValue=""
							autoComplete="false"
							aria-label="user name"
							onChange={props.changehandler}
							error={nameRegularExpression.test(props.details.name)?false:true}
							helperText={
								nameRegularExpression.test(props.details.name) ? "" : "Please Enter correct details"
							}
						/>{" "}
						<br /> <br />
						<TextField
							required
							id="standard-required mail"
							label="Email"
							name="mail"
							defaultValue=""
							aria-label="user email"
							onChange={props.changehandler}
							error={
								!props.details.mail?false:(emailRegularExpression.test(props.details.mail)?false:true)
							}
							helperText={
								!props.details.mail?false:(emailRegularExpression.test(props.details.mail)?"":"PLease enter valid email.")
							}
						/>{" "}
						<br /> <br />
						<TextField
							required
							id="standard-required number"
							label="Phone Number"
							name="number"
							defaultValue=""
							aria-label="user number"
							onChange={props.changehandler}
							error={
								!props.details.number?false:(numberRegularExpression.test(props.details.number)?false:true)
							}
							helperText={
								!props.details.number?false:(numberRegularExpression.test(props.details.number)?"":"PLease enter valid phone number")
							}
						/>{" "}
						<br /> <br />
						<TextField
							required
							id="standard-required subject"
							label="Subject"
							name="subject"
							defaultValue=""
							aria-label="user subject"
							onChange={props.changehandler}
							error={
								subjectRegularExpression.test(props.details.subject)? false: true
							}
							helperText={
								subjectRegularExpression.test(props.details.subject) ? "" : "Please Enter correct details. Subject should not exceed 30 characters"
							}
							
						/>{" "}
						<br /> <br />
						<TextField
							required
							id="standard-required message"
							label="Message"
							name="message"
							multiline
							rows={7}
							defaultValue=""
							aria-label="user comment"
							onChange={props.changehandler}
							error={
								messageRegularExpression.test(props.details.message) ? false : true
							}
							helperText={
								messageRegularExpression.test(props.details.message) ? "" : "Please Enter correct details. Message should not exceed 100 characters"
							}
						/>
						<button type="submit" className="foo-btn-submit">
							{" "}
							Submit{" "}
						</button>
					</form>
				</div>
			</div>
			<div className="foo-div-main">
				<div className="foo-li foo-div-tm">
					<p>2021 Swayam E-Cell, VCE</p>
				</div>
				<ul className="Nav-ul-main foot-ul">
					<NavLink
						to="/about"
						className="foo-li Nav-li"
						activeClassName="selected"
						exact
					>
						About Us &nbsp; | &nbsp;
					</NavLink>
					<NavLink
						to="/#"
						className="foo-li Nav-li"
						activeClassName="selected"
						exact
					>
						Initiatives &nbsp; | &nbsp;
					</NavLink>
					<NavLink
						to="/#"
						className="foo-li Nav-li"
						activeClassName="selected"
						exact
					>
						Resources &nbsp; | &nbsp;
					</NavLink>
					<NavLink
						to="/#"
						className="foo-li Nav-li"
						activeClassName="selected"
						exact
					>
						Partners &nbsp; | &nbsp;
					</NavLink>
					<NavLink
						to="/hiring"
						className="foo-li Nav-li"
						activeClassName="selected"
						exact
					>
						Join Us &nbsp; | &nbsp;
					</NavLink>
					<NavLink
						to="/ourteam"
						className="foo-li Nav-li"
						activeClassName="selected"
						exact
					>
						Our Team
					</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default footerComponent;
