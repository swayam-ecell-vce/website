import React, { useState } from "react";
import "../Stylesheets/Recruitment.css";
import hexagon from "../media/rocky-wall.png";
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

const HexagonBulbs = (props) => {
	const topBulb = props.top + "%";
	const leftBulb = props.left + "%";
	const topHex = props.top - 4 + "%";
	const leftHex = props.left - 2 + "%";
	return (
		<div>
			<div
				className="hexagon-outer"
				style={{ top: topHex, left: leftHex, position: "absolute" }}
			>
				<img src={hexagon} alt="hexagon" height="110px" width="110px" />
			</div>
			<div
				className="bulb"
				style={{ top: topBulb, left: leftBulb, position: "absolute" }}
			>
				<img
					src={bulb}
					alt="Bulb on and off"
					height="50px"
					width="50px"
				/>
			</div>
		</div>
	);
};

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
			<div className="bulbs">
				<HexagonBulbs className="bulb1" top="50" left="10" />
				<HexagonBulbs className="bulb2" top="10" left="80" />
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
