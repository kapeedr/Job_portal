import React from "react";
import { useEffect, useState } from "react";
import './body.css'
import moment from "moment"
import logo from "./LogoCompany.png";
import locationImage from "./location.png";
import TimeAgo from "javascript-time-ago";
import JobDescription from "./JobDescription";
import {BsPencilSquare} from "react-icons/bs";

// import './data.json';
// let data = require("./data.json")


const Card1 = ({jobData, bool,createHandler}) => {
  const [editclick, setEditclick] = useState(false);
  const sendImfo = () => {
    console.log(jobData);
  }
  const deletThisJob = async(id)=>{
    window.confirm(`You are apply for ${jobData.title} in ${jobData.company}.`);
    // createHandler("deleted");
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

  const [descrip, setDescrip] = useState(false);




  const [buttonApply, setButtonApply] = useState(false);
  const [jobtitle, setJobtitle] = useState(jobData.title);
  const [workplace, setWorkplace] = useState(jobData.jobWorkplace);
  const [experience, setExperience] = useState(jobData.experience);
  const [Location, setLocation] = useState(jobData.location);
  const [jobType, setJobType] = useState(jobData.jobType);
  const [description, setDescription] = useState(jobData.fullDescription);
  const [companyName, setCompanyName] = useState(jobData.company);
  const [skills, setSkills] = useState(jobData.skillsRequired);

  const addtoList = (id) => {
    var jsonData = {
      _id : id,
      appliedCandidates: ["asd", "asd"],
      title: jobtitle,
      department: "IT",
      experience: experience,
      skillsRequired: skills,
      fullDescription: description,
      company: companyName,
      createdAt: new Date().toString(),
      jobType: jobType,
      jobWorkplace: workplace,
      location: Location,
      __v:0
                 
    };

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(jsonData);
  console.log(raw)

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`http://localhost:4000/api/jobs/editJob/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
    setEditclick(false);
    createHandler(jsonData);
  };


  
  return (
    <>
      {editclick ? (
          <>
            <div className="editbox ">
              <div className="creinnerbox ">
                <h1 className="heading">Create new job</h1>
                <input
                  placeholder="Add Job tittle"
                  className="form-control"
                  value={jobtitle}
                  onChange={(event) => {
                    setJobtitle(event.target.value);
                  }}
                  required
                />
                <select className="form-control"
                value={workplace}
                  placeholder="Type of Workplace"
                  onChange={(event) => {
                    setWorkplace(event.target.value);
                  }} >
                    <option value="">Select workplace</option>
    <option value="Full time">on site</option>
    <option value="Part-time/intership">off site</option>
    <option value="Remote">Hybrid</option>
    </select>
   
                <select className="form-control"
                  placeholder="Location of Job"
                  value={Location}
                  onChange=
                  {(event) => {
                    setLocation(event.target.value);
                  }}>
                  <option value="Location">Select Location</option>
                  <option value="Pune">Pune</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Delhie">Delhi</option>
                </select>

                <input
                  placeholder="Experience"
                  value={experience}
                  onChange={(event) => {
                    setExperience(event.target.value);
                  }}
                  required
                />
                <select className="form-control"
                  placeholder="Job Type"
                  value={jobType}
                  onChange={(event) => {
                    setJobType(event.target.value);
                  }}
                
                >
                  <option value="workPal">Select Workplace</option>
    <option value="Full time">Full time</option>
    <option value="Part-time/intership">Part time/internship</option>
    <option value="Remote">Remote</option>
    </select>

    <div className="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" value={description} placeholder="Job description " rows="3"  onChange={(event) => {
                    setDescription(event.target.value);
                  }}></textarea>
  </div>


                
                <input
                  placeholder="Required Skills"
                  value={skills}
                  onChange={(event) => {
                    setSkills(event.target.value);
                  }}
                  required
                />
                <input
                  placeholder="Name of company"
                  className="form-control"
                  value={companyName}
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                  }}
                  required
                />
                <div className="buton ">
                  <button type="button" className="submitbutton btn btn-primary" onClick={() => addtoList(jobData._id)}>
                    submit
                  </button>
                  <button type="button"
                    className="closebutton ml-2 btn btn-secondary"
                    onClick={() => setEditclick(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}





      {descrip ? <JobDescription data ={jobData} /> : <></>}
      <div className="data" style={{ width: bool ? "30vw" : "60vw" }}>
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
            <button className="apply "onClick={()=>deletThisJob(jobData._id)}>Apply</button>
            <BsPencilSquare onClick={() => setEditclick(true)} className="editcursor"/>
          </div>


          

        
       
       
       
       
       
        </div>
        <div className="three">
          <span className="jobTitle" onClick={()=>{setDescrip(!descrip)}}>{jobData.title}</span>
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
