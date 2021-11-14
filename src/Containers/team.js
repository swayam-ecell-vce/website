import React, { Component } from "react";
import TeamComponent from "../Components/teamComponent";
import Navbar from "./Navbar";

class Team extends Component {
	render() {
		return (
			<>
				<Navbar />
				<TeamComponent />
			</>
		);
	}
}

export default Team;
