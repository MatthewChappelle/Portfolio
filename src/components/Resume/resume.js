import React from "react";
import "./style.css";

function Resume() {
  
  return (
    <div className="row">
      <div className="col-md-8 col-sm-12">
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="card-title" title="About Me"><span id="about">My Qualifications:</span></h1>
            <hr></hr>
            <div id="about-me">
              <p>Download my Resume<a href="./Resume.png" download> HERE!</a></p>
              <div id="skills">
                <h3>My skills include but are not limited to:</h3>
                JavaScript, CSS, HTML, Bootstrap, React, JQuery, MySQL, MongoDB, Express, Handlebars, OOP, Node.js, Ajax, Git, as well as Microsoft Word, Excel, and Powerpoint.
              </div>
            </div>
            <div style={{ clear: 'both' }}>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;