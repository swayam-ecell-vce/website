import React, { Component } from "react";

//import components here
import RecruitmentComponent from "../Components/recruitmentComponent";
import Footer from "./Footer";

import Cards from "../Components/Cards";
import "../Stylesheets/Navbar.css";


class Recruitment extends Component {
	render() {
		return (
			<React.Fragment>

				<RecruitmentComponent />
				
				<Footer/>
			</React.Fragment>
		);
	}
}

export default Recruitment;
