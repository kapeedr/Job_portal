import React from "react";
import { useEffect, useState } from "react";
import './body.css'
import moment from "moment"
import logo from "./LogoCompany.png";
import locationImage from "./location.png";
// import './data.json';
// let data = require("./data.json")



const Card1 = ({jobData}) => {
  const sendImfo = () => {
    console.log(jobData);
  }
  const deletThisJob = async(id)=>{
    alert(`You are apply for ${jobData.title} in ${jobData.company}.`);
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:4000/api/jobs/deleteJob/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  }
  const [jobId, setjobId] = useState("")
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
        
      </div>
    </>
  );
};

export default Card1;
