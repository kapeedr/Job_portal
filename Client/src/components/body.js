import React from "react";
import "./body.css";
// import file from "./data.json";
import { useEffect, useState } from "react";

import Card1 from "./card.js";
import Navbar from "./Navbar";


const Body = () => {

  const [jobData, setJobData ] = useState([]);
  const [state, setstate] = useState(1);


  const createHandler = (newData)=>{
    setJobData(prevState => [...prevState, newData] );
  }


  useEffect(() => { //use get api to display all job list on main page
    fun();
  }, []);
  const fun = async (e) => {
    const response = await fetch(
      `http://localhost:4000/api/jobs/getalljobs`, 
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': 'Content-Type',
         'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        },
      }
    );
    const json = await response.json();
    if (json) {
      setJobData(json);
      console.log(jobData)
    
    }
  };

// try to do filter on sidebar but its not work
  var filtData = jobData;
  const [searhTerm, setSearchterm]= useState('')
  const [filteredNumbers, setFilteredNumbers] = useState([])
  const radioChangeHandler = e => {
    const value = e.target.value
    if (value === "Pune") {
      setFilteredNumbers(
        jobData.filter(value 
        )
      )
    }  
  }




  return (
    <>
    <Navbar createHandler={createHandler}/>
      <div className="body">
      
        <div className="Box">

          <div className="Box1" id ="sideBar">
            <span className="Filter">Filter</span>

            <form action="">
              <div>
                <input type="radio" name="filter" id="All" className="radio" />
                <label htmlFor="All" className="label">
                  All Jobsx
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="Relevant"
                  className="radio"
                />
                <label htmlFor="Relevant" className="label">
                  Most Relevant
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="Recommended"
                  className="radio"
                />
                <label htmlFor="Recommended" className="label">
                  Recommended Jobs
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="Recent"
                  className="radio"
                />{" "}
                <label htmlFor="Recent" className="label">
                  Most Recent
                </label>
              </div>
              <br></br>
              <label for="pet-select">select location</label>
<br></br>
<select name="locations" id="locat">
    <option value="">--Select location--</option>
    <option value="Pune">Pune</option>
    <option value="Banglore">Banglore</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Delhie">Delhi</option>
   
</select>

<br></br>
<br></br>
<label for="pet-select">Type of Job</label>
<br></br>
<select name="locations" id="locat" onChange={radioChangeHandler}>
    <option value="">--Select type of job--</option>
    <option value="Full time">Full time</option>
    <option value="Part-time/intership">Part time/internship</option>
    <option value="Remote">Remote</option>
   
</select>
<br></br>
<br></br>
<label for="pet-select">Type of workplace</label>
<br></br>
<select name="locations" id="locat">
    <option value="">--Select workplace--</option>
    <option value="Full time">on site</option>
    <option value="Part-time/intership">off site</option>
    <option value="Remote">Hybrid</option>
   
</select>
            </form>
          </div>


          <div className="Box2">
            <div className="Box3">
              <span className="size">CAREER</span>
              <div className="Box4 curser" onClick={Merge}>
                <img
                  alt=""
                  width={"20px"}
                  height={"20px"}
                  className="curser"
                />
                <span className="size curser">Filter</span>
              </div>
            </div>
            <div className="main">
              <div className="searchBar">
                <div className="Box7">
                  <label htmlFor="searchBox">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
                      alt=""
                      width={"20px"}
                      height={"20px"}
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Search"
                    width={"10vw"}
                    id="searchBox"
                    onChange={event =>{setSearchterm(event.target.value)}}
                  />
                </div>
                <div className="searchBar2">
                  <div className="searchBar3">
                    <div className="size clr">Sort by : </div>
                    <div className="mrg">
                      <select id="Car" name="myCar">
                        <option value="val1">rcent</option>
                        <option value="val1">Date</option>
                        <option value="val1">name</option>
                      </select>
                    </div>
                  </div>
                  <div className="size clr">view</div>
                </div>
              </div>

              {jobData ? ( 
                <>
             {jobData.filter((val)=>{
              if(searhTerm ===''){
                return val;
              }
              else if(val.title.toLowerCase().includes(searhTerm.toLowerCase())){
                return val;
              }
             }).map((data,i) => (
              <Card1 jobData={data}/>
             ))}
             </>
              ) :(<></>)
              }
             
              
          
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export { Body };



const Merge = () => {
  let ele = document.getElementById("sideBar");
  if(ele.style.display === "none"){
    ele.style.display = "block";
  }else{
    ele.style.display = "block";
  }
}
