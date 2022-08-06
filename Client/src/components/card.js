import React from "react";
import { useEffect, useState } from "react";
import './body.css'
import moment from "moment"
import logo from "./LogoCompany.png";
import locationImage from "./location.png";
import TimeAgo from "javascript-time-ago";
// import './data.json';
// let data = require("./data.json")



const Card1 = ({jobData, createHandler}) => {
  const sendImfo = () => {
    console.log(jobData);
  }
  const deletThisJob = async(id)=>{
    alert(`You are apply for ${jobData.title} in ${jobData.company}.`);
    createHandler("deleted");
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:4000/api/jobs/deleteJob/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  }
  // // const [jobId, setjobId] = useState("")


  // use for find how much time ago

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  const time_ago = timeSince(new Date(jobData.createdAt)) // use for find how much time ago


  return (
    <>
    
      <div className="data" >
        <div className="one">
          <div className="two">
            <img
              src={logo}
              alt=""
              className="companyLogo"
            />
            <span id="companyName">{jobData.company}</span>
          </div>
          <div>
            <button className="apply" onClick={()=>deletThisJob(jobData._id)}>Apply</button>
          </div>
        </div>
        <div className="three">
          <span className="jobTitle">{jobData.title}</span>
          <img
            src={locationImage}
             alt=""
            width={"20ppx"}
            height={"20px"}
            className="locationLogo"
          />
          <span className="location">{jobData.location}</span>
        </div>
        <div className="four">{jobData.fullDescription}</div>
        <p>{time_ago} ago</p>
      </div>
    </>
  );
};

export default Card1;
