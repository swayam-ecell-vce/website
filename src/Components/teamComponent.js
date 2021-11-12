import React, { useState } from "react";
import "../Stylesheets/team.css";

const Cards = (props) => {
    return (
        <div class="card">
                <div class="card_img">
                    <img src={props.image} alt=""/>
                </div>
                <div class="card_body">
                    <h2 class="card_title">{props.name}</h2>
                    <h6 class="designation">{props.designation}</h6>
                    <div class="call_btn">
                        <a href="#" class="btn_icon">
                            <i class="fas fa-phone-alt"></i>
                            <span class="circle"></span>
                        </a>
                    </div>
                </div>
            </div>
    );
};

const teamComponent = () => {

    const teamDetails = [
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
            quote: "work hard, party harder",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
            quote: "work hard, party harder",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
            quote: "work hard, party harder",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
            quote: "work hard, party harder",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
            quote: "work hard, party harder",
        },
    ] 

	return (
        <>
        <div class="container">
        <div class="grid">
            {teamDetails.map((teamvar)=>{
                return <Cards
                    image = {teamvar.image}
                    name = {teamvar.name}
                    designation = {teamvar.designation}
                />
            })}
        </div>
    </div>
   </>
    );
};

export default teamComponent;