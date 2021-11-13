import React, { useState } from "react";
import mechhod from "../media/Mech_Hod.jpg"
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
                    {/* <div class="call_btn">
                        <a href="#" class="btn_icon">
                            <i class="fas fa-phone-alt"></i>
                            <span class="circle"></span>
                        </a>
                    </div> */}
                </div>
            </div>
    );
};

const teamComponent = () => {

    const teamDetails_hod = [
        {
            image: mechhod,
            name: "Dr. TINNAVELLI RAMAMOHAN RAO",
            designation: "Founder",
        },
    ] 

    const teamDetails_faculty = [
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "David",
            designation: "hod_",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Spurgeon",
            designation: "hod_",
        },
    ] 

    const teamDetails_president = [
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Jaswanth",
            designation: "hod_",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Srikar",
            designation: "hod_",
        },
    ] 


    const teamDetails_deptHead = [
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
        },
        {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            name: "Hod",
            designation: "hod_",
        },
    ] 

	return (
        <>
        <h1 className = "header"> OUR TEAM </h1>
        <div class="container">
            {/* <h1 className = "header"> OUR TEAM </h1> */}
            <div class="grid">
                {teamDetails_hod.map((teamvar)=>{
                    return <Cards
                        image = {teamvar.image}
                        name = {teamvar.name}
                        designation = {teamvar.designation}
                    />
                })}
            </div>
        </div>
        
        <h1 className = "header"> OUR TEAM1 </h1>
        <div class="container">
            {/* <h1 className = "header"> OUR TEAM </h1> */}
            <div class="grid">
                {teamDetails_faculty.map((teamvar)=>{
                    return <Cards
                        image = {teamvar.image}
                        name = {teamvar.name}
                        designation = {teamvar.designation}
                    />
                })}
            </div>
        </div>

        <h1 className = "header"> OUR TEAM1 </h1>
        <div class="container">
            {/* <h1 className = "header"> OUR TEAM </h1> */}
            <div class="grid">
                {teamDetails_president.map((teamvar)=>{
                    return <Cards
                        image = {teamvar.image}
                        name = {teamvar.name}
                        designation = {teamvar.designation}
                    />
                })}
            </div>
        </div>
        
        <h1 className = "header"> OUR TEAM2 </h1>
        <div class="container">
            {/* <h1 className = "header"> OUR TEAM </h1> */}
            <div class="grid">
                {teamDetails_deptHead.map((teamvar)=>{
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