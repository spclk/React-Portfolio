import React from "react";

function Portfolio() {
  return (
    <main>
      <div className="section white">
        <div className="row container">
          <h6 className="grey-text text-darken-3 lighten-3">
            I'm Konstantin Alekseev, a Full-Stack Web Developer in Folsom, CA. I
            love coding because it allows me to solve complex challenges and
            rewards me with a thrill of creating things into existence. I’m
            excited about helping individuals and companies to display the best
            presence in the digital world of today. I'm super passioante about
            making contributions to developing tools that make this world a
            better place to live in. As a curious person, I love to learn new
            things. Feel free to reach out to me.
          </h6>
        </div>
      </div>
      <div >
        <div >
          <img src="../images/Portfolio.png" alt="digital" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h3 className="header">Portfolio</h3>
          <h6 className="grey-text text-darken-3 lighten-3">
            Check out some of the the things I've worked on at the UC Davis
            Coding Bootcamp.{" "}
            <a href="portfolio.html" className="blue-grey-text text-darken-4">
              CLICK HERE
            </a>
          </h6>
        </div>
      </div>
      <br />
      <br />
      <div className="parallax-container">
        <div className="parallax">
          <img src="images/keyboard binery numbers.jpg" alt="keyboard" />
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
