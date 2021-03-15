import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Stylesheets/Incubator.css";

const incubatorComponent = (props) => {
  const images = [
    "https://images.unsplash.com/photo-1505017791108-7b40f307cdc5?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1615477014681-de625be36eba?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEd0ckJTY3YxYjVNfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542314820-e04ce1d3d81a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    adaptiveHeight: true,
  };

  return (
    <div className="inc-div-main">
      <p className="inc-p-head">Swayam Incubator</p>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {images.map((image_src, index) => (
            <div className="slider" key={index}>
              <img src={image_src} className="img" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="inc-div-jumbo">
        <p className="inc-p-abt-head">What is Swayam Incubator?</p>
        <div className="inc-abt-wrapper">
          <div className="inc-img-abt"></div>
          <p className="inc-p-content">
            Enim esse elit cupidatat laborum Sint labore minim officia aliquip
            aliquip cillum voluptate et do dolor Lorem. Aliquip minim in
            incididunt ut elit non cillum consectetur cupidatat anim id qui
            quis. Elit amet sint ullamco ex minim occaecat non ex eiusmod.
            Consequat eiusmod enim aute adipisicing. Pariatur quis amet commodo
            Lorem id labore eiusmod laborum minim non consectetur. Nulla culpa
            do anim commodo mollit deserunt non ipsum minim incididunt voluptate
            et. ametUllamco commodo in amet sint. Elit laboris exercitation ut
            sunt cupidatat deserunt nisi laborum sit ex ad excepteur. Non aute
            id laboris et. Aliqua sunt non sint pariatur voluptate. Consectetur
            commodo cupidatat elit ad anim esse ut. Lorem mollit consequat ea
            mollit officia amet dolore laborum fugiat excepteur cupidatat in.
            amet in aliquip in dolore reprehenderit. Ex laboris dolor nulla esse
            consectetur consectetur duis in id enim. Adipisicing amet dolor
            incididunt ea ad qui. Sint in cillum eu voluptate deserunt nostrud
            sunt exercitation reprehenderit culpa cillum. Non minim ea commodo
            dolore deserunt est fugiat.
          </p>
        </div>
      </div>
      <div className="inc-div-facility">
        <div class="inc-fac-card">
          <div class="inc-fac-image">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div class="inc-fac-details">
            <div class="inc-fac-content">
              <h1>
                Mentors
                <br />
                <span>team leader</span>
              </h1>
              <p>
                Lorem ipsum is simple dummy text on the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div class="inc-fac-card">
          <div class="inc-fac-image">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div class="inc-fac-details">
            <div class="inc-fac-content">
              <h1>
                Mentors
                <br />
                <span>team leader</span>
              </h1>
              <p>
                Lorem ipsum is simple dummy text on the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div class="inc-fac-card">
          <div class="inc-fac-image">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div class="inc-fac-details">
            <div class="inc-fac-content">
              <h1>
                Mentors
                <br />
                <span>team leader</span>
              </h1>
              <p>
                Lorem ipsum is simple dummy text on the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default incubatorComponent;
