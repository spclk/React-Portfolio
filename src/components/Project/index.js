import React from "react";

function Project() {
  return (
    <>

    <h1>{"Cryptelligent"}</h1>


      {/* Scrollspy: need JS initialization */}
      <div className="row">
        <div className="col s12 m9 l10">
          <div id="introduction" className="section scrollspy">
            <p>Content </p>
          </div>

          <div id="structure" className="section scrollspy">
            <p>Content </p>
          </div>

          <div id="initialization" className="section scrollspy">
            <p>Content </p>
          </div>
        </div>
        <div className="col hide-on-small-only m3 l2">
          <ul className="section table-of-contents">
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#structure">Structure</a>
            </li>
            <li>
              <a href="#initialization">Intialization</a>
            </li>
          </ul>
        </div>
      </div>

      {/* screenshots */}
      <img
        className="materialboxed"
        width="650"
        src="images/sample-1.jpg"
        alt="screenshot"
      />
    </>
  );
}

export default Project;
