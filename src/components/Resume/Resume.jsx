import "../TagCss/topTag.css";
import "./Resume.css";
import {AiOutlineFileText} from "react-icons/ai";
import { RsmBox } from "./RsmBox";

export const Resume = () => {
    return (
        <div id="re" className="resume-body">
          <div className="top-tag">
            <button className="tag-btn">
            <AiOutlineFileText className="tag-logo"/>
           <span className="tag-text">Experience</span> 
           </button>
           </div>
           <div className="rsm-heading">
            <span className="heading-text1">Education & <span className="heading-text2">Experience</span></span>
            </div>
            <div className="rsmBox-content">
             <RsmBox duration=" September 2023 - October 2023" role="Software Developer" at="OVOLO IT BUILDING SOLUTION PVT. LIMITED " />   
            </div>
            <div className="rsmBox-content">
             <RsmBox duration="February 2023 - Present" role=" Overall Coordinator for Media and Public Relations " at=" Unnat Bharat Abhiyan, IIT Roorkee "/>   
            </div>
            <div className="rsmBox-content">
             <RsmBox duration="May 2023 - June 2023" role="Web Development Intern" at="Satvik Kissan Utpadak Sawayat Sahkarita"  />   
            </div> 
            <div className="rsmBox-content">
             <RsmBox duration="August 2023 - October 2023" role="UG Teaching Assistant" at="IIT Roorkee" />   
            </div> 
            <div className="rsmBox-content">
             <RsmBox duration="2021 - present" role="Bachelor of Technology" at="IIT Roorkee" />   
            </div> 
            <a href="https://drive.google.com/file/d/1y3JJSm-uCKsd3x5l6RQvmsp6WOaV8RZa/view?usp=sharing" target="blank">
                    <button className="rs-view">View Resume</button>
                </a>
        </div>
    )
}