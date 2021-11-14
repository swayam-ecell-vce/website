import React, { Component } from "react";

//import components here
import RecruitmentComponent from "../Components/recruitmentComponent";
// import Footer from "./Footer";
import Navbar from "../Containers/Navbar"
import "../Stylesheets/Navbar.css";

class Recruitment extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar/>
				<RecruitmentComponent />
			</React.Fragment>
		);
	}
}

export default Recruitment;
