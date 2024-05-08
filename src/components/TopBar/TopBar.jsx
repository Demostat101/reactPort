import React, { useState } from "react";

import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { useTheme } from "../../contextComponent/ThemeContext";
import "./TopBar.css"


const TopBar = () => {
    const[menu,setMenu] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const handleMenuChange = ()=>{
        setMenu(m => !m)
    }

  return (
    <div className="icons">

      <div className="hamburger" onClick={handleMenuChange}>

            {
                menu ? <div className="closeMenu"> <RiCloseFill className={theme === "light" ? "darkMode" : "lightMode"} /> </div> : <div className="openMenu"> <RiMenu2Fill className={theme === "dark" ? "lightMode" : "darkMode"}/> </div>
            }

      </div>

      <div className="darkLight">


      {theme === "light" ? (
              <RiMoonFill
                className={theme === "light" ? "darkMode" : ""}
                onClick={toggleTheme}
              />
            ) : (
              <RiSunFill
                className={theme === "dark" ? "lightMode" : ""}
                onClick={toggleTheme}
              />
            )}


        {/* <div className="lightMode">
            <RiSunFill/>
        </div>

        <button className="darkMode" id="darkMode">
            <RiMoonFill/>
        </button> */}
      </div>

    </div>
  );
};

export default TopBar;
