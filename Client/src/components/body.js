import React from "react";
import "./body.css";
// import file from "./data.json";
import { useEffect, useState } from "react";

import Card1 from "./card.js";
import Navbar from "./Navbar";
import { BsListStars } from "react-icons/bs";
import { BsFillGrid3X3GapFill,BiFilter } from "react-icons/bs";
import filterlogo from "./Shape.png";
const Body = () => {
  const [jobData, setJobData] = useState([]);
  const [sortbydate, setSortbydate] = useState("asc");

  const createHandler = (newData) => {
    setJobData((prevState) => [...prevState, newData]);
  };

  useEffect(() => {
    //use get api to display all job list on main page
    fun();
  }, []);

  const fun = async (e) => {
    const response = await fetch(`http://localhost:4000/api/jobs/getalljobs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      },
    });
    const json = await response.json();
    json.sort(
      (objA, objB) =>
        Number(new Date(objB.createdAt)) - Number(new Date(objA.createdAt))
    );
    if (json) {
      setJobData(json);
    }
  };
  // const sortedAsc = jobData.sort(
  //   (objA, objB) => Number(objA.date) - Number(objB.date),
  // );
  // console.log(sortedAsc)

  // const sorted = jobData.sort((a,b)=> Number(b.createdAt)- Number(a.createdAt) )
  // console.log(sorted)

  //   var curen = new Date();
  // console.log(curen)
  // try to do filter on sidebar but its not work

  const sortbyTitl = async (e) => {
    const response = await fetch(`http://localhost:4000/api/jobs/sortbyTitle`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      },
    });
    const json = await response.json();
    if (json) {
      setJobData(json);
    }
  };

  const sortbyCompany = async (e) => {
    const response = await fetch(
      `http://localhost:4000/api/jobs/sortbyCompany`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
        },
      }
    );
    const json = await response.json();
    if (json) {
      setJobData(json);
    }
  };

  const sortbyTime = async (e) => {
    const response = await fetch(`http://localhost:4000/api/jobs/sortbyTime`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      },
    });
    const json = await response.json();
    if (json) {
      setJobData(json);
    }
  };

  const sortedby = (val) => {
    console.log(val);
    if (val === "createdAt") {
      sortbyTime();
    } else if (val === "title") {
      sortbyTitl();
      console.log(100);
    } else {
      sortbyCompany();
    }
  };

  var filtData = jobData;
  const [searhTerm, setSearchterm] = useState("");
  const [filteredNumbers, setFilteredNumbers] = useState([]);
  const radioChangeHandler = (e) => {
    const value = e.target.value;
    if (value === "Pune") {
      setFilteredNumbers(jobData.filter(value));
    }
  };
  const [flag, setFlag] = useState(false);
  const [filterbyLocation, setFilterbyLocation] = useState("");
  const [filterByworkPlace, setFilterbyWorkplace] = useState("");
  const [filterByjobtype, setFilterbyJobtype] = useState("");
  const [filterByradio, setFilterbyRadio] = useState("");

  const filterdata = (filt) => {
    fun();

    const cvb = jobData.filter((val) => {
      if (filterbyLocation === "") {
        return val;
      } else if (val.location === filterbyLocation) {
        return val;
      }
    });
    setJobData(cvb);
    console.log("button clicked ", jobData);
  };

  const handleChange = (event) => {
    setFilterbyRadio(event.target.value);
  };
  const resetRadioState = () => {
    setFilterbyJobtype("");
    setFilterbyLocation("");
    setFilterbyRadio("");
    setFilterbyWorkplace("");
  };

  //use for l
  const [listtoGrid, setListtoGrid]= useState(false);
  

  return (
    <>
      <Navbar createHandler={createHandler} />

      <div className="body">
        <div className="Box">
          <div className="Box1" id="sideBar">
            <span className="Filter">Filter</span>

            <form action="">
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="All"
                  className="radio"
                  value="All Jobs"
                  checked={filterByradio === "All Jobs"}
                  onChange={handleChange}
                />
                <label htmlFor="All" className="label">
                  All Jobs
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="filter"
                  id="Relevant"
                  className="radio"
                  value="Most Relevent"
                  checked={filterByradio === "Most Relevent"}
                  onChange={handleChange}
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
                  value="Recommended Jobs"
                  checked={filterByradio === "Recommended Jobs"}
                  onChange={handleChange}
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
                  value="Most Recent"
                  checked={filterByradio === "Most Recent"}
                  onChange={handleChange}
                />
                <label htmlFor="Recent" className="label">
                  Most Recent
                </label>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <label for="pet-select">select location</label>
              <br></br>
              <select
                name="locations"
                id="locat"
                onChange={(event) => {
                  setFilterbyLocation(event.target.value);
                }}
              >
                <option value="">--Select location--</option>
                <option value="Pune">Pune</option>
                <option value="Banglore">Banglore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Delhie">Delhi</option>
              </select>

              <br></br>
              <br></br>
              <br></br>
              <label for="pet-select">Type of Job</label>
              <br></br>
              
              <select
                name="locations"
                id="locat"
                onChange={(event) => {
                  setFilterbyJobtype(event.target.value);
                }}
              >
                <option value="">--Select type of job--</option>
                <option value="Full time">Full time</option>
                <option value="Part-time/intership">
                  Part time/internship
                </option>
                <option value="Remote">Remote</option>
              </select>
              <br></br>
              <br></br>
              <br></br>

              <label for="pet-select">Type of workplace</label>
              <br></br>
              <select
                name="locations"
                id="locat"
                onChange={(event) => {
                  setFilterbyWorkplace(event.target.value);
                }}
              >
                <option value="">--Select workplace--</option>
                <option value="Full time">on site</option>
                <option value="Part-time/intership">off site</option>
                <option value="Remote">Hybrid</option>
              </select>
            </form>
            <br></br>
            
          </div>

          <div className="Box2">
            <div className="Box3">
              <span className="size">CAREER</span>
              <div className="Box4 curser" onClick={Merge}>
                <img src={filterlogo} alt="" width={"20px"} height={"20px"} className="curser" />
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
                    onChange={(event) => {
                      setSearchterm(event.target.value);
                    }}
                  />
                </div>
                <div className="searchBar2">
                  <div className="searchBar3">
                    <div className="size clr">Sort by : </div>
                    <div className="mrg">
                      <select
                        id="Car"
                        name="myCar"
                        onChange={(e) => {
                          sortedby(e.target.value);
                        }}
                      >
                        <option value="createdAt">latest</option>
                        <option value="title">Job title</option>
                        <option value="company">company</option>
                      </select>
                    </div>
                  </div>
                  {
                    (listtoGrid ? <div className="pointer" onClick={() =>setListtoGrid(!listtoGrid)}><BsListStars id="list"/></div>
                     : 
                     <div className="pointer" onClick={() =>setListtoGrid(!listtoGrid)}><BsFillGrid3X3GapFill id="grid"/></div>)
                  }
                  
                  
                </div>

              </div>
                        <div className="listview">
              {jobData ? (
                <>
                  {jobData.filter((val) => {
                    if (
                      val.location.toLowerCase().includes(filterbyLocation.toLowerCase())
                    ) {
                      return val;
                    }
                  }).filter((val) => {
                    if (
                      val.jobType.toLowerCase().includes(filterByjobtype.toLowerCase())
                    ) {
                      return val;
                    }
                  }).filter((val) => {
                    if (
                      val.jobWorkplace.toLowerCase().includes(filterByworkPlace.toLowerCase())
                    ) {
                      return val;
                    }
                  }).filter((val) => {
                      if (searhTerm === "") {
                        return val;
                      } else if (
                        val.title
                          .toLowerCase()
                          .includes(searhTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((data, i) => (
                      <Card1 jobData={data} bool ={listtoGrid} className="Card"/>
                    ))}
                </>
              ) : (
                <></>
              )}
              </div>
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
  if (ele.style.display === "none") {
    ele.style.display = "block";
  } else {
    ele.style.display = "none";
  }
};
