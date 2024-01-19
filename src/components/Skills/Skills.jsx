import "./Skills.css";
import "../TagCss/topTag.css";
import {TbIcons} from "react-icons/tb";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {BiLogoJavascript} from "react-icons/bi";
import {DiJqueryLogo} from "react-icons/di";
import {DiReact} from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import {TbBrandVscode} from "react-icons/tb";
import {BiLogoGit} from "react-icons/bi";
import {AiOutlineGithub} from "react-icons/ai";
import {IoLogoNodejs} from "react-icons/io5";
import {DiMongodb} from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SklBox } from "./SklBox";
import { SiPostgresql } from "react-icons/si";


export const Skills = ()=> {
    return(
        <div id="sk" className="skills-body" >
          <div className="top-tag">
            <button className="tag-btn">
            <TbIcons className="tag-logo"/>
           <span className="tag-text">SKILLS</span> 
           </button>
           </div>
           <div className="skl-heading">
           <span className="heading-text1">My <span className="heading-text2">Advantages</span></span>
           </div>
           <div className="skl-content-head">Languages</div>
           <div className="skl-content">
            <SklBox logo = {BiLogoJavascript} name = "JavaScript" />
            <SklBox logo = {TbBrandCpp } name = "C++" />
            <SklBox logo = {FaPython} name = "Python" />
            <SklBox logo = {DiReact} name = "ReactJs" />
            <SklBox logo = {SiPostgresql} name = "PostgreSQL" />
           </div>
           <div className="skl-content-head">Software Packages</div>
           <div className="skl-content">
            <SklBox logo = {TbBrandVscode} name = "VS Code" />
            <SklBox logo = {BiLogoGit} name = "Git" />
            <SklBox logo = {AiOutlineGithub} name = "GitHub" />
            <SklBox logo = {IoLogoNodejs} name = "NodeJs" />
            <SklBox logo = {DiMongodb} name = "Mongodb" />
           </div>
        </div>
    )
}