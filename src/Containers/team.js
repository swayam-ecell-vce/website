import React, { Component } from "react";
import TeamComponent from "../Components/teamComponent";
import Navbar from "./Navbar";
import Footer from "./Footer"

class Team extends Component {
	render() {
		return (
			<>
				<Navbar />
				<TeamComponent />
				<Footer/>
			</>
		);
	}
}

export default Team;
