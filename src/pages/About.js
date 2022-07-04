import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import aboutPic from "./images/profile-1.jpeg";
import "./About.css";
const About = () => {
  return ReactDOM.createPortal(
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className={"column left"}>
            <img src={aboutPic} alt="" />
          </div>
          <div className={"column right"}>
            <div className="text">
              I'm Md Parvez Musharaf and I'm a <span class="typing-2"></span>
            </div>
            <p>
              CEO and Founder of "Parvez Musharaf IT Park".Senior Software
              Engineer of The Company.
            </p>
            <Link to="#">Download CV</Link>
          </div>
        </div>
      </div>
    </section>,
    document.getElementById("abouts")
  );
};
export default About;
