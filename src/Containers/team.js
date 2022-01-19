import React, { Component } from "react";
import TeamComponent from "../Components/teamComponent";

import Footer from "./Footer"

class Team extends Component {
	render() {
		return (
			<React.Fragment>

				<TeamComponent />
				<Footer/>
			</React.Fragment>
		);
	}
}

export default Team;
