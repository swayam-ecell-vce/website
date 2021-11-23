import React from "react";
import "../Stylesheets/Recruitment.css";
import Cards from './Cards'



const recruitmentComponent = () => {
	return (
		<div className="Hiringcontainer">
			<div className="Hiringheader">
				<h1 id="hire">We're Hiring!</h1>
				<h2 className="headerDescription">
					You are just one step away from future you! <br />
					{/*<i className="fas fa-arrow-to-right"></i>*/}
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSenPGNZsfzszUkgFaxBwDmJynVwsyMUZQV1PybamlfDs0475w/viewform"
						target="_blank"
						rel="noreferrer"
					>
						<button className="applyButton">Apply Here</button>
					</a>
					{/*<i className="fas fa-arrow-to-left"></i>*/}
				</h2>
			</div>
			<Cards />
		</div>
	);
};

export default recruitmentComponent;
