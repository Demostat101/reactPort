import React from "react";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import "./Home.css"
import { useTheme } from "../../contextComponent/ThemeContext";


const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div  className="Uppers" id="uppers">
      <div className="fullName">OMIKUNLE ADEMOLA</div>

      <small className="profession">I Am A Software Developer</small>

      <a href="./AdemolaOmikunle.pdf" download="" className="resumeTage" >
        <button className="resume">
          MY RESUME
        </button>
      </a>

      <div className="links">
        <a href="https://twitter.com/Demostat101" target="_blank">

          <button className="twitter" id="button">
            <RiTwitterFill className={theme === "light" ? "linkIconDark" : "linkIconLight"} size={20}/>
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/omikunle-ademola-162912232"
          target="_blank"
        >
          <button className="linkedln" id="button">
            <RiLinkedinFill className={theme === "light" ? "linkIconDark" : "linkIconLight"} size={20}/>
          </button>
        </a>

        <a href="https://github.com/Demostat101" target="_blank">
          <button className="github" id="button">
            <FaGithub className={theme === "light" ? "linkIconDark" : "linkIconLight"} size={20}/>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
