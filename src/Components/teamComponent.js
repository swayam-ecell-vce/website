import React, { useState } from "react";
import mechhod from "../media/MechHOD.jpg";
import david from "../media/david.jpg";
import spurgeon from "../media/spurgeon.png";
import pranathi from "../media/EventHead.png";
import aishwarya from "../media/HR_Head.png";
import jaswanth from "../media/President.png";
import srikar from "../media/srikar.png";
import keerthana from "../media/MarketingHead.jpeg";
import suresh from "../media/PRHead.jpg";
import man from "../media/man.jpg"
import woman from "../media/woman.jpg"
import { FaLinkedinIn, FaGithubAlt, FaRedditAlien } from 'react-icons/fa'
import "../Stylesheets/team.css";
const Cards = (props) => {
    return (
        <div class="card">
                <div class="card_img">
                    <img src={props.image} alt=""/>
                </div>
                <div class="card_body">
                <h2 class="card_title">{props.name} <span></span>
                    </h2>
                    <h6 class="designation">{props.designation}</h6>
                    <div className="card_links">
                        <a className="card_links_indi" href={props.linkedinlink} rel="noreferrer" target="_blank"><FaRedditAlien size={20} color = "rgb(255, 69, 0)"/></a>
                        <a className="card_links_indi" href={props.linkedinlink} rel="noreferrer" target="_blank"><FaLinkedinIn size={20} color = "rgb(0, 119, 181)"/></a>
                        <a className="card_links_indi" href={props.linkedinlink} rel="noreferrer" target="_blank"><FaGithubAlt size={20} color = "rgb(110, 84, 148)"/></a>
                    </div>
                </div>
            </div>
    );
};

const teamComponent = () => {

    const teamDetails_hod = [
        {
            image: man,
            name: "Dr. T. Ramamohan Rao",
            designation: "Founder of E-Cell",
            linkedinlink: ""
        },
    ] 

    const teamDetails_faculty = [
        {
            image: man,
            name: "Mr. N.David Raju",
            designation: "E-Cell Coordinator",
            linkedinlink : "https://www.linkedin.com/in/david-raju-n-7a90b729",
        },
        {
            image: man,
            name: "Mr. K.I.Spurgeon",
            designation: "E-Cell Coordinator",
            linkedinlink : "https://www.linkedin.com/in/i-spurgeon-kodavaty-507aa5b9/",
        },
    ] 

    
    const teamDetails_president = [
        {
            image: man,
            name: "Srikar Maddula",
            designation: "President",
            linkedinlink : "https://www.linkedin.com/in/srikarmaddula/",
        },

        {
            image: woman,
            name: "Aishwarya. P",
            designation: "Vice President",
            linkedinlink : "https://www.linkedin.com/in/aishwarya-p-7437a6202/",
        },
    ]  


    const teamDetails_deptHead = [
        {
            image: man,
            name: "Sai Jaswanth Gudibandi",
            designation: "Head of Web Design and Development",
            linkedinlink : "https://www.linkedin.com/in/sai-jaswanth-gudibandi-291226163/",

        },

        {
            image: woman,
            name: "M.Pranathi",
            designation: "Head of Event Management",
            linkedinlink : "https://www.linkedin.com/in/pranathi28/",
        },
        {
            image: woman,
            name: "Keerthana Gunreddy",
            designation: "Head of Marketing",
            linkedinlink : "https://www.linkedin.com/in/keerthana-gunreddy-b2494718b/",
        },
        {
            image: woman,
            name: "Viveka",
            designation: "Head of Arts",
            linkedinlink : "https://www.linkedin.com/in/vamshi-sai-awaru-01b258194/",
        },
        {
            image: man,
            name: "Suresh Nitin Govada",
            designation: "Head of PR and HR",
            linkedinlink : "https://www.linkedin.com/in/suresh-nitin-3688421a9/",
        },
    ] 


	return (
        <>
        <h1 className = "teamheader"> MEET THE TEAM </h1>
        <div class="container1">
            <div class="grid">
                {teamDetails_hod.map((teamvar)=>{
                    return <Cards
                        image = {teamvar.image}
                        name = {teamvar.name}
                        designation = {teamvar.designation}
                        linkedinlink = {teamvar.linkedinlink}
                    />
                })}
            </div>
        </div>
        
        <h1 className = "teamheader"> FACULTY CO-ORDINATORS </h1>
        <div class="container2">
            {/* <h1 className = "header"> OUR TEAM </h1> */}
            <div class="grid2">
                {teamDetails_faculty.map((teamvar)=>{
                    return <Cards
                        image = {teamvar.image}
                        name = {teamvar.name}
                        designation = {teamvar.designation}
                        linkedinlink = {teamvar.linkedinlink}
                    />
                })}
            </div>
        </div>

        <h1 className = "teamheader"> TEAM LEADERS </h1>
        <div class="container2">
            {/* <h1 className = "header"> OUR TEAM </h1> */}
            <div class="grid2">
                {teamDetails_president.map((teamvar)=>{
                    return <Cards
                        image = {teamvar.image}
                        name = {teamvar.name}
                        designation = {teamvar.designation}
                        linkedinlink = {teamvar.linkedinlink}
                    />
                })}
            </div>
        </div>
        
        <h1 className = "teamheader"> THE CORE TEAM </h1>
        <div class="container">
            {/* <h1 className = "header"> OUR TEAM </h1> */}
            <div class="grid">
                {teamDetails_deptHead.map((teamvar)=>{
                    return <Cards
                        image = {teamvar.image}
                        name = {teamvar.name}
                        designation = {teamvar.designation}
                        linkedinlink = {teamvar.linkedinlink}
                    />
                })}
            </div>
        </div>
   </>
    );
};

export default teamComponent;