import React from "react"
import "../Stylesheets/Recruitment.css"

const recruitmentComponent = () => {
	return(
		<div class="recruit">
			<div class = "hexagon-bulbs">
				<div class="hexagon-outer">
				<i class="fal fa-hexagon fa-8x"></i>
				</div>
				<div class = "bulb">
				<img src="../media/output-onlinegiftools.gif" alt="light on and off" width="50px" height="50px" />
				</div>
			</div>
			<h1 id="hiring">We're hiring</h1>
			<div class="card-container">
				<div class="card">
				<figure class="hexagon front">
					<div class="card-content">
					<h1>Dept name</h1>
					</div>
					<span class="see-more"><i class="fa fa-repeat"></i></span>
				</figure>
				<figure class="hexagon back">
					<div class="card-content">
					<p>Description: hsgfbfjhskdslksjfksnfj khjfboooo ooooooooooooooooo</p>
					</div>
					<span class="see-more"><i class="fa fa-repeat"></i></span>
				</figure>
				</div>
			</div>
		</div>
	)
}

export default recruitmentComponent;