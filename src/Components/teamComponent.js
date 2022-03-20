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
import { FaLinkedinIn } from 'react-icons/fa'
import "../Stylesheets/team.css";
const Cards = (props) => {
    return (
        <div class="card">
                <div class="card_img">
                    <img src={props.image} alt=""/>
                </div>
                <div class="card_body">
                <h2 class="card_title">{props.name} <span></span><a href={props.linkedinlink} rel="noreferrer" target="_blank"> <FaLinkedinIn size={20} color="#0077b5"/></a>
                    </h2>
                    <h6 class="designation">{props.designation}</h6>
                    
                </div>
            </div>
    );
};

const teamComponent = () => {

    const teamDetails_hod = [
        {
            image: mechhod,
            name: "Dr. T. Ramamohan Rao",
            designation: "Founder of E-Cell",
        },
    ] 

    const teamDetails_faculty = [
        {
            image: david,
            name: "Mr. N.David Raju",
            designation: "E-Cell Coordinator",
            linkedinlink : "https://www.linkedin.com/in/david-raju-n-7a90b729",
        },
        {
            image: spurgeon,
            name: "Mr. K.I.Spurgeon",
            designation: "E-Cell Coordinator",
            linkedinlink : "https://www.linkedin.com/in/i-spurgeon-kodavaty-507aa5b9/",
        },
    ] 

    
    const teamDetails_president = [
        {
            image: srikar,
            name: "Srikar Maddula",
            designation: "President",
            linkedinlink : "https://www.linkedin.com/in/srikarmaddula/",
        },

        {
            image: aishwarya,
            name: "Aishwarya. P",
            designation: "Vice President",
            linkedinlink : "https://www.linkedin.com/in/aishwarya-p-7437a6202/",
        },
    ]  


    const teamDetails_deptHead = [
        // {
        //     image: sameeha,
        //     name: "Sameeha Mubeen",
        //     designation: "Web Development Deputy Head",
        //     linkedinlink : "https://www.linkedin.com/in/sameehamubeen/",
        // },
        {
            image: jaswanth,
            name: "Sai Jaswanth Gudibandi",
            designation: "Head of Web Design and Development",
            linkedinlink : "https://www.linkedin.com/in/sai-jaswanth-gudibandi-291226163/",

        },

        {
            image: pranathi,
            name: "M.Pranathi",
            designation: "Head of Event Management",
            linkedinlink : "https://www.linkedin.com/in/pranathi28/",
        },
        {
            image: keerthana,
            name: "Keerthana Gunreddy",
            designation: "Head of Marketing",
            linkedinlink : "https://www.linkedin.com/in/keerthana-gunreddy-b2494718b/",
        },
        {
            image: suresh,
            name: "Viveka",
            designation: "Head of Arts",
            linkedinlink : "https://www.linkedin.com/in/vamshi-sai-awaru-01b258194/",
        },
        {
            image: suresh,
            name: "Suresh Nitin Govada",
            designation: "Head of PR and HR",
            linkedinlink : "https://www.linkedin.com/in/suresh-nitin-3688421a9/",
        },
    ] 


	return (
        <>
        <h1 className = "teamheader"> MEET THE TEAM </h1>
        <div class="container1">
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