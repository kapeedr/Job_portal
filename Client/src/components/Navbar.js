import React from "react";
import "./Navbar.css";
import portalLogo from "./portalLogo.png";
import { useState } from "react";

export const Navbar = ({ createHandler }) => {
  const [buttonApply, setButtonApply] = useState(false);
  const [jobtitle, setJobtitle] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [experience, setExperience] = useState("");
  const [Location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [skills, setSkills] = useState("");

  const addtoList = () => {
    var jsonData = {
      appliedCandidates: ["asd", "asd"],
      title: jobtitle,
      department: "IT",
      experience: experience,
      skillsRequired: skills,
      fullDescription: description,
      company: companyName,
      createdAt: new Date(),
      jobType: jobType,
      jobWorkplace: workplace,
      location: Location,
    };
    console.log(jsonData)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(jsonData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/jobs/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setButtonApply(false);
    createHandler(jsonData);
  };

  return (
    <>
      <nav className="navbar">
        <div className="LogoTitle">
          <img src={portalLogo} alt="" className="logo" />
          <div className="title">JOB PORTAL</div>
        </div>

        <button className="newJob" onClick={() => setButtonApply(true)}>
          Create New Job
        </button>

        {buttonApply ? (
          <>
            <div className="creouterbox">
              <div className="creinnerbox">
                <h1 className="heading">Create new job</h1>
                <br></br>
                <input
                  placeholder="Add Job tittle"
                  onChange={(event) => {
                    setJobtitle(event.target.value);
                  }}
                  required
                />
                <br></br>
                <select
                  placeholder="Type of Workplace"
                  onChange={(event) => {
                    setWorkplace(event.target.value);
                  }} >
                    <option value="">Select workplace</option>
    <option value="Full time">on site</option>
    <option value="Part-time/intership">off site</option>
    <option value="Remote">Hybrid</option>
    </select>
   
                <br></br>
                <select>
                  placeholder="Location of Job" onChange=
                  {(event) => {
                    setLocation(event.target.value);
                  }}
                  <option value="Location">Select Location</option>
                  <option value="Pune">Pune</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Delhie">Delhi</option>
                </select>
                <br></br>
                <input
                  placeholder="Experience"
                  onChange={(event) => {
                    setExperience(event.target.value);
                  }}
                  required
                />
                <br></br>
                <select
                  placeholder="Job Type"
                  onChange={(event) => {
                    setJobType(event.target.value);
                  }}
                
                >
                  <option value="workPal">Select Workplace</option>
    <option value="Full time">Full time</option>
    <option value="Part-time/intership">Part time/internship</option>
    <option value="Remote">Remote</option>
    </select>
                <br></br>
                <input
                  placeholder="Job description "
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  required
                />
                <br></br>
                <input
                  placeholder="Required Skills"
                  onChange={(event) => {
                    setSkills(event.target.value);
                  }}
                  required
                />
                <br></br>
                <input
                  placeholder="Name of company"
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                  }}
                  required
                />
                <br></br>
                <div className="buton">
                  <button className="submitbutton" onClick={addtoList}>
                    submit
                  </button>
                  <button
                    className="closebutton"
                    onClick={() => setButtonApply(false)}
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
      </nav>
    </>
  );
};

export default Navbar;
