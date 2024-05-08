import "./Skills.css"
import { SkillsArray } from "./SkillsArray"



import React from 'react'

const Skills = () => {



  return (
    <div className="Skills" id="skills">



        <div className="SkillsHead">SKILLS</div>

        <div className="skillsIcons">

            {
                SkillsArray.map((val,index)=>{
                    return <div className="cards" key={index}>

                            <div className="cardLogo">{val.logo}</div>
                            <div className="cardName">{val.name}</div>


                        </div>
                })
            }
                
        </div>
      
    </div>
  )
}

export default Skills
