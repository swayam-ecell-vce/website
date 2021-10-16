import React from "react";
import "../Stylesheets/recruitment.css";
import Hexagon from "./Hexagon";

const recruitmentComponent = (props) => {
	return (
		<div className="container">
			<div className="header">
				<h1>Join Us</h1>
			</div>

			<div className="departments">
				<Hexagon
					departmentTitle={"Web Development"}
					departmentDescription={
						"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
					}
				/>
			</div>
		</div>
	);
};
export default recruitmentComponent;
