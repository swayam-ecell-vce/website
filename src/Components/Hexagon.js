import React from "react";
import "../Stylesheets/Hexagon.css";

const Hexagon = (props) => {
	return (
		<div className="hexagon">
			<div className="hexagonContent">
				<h2>{props.departmentTitle}</h2>
				<h4>{props.departmentDescription}</h4>
			</div>
		</div>
	);
};

export default Hexagon;
