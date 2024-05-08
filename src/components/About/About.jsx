import React from "react";
import MyImage from "../../assets/images/my_pic1.jpg"
import { useTheme } from '../../contextComponent/ThemeContext'
import "./About.css"

const About = () => {
    const{theme} = useTheme()
  return (
    <div id="about2">
      <div className="aboutMe">
        <div className="abouthead">
          <span className="head1">ABOUT</span>{" "}
          <span className="head2">
            ME
          </span>
        </div>
      </div>

      <div className="aboutbody">

        <div className={theme==="light"?"imageContainer":"imageContainerDark"}><img src={MyImage} alt="" className="img"/></div>

        <div className="paragraph">
          <h2 className="myName">
            <span className="my">
              My Name Is
            </span>
            <span className="ademola"> Omikunle Ademola</span>
          </h2>

          <p className="parabody">
            I am passionate about creating responsive, user-friendly websites
            that are both visually appealing and functional. No matter what the
            scope of the project is, I am committed to building high-quality
            websites that meet the needs of my clients and their customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
