import React, { useState } from "react";
import "../Stylesheets/Recruitment.css";
import bulb from "../media/bulb.gif";

const departmentContent = [
	{
		name: "Incubation",
		description: "We help startups in our college grow",
	},
	{
		name: "Event Management",
		description: "we organize all the cool events in our college",
	},
	{
		name: "Marketing",
		description: "We ensure everyone knows the work we do",
	},
	{
		name: "HR",
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
		description: "We are the geek batch in the club taking care of all things technical",
	},
	{
		name: "Design and arts",
		description: "We add the creative spices to the club",
	},
];

const HexagonCards = (props) => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
	};
	return (
		<div
			className="card-container"
			style={{ top: props.top, left: props.left }}
		>
			<div
				className={isActive ? "card" : "card flipped"}
				onClick={handleToggle}
			>
				<figure className="hexagon front">
					<div className="card-content">
						<h1>{props.deptName}</h1>
					</div>
					<span className="see-more">
						<i className="fa fa-repeat"></i>
					</span>
				</figure>
				<figure className="hexagon back">
					<div className="card-content">
						<p>{props.deptDesc}</p>
					</div>
					<span className="see-more">
						<i className="fa fa-repeat"></i>
					</span>
				</figure>
			</div>
		</div>
	);
};

const recruitmentComponent = () => {
	return (
		<div className="container">
			<div className="planes">
				<i className="fas fa-paper-plane fa-3x" id="plane1"></i>
				<i className="fas fa-paper-plane fa-3x" id="plane2"></i>
			</div>
			<div className="header">
				<h1 id="hire">We're Hiring!</h1>
				<h2 className="headerDescription">
					You are just one step away from future you! <br />
					<i class="fas fa-arrow-to-right"></i>
					<button className="applyButton">Apply Here</button>
					<i class="fas fa-arrow-to-left"></i>
				</h2>
			</div>
			<div className="line"></div>
			<div className="cards">
				{departmentContent.map((department) => {
					return (
						<HexagonCards
						className="card"
						deptName={department.name}
						deptDesc={department.description}
						top="10%"
						left="15%"
					/>
					)
				})}
			</div>
		</div>
	);
};

export default recruitmentComponent;
