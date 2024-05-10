import React from "react";
import MyImage from "../../assets/images/my_pic1.jpg";
import "./LeftComponent.css";
import { useTheme } from "../../contextComponent/ThemeContext";

const LeftComponent = () => {
  const { theme, menu, handleMenuChange } = useTheme();

  return (
    <div id="leftSide" className={menu ? "#leftSide active" : "#leftSide"}>
      <div
        className={theme === "light" ? "imageContainer" : "imageContainerDark"}
      >
        <img src={MyImage} alt="" className="img" />
      </div>

      <div className="name">OMIKUNLE ADEMOLA</div>

      <small className="xLink">@DEMOSTAT101</small>

      <div className="allLinks">
        <a href="#uppers" id="upper">
          <button onClick={handleMenuChange} className="home" id="button">
            Home
          </button>
        </a>

        <br />

        <a href="#about2" id="upper">
          <button className="about" id="button" onClick={handleMenuChange}>
            About
          </button>
        </a>

        <br />

        <a href="#skills" id="upper">
          <button className="skills" id="Skills" onClick={handleMenuChange}>
            Skills
          </button>
        </a>

        <br />

        <a href="#Portfolio" id="upper">
          <button className="portfolio" id="button" onClick={handleMenuChange}>
            Portfolio
          </button>
        </a>

        <br />

        <a href="#contactMe" id="upper">
          <button className="contact" id="button" onClick={handleMenuChange}>
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};

export default LeftComponent;
