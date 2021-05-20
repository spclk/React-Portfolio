import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer white">
        <div className="container">
            <div className="row">
            <div className="col l6 s12">
                <h5 className="blue-grey-text text-darken-4">All the Details</h5>
                <p className="blue-grey-text text-darken-4">For the rest of the detailed information about me, navigate to the links.</p>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="blue-grey-text text-darken-4">Links</h5>
                <ul>
                <li><a className="blue-grey-text text-darken-4" href="https://github.com/spclk/spclk.github.io/blob/main/resume.pdf">Resume</a></li>
                <li><a className="blue-grey-text text-darken-4" href="https://www.linkedin.com/in/konstantin-alekseev-000b98206/">LinkedIn</a></li>
                <li><a className="blue-grey-text text-darken-4" href="https://github.com/spclk">GitHub</a></li>
                <li><a className="blue-grey-text text-darken-4" href="mailto:konstantin1020@gmail.com">Email</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container blue-grey-text text-darken-4">
            2021 Website developed by Konstantin Alekseev
            <a className="grey-text text-lighten-4 right" href="#!"></a>
            </div>
        </div>
   </footer>
  );
}

export default Footer;
