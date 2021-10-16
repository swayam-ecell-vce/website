import React,{useState} from "react"
import "../Stylesheets/Recruitment.css"
import hexagon from "../media/rocky-wall.png";
import bulb from "../media/bulb.gif";

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
        <img src={bulb} alt="Bulb on and off" height="50px" width="50px" />
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
	return(
		 <div>
			<HexagonBulbs className="bulb1" top="50" left="10" />
			<HexagonBulbs className="bulb2" top="10" left="80" />
			<h1 id="hire">We're Hiring!</h1>
			<div className="line"></div>
			<div className="cards">
				<HexagonCards
				className="card1"
				deptName="Dept"
				deptDesc="Something"
				top="10%"
				left="65%"
				/>
				<HexagonCards
				className="card2"
				deptName="Dept"
				deptDesc="Something"
				top="10%"
				left="15%"
				/>
			</div>
		</div>
	)
}

export default recruitmentComponent;
