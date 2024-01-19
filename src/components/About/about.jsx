import "./about.css"
import logo from './image/logoo.png';
import profile from './image/ppic.jpg';
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { IoIosMail }  from "react-icons/io";

export const About = () => {
    return (
      <>
        <div className="about-cart">
          <div className="about-cart-header">
            <img className="imgc" src={ logo} alt="logo" />
            <span className="designation">Full Stack <br></br> Developer</span>
          </div>
          <img className="imgp" src={profile} alt="" />
          <h2 className="email">h_kumar@mt.iitr.ac.in</h2> 
          <h2 className="address" >RKB, IIT Roorkee, Uttarakhand</h2>
          
          <div className="social-media-door">
            <a href="https://www.linkedin.com/in/iamhkumar"><FaLinkedin className="logo" /></a>
            <a href="https://github.com/hkumariitr"><FaGithub className="logo"/> </a>
            <a href="https://www.instagram.com/iamh.kumar/"><FaInstagram className="logo"/></a> 
            <a href="https://x.com/iamharshitkumar"><FaTwitter className="logo"/></a> 
          </div>
          <div className="hireButton">
          <a href="mailto:h_kumar@mt.iitr.ac.in" className="btn" >
             <IoIosMail className="logo2" />Contact Me!
          </a>
        </div>
        </div>
        </>
    )
}