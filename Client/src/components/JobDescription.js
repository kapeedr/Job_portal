import React from 'react'
import "./JobDescription.css"
import { BsXSquare} from "react-icons/bs";
function JobDescription({data}) {

  const Close = () => {
    document.getElementById("imfobox").style.display = "none";
  }

  return (
    <>
    <div id='imfobox' >
      <BsXSquare onClick={Close} className='close'/>
      <br></br>
      <br></br>
            <p>
              <b>Title </b> :  {data.title}
            </p>
            <br></br>
            <p>
              <b>Type of Work </b> : {data.jobWorkplace}
            </p>
            <p>
              <b>Job Type </b> : {data.jobType}
            </p>
            <p>
              <b>Job Description </b> :{data.fullDescription}
  
            </p>
            <p>
              <b>Name ofCompany </b> : {data.company}
            </p>
            
            
            
            <p>
              <b>Skills Required </b> : {data.skillsRequired}
            </p>
            <p>
              <b>Experience </b> : {data.experience}
            </p>
        
    </div>
    </>
  )
}

export default JobDescription