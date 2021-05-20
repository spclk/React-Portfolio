import React from "react";

function Portfolio() {
  return (
    <main className="grey lighten-1">
      <div className="section grey lighten-1"></div>
      <div className="row container">
        <h3 className="header">Portfolio</h3>
        <p className="grey-text text-darken-3 lighten-3">
          This is only a sample of the projects I've completed at UC Davis
          Coding Bootcamp. See more on my <a href="https://github.com/spclk" className="blue-grey-text text-darken-1">GitHub page</a>.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s5">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/cryptelligent.png" alt="screenshot of website"/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Cryptelligent<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="https://spclk.github.io/Cryptelligent/">Website</a> {""}
                  <a href="https://github.com/spclk/Cryptelligent">GitHub</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Cryptelligent<i className="material-icons right">close</i>
                </span>
                <p>
                  This is an online application for new investors who wish to
                  learn more about the world of cryptocurrency.
                </p>
                <p>
                  CoinGecko and Bloomberg APIs are utilized to provide the
                  cryptocurrency information.
                </p>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="images/Day-Planner.png"
                  alt="screenshot of website"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Day Planner<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="https://spclk.github.io/day-planner/">Website</a> {""}
                  <a href="https://github.com/spclk/day-planner">GitHub</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Day Planner<i className="material-icons right">close</i>
                </span>
                <p>
                  This is a simple calendar application that allows a user to
                  save events for each hour of the day at work.
                </p>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="images/Projectimator.jpg"
                  alt="screenshot of website"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Projectimator<i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="https://arcane-dusk-72745.herokuapp.com/">Website</a> {""}
                  <a href="https://github.com/spclk/Projectimator">GitHub</a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Projectimator<i className="material-icons right">close</i>
                </span>
                <p>
                  Provides an online service for Homeowners to locate contractors
                  that are able to work within a specified budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );
}

export default Portfolio;