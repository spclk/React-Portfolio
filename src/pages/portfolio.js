import React from "react";
import Project from "../components/Project";
import ProjectData from "../project-data.json"

function Portfolio() {
  return (
    <main className="grey lighten-1">
      <div className="section grey lighten-1"></div>
      <div className="row container">
        <h3 className="header white-text">Portfolio</h3>
        <p className="white-text">
          This is only a sample of the projects I've completed at UC Davis
          Coding Bootcamp. See more on my <a href="https://github.com/spclk" className="blue-grey-text text-darken-1">GitHub page</a>.
        </p>
      </div>
      <div className="container">
        <div className="row">

          {ProjectData.map(project => (
            <Project project={project}/>
          ))}

        </div>
      </div>
    </main>
  );
}

export default Portfolio;