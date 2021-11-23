import React, { useState } from "react";

const departmentContent = [
	{
		name: "Incubation",
		description: "We help startups in our college grow",
		color: "#13182e",
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
		color: "#8c1440",
	},

	{
		name: "PR",
		description: "We keep our vast network alive",
		color: "#040a2b",
	},
	{
		name: "Content and Resource Management",
		description: "We make awesome content for swayam",
		color: "#870b6a",
	},

	{
		name: "Web development",
		description:
			"We are the geek batch in the club taking care of all things technical",
		color: "#4f3e14",
		id: 1,
	},

	{
		name: "Web Design",
		description: "We make awesome design for swayam",
		color: "#870b6a",
	},

	{
		name: "Design and arts",
		description: "We add the creative spices to the club",
		color: "",
		id: 2,
	},
];

const Card = (props) => {
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

const Cards = () => {
	return (
		<div className="cards">
			{departmentContent.map((department) => {
				return (
					<Card
						className="card"
						deptName={department.name}
						deptDesc={department.description}
						key={department.id}
						color={department.color}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
