import React from "react";
import projects from "../../utils/projects.json";

const Projects = () => {
  return (
    <div className="RightPanel Projects">
      <ul>
        {projects.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} target="_blank">
                <span className="date">{item.año}</span>
                <span className="nombre">
                  {item.nombre_english}
                </span>
                <div className="icons">
                  {item.icons.map((e, index) => {
                    return <i className={e} key={index}></i>;
                  })}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
