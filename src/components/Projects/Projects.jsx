import React, { useState } from "react";
import "./Projects.css";
import { ProjectArray } from "./ProjectArray";

const Projects = () => {
  const [isShow, setIsShow] = useState(true);

  const [targetId, setTargetId] = useState("");

  let showAnswer = (getSelected) => {
    return setTargetId(getSelected === targetId ? "" : getSelected);
  };

  const handleShow = () => {
    let show = !isShow;
    setIsShow(show);
  };

  return (
    <div className="Portfolio" id="Portfolio">
      <div className="port">
        <span className="MY">MY</span>
        <span className="PORT"> PROJECTS</span>
      </div>

      <div className="works">

        {ProjectArray.map((val) => {
          return (
            <div key={val.ID} className="firstSecond1">
              {targetId !== val.ID ? (

                <div

                  className="first1"
                  onMouseOver={
                    isShow ? () => handleShow(val.ID) : () => showAnswer(val.ID)
                  }
                >
                  <img src={val.image} alt="" className="portImage" />

                  <button className="preview1">PREVIEW</button>

                </div>

              ) : (
                <div

                  id="second1"
                  className="second1"
                  onMouseLeave={
                    isShow ? () => handleShow(val.ID) : () => showAnswer(val.ID)
                  }
                >
                  <h2 className="project">{val.id}</h2>

                  <button className="worklink">
                    <a href={val.visitLink} target="_blank">
                      {val.visitLogo} VISIT
                    </a>
                  </button>

                  <button className="repo">
                    <a href={val.repoLink} target="_blank">
                      {val.repoLogo} REPO
                    </a>
                  </button>
                </div>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Projects;
