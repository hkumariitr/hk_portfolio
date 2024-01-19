import "../TagCss/topTag.css";
import "./Journey.css";
import {BsPerson} from "react-icons/bs";


export const Journey = () => {
    return(
        <div id="jr" className="jrny-body">
              <div className="top-tag">
            <button className="tag-btn">
            <BsPerson className="tag-logo"/>
           <span className="tag-text">JOURNEY</span> 
           </button>
           </div>
           <div className="jrny-heading">
           <span className="heading-text1">About My <span className="heading-text2">Journey</span></span>
           </div>
           <div className="jrny-content">
           
            <p className="jrny-txt journey"> I am currently in my 3rd year pursuing B.Tech. from IIT Roorkee. Since my school time, I was always fond of programming and development.<br/> 
            I've gained hands-on experience during my internships at renowned organizations, honing my skills and problem-solving abilities in web development.
            I take pride in my work, and one of my notable achievements is spearheading the development of the official website for IIT Roorkee's prestigious Technical Festival, Cognizance. This project allowed me to showcase my expertise in creating dynamic and user-friendly web solutions.
            </p>
           </div>
        </div>
    )
}