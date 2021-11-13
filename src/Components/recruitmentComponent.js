import React, { useState } from "react";
import "../Stylesheets/Recruitment.css";

const departmentContent = [
	{
		name: "Incubation",
		description: "We help startups in our college grow",
		color: "#444444",
	},
	{
		name: "Event Management",
		description: "we organize all the cool events in our college",
		color: "#C70D3A",
	},
	{
		name: "Marketing",
		description: "We ensure everyone knows the work we do",
		color: "#29435C",
	},
	{
		name: "Human Resource",
		description: "We take care of people and problems",
	},

	{
		name: "PR",
		description: "We keep our vast network alive",
	},
	{
		name: "Content Creation and Resource Management",
		description: "We make awesome content for swayam",
	},
	{
		name: "Web development",
		description:
			"We are the geek batch in the club taking care of all things technical",
	},
	{
		name: "Design and arts",
		description: "We add the creative spices to the club",
	},
];

const Cards = (props) => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div className="Cardsmain">
			<div className="cardContainer">
				<div
					className="content"
					onMouseEnter={handleToggle}
					onMouseLeave={handleToggle}
					style={{ backgroundColor: props.color }}
				>
					<h3 className={isActive ? "deptTitle" : "hidden"}>
						{props.deptName}
					</h3>
					<h5 className={isActive ? "hidden" : ""}>
						{props.deptDesc}
					</h5>
				</div>
			</div>
		</div>
	);
};

const recruitmentComponent = () => {
	return (
		<div className="container">
			<div className="header">
				<h1 id="hire">We're Hiring!</h1>
				<h2 className="headerDescription">
					You are just one step away from future you! <br />
                    {/*<i className="fas fa-arrow-to-right"></i>*/}
					<button className="applyButton">Apply Here</button>
                    {/*<i className="fas fa-arrow-to-left"></i>*/}
				</h2>
			</div>
			{/*<div className="planes">
				<i className="fas fa-paper-plane fa-3x" id="plane1"></i>
				<i className="fas fa-paper-plane fa-3x" id="plane2"></i>
	</div>*/}
			{/*<div className="line"></div>*/}
			<div className="cards">
				{departmentContent.map((department) => {
					return (
						<Cards
							className="card"
							deptName={department.name}
							deptDesc={department.description}
							key={department.id}
							color={department.color}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default recruitmentComponent;