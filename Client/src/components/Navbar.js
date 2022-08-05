import React from "react";
import "./Navbar.css";
import portalLogo from "./portalLogo.png";
import { useState } from "react";
import Axios from "axios";

export const Navbar = () => {
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
      createdAt: "2021-08-26T07:53:23.437Z",
      jobType: jobType,
      jobWorkplace: workplace,
      location: Location,
    };
    // fetch("http://localhost:4000/api/jobs/create",{
    //     method: 'POST',
    //     mode: "cors",
    //     body: JSON.stringify(jsonData)
    // });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(jsonData),
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/jobs/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("reasult" + result))
      .catch((error) => console.log("error", error));

    setButtonApply(false);
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
                />
                <br></br>
                <input
                  placeholder="Type of Workplace"
                  onChange={(event) => {
                    setWorkplace(event.target.value);
                  }}
                />
                <br></br>
                <input
                  placeholder="Location of Job"
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
                <br></br>
                <input
                  placeholder="Experience"
                  onChange={(event) => {
                    setExperience(event.target.value);
                  }}
                />
                <br></br>
                <input
                  placeholder="Job Type"
                  onChange={(event) => {
                    setJobType(event.target.value);
                  }}
                />
                <br></br>
                <input
                  placeholder="Job description "
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
                <br></br>
                <input
                  placeholder="Required Skills"
                  onChange={(event) => {
                    setSkills(event.target.value);
                  }}
                />
                <br></br>
                <input
                  placeholder="Name of company"
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                  }}
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
