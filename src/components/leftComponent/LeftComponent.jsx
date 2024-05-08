
import React from 'react'
import MyImage from "../../assets/images/my_pic1.jpg"
import "./LeftComponent.css"
import { useTheme } from '../../contextComponent/ThemeContext'

const LeftComponent = () => {
    const{theme} = useTheme()
  return (
    <div className={theme==="light"?"leftSide":"leftSideDark"}>

        <div className={theme==="light"?"imageContainer":"imageContainerDark"}><img src={MyImage} alt="" className="img"/></div>
        <div className="name">OMIKUNLE ADEMOLA</div>
        <small className="xLink">@DEMOSTAT101</small>
        <div className="allLinks">

            <a href="#uppers" id="upper"><button className="home" id="button">Home</button></a>

            <br />

            <a href="#about2" id="upper"><button className="about" id="button">About</button></a> 

            <br />

            <a href="#skills" id="upper"><button className="skills" id="Skills">Skills</button></a>

            <br />

            <a href="#Portfolio" id="upper"><button className="portfolio" id="button">Portfolio</button></a>
                    
            <br />

            <a href="#contactMe" id="upper"><button className="contact" id="button">Contact</button></a>
                    
        </div>
      
    </div>
  )
}

export default LeftComponent
