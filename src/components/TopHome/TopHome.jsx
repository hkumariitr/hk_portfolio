import {React} from "react";
import "./TopHome.css";
import "../TagCss/topTag.css";
import {GoHome} from "react-icons/go";
import { HomeBg } from "./homeBg";
// import ReactDOM from 'react-dom'

export const TopHome = () => {
    
    return (
        <div id="thm" className="tophome-body">
           
          <div className="top-tag">
          {/* <HomeBg/> */}
            <button className="tag-btn">
            <GoHome className="tag-logo"/>
           <span className="tag-text">INTRODUCTION</span> 
           </button>
           </div>
           <div className="intro-text">
           <span className="head-text1">Hello this is <span className="head-text2">Harshit,</span><br/>Full Stack Web Developer</span>
           </div>
           <div className="my-aim">
            <p className="aim-text">Passionate Full Stack Web Developer with a strong foundation in modern web technologies. Proficient in building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and PostgreSQL. <br/> <br/>I'm open to exciting opportunities where I can contribute my expertise and collaborate with like-minded professionals in the web development field. Let's connect and explore how we can work together to bring digital projects to life! </p>
           </div>
        </div>

    )
}