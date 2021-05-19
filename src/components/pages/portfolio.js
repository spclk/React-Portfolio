import React from "react";

function Portfolio() {
  return (
    <main class="grey lighten-1">
      <div class="section white">
      </div>
        <div class="row container">
          <h3 class="header">Portfolio</h3>
          <p class="grey-text text-darken-3 lighten-3">This is only a sample of the projects I've completed at UC Davis Coding Bootcamp. See more on my GitHub page.</p>
        </div>
        <div class="container">
                <div class="row">
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                              <img class="activator" src="images/cryptelligent.png"/>
                            </div>
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">Cryptelligent<i class="material-icons right">more_vert</i></span>
                              <p><a href="https://spclk.github.io/Cryptelligent/">Link to Website</a></p>
                            </div>
                            <div class="card-reveal">
                              <span class="card-title grey-text text-darken-4">Cryptelligent<i class="material-icons right">close</i></span>
                              <p>This is an online application for new investors who wish to learn more about the world of cryptocurrency.</p> 
                              <p>CoinGecko and Bloomberg APIs are utilized to provide the cryptocurrency information.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                              <img class="activator" src="images/Day-Planner.png"/>
                            </div>
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">Day Planner<i class="material-icons right">more_vert</i></span>
                              <p><a href="https://spclk.github.io/day-planner/">Link to Website</a></p>
                            </div>
                            <div class="card-reveal">
                              <span class="card-title grey-text text-darken-4">Day Planner<i class="material-icons right">close</i></span>
                              <p>This is a simple calendar application that allows a user to save events for each hour of the day at work.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                              <img class="activator" src="images/Projectimator.jpg"/>
                            </div>
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">Projectimator<i class="material-icons right">more_vert</i></span>
                              <p><a href="https://arcane-dusk-72745.herokuapp.com/">Link to Website</a></p>
                            </div>
                            <div class="card-reveal">
                              <span class="card-title grey-text text-darken-4">Projectimator<i class="material-icons right">close</i></span>
                              <p>Provids an online service for Homeowners to locate contractors that are able to work within a specified budget.</p>
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
      
    </main>
  );
}

export default Portfolio;