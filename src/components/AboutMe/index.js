import React from "react";
import mugshot from "../../assets/mugshot.png"
import "./style.css";

function AboutMe() {

  return (
    <div className="row" style={{ marginRight: 0 }}>
      <div className="col-md-10 col-sm-12">
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="card-title" title="About Me"><span id="about">About Me:</span></h1>
            <hr></hr>
            <div id="about-me-image">
              <img src={mugshot} alt="Matthew Chappelle" className="img-thumbnail shadow" title="Matthew Chappelle"></img>
            </div>
            <div id="about-me">
              <h3>Work Life:</h3>
              <p>I used to work for Toyota as an automotive technician before I discovered the world of programming. I was immediately hooked and I immediately started taking classes. In the meantime, I got a job working for Bosch editing automotive repair manuals, warranty maintenance guides, and pre-delivery inspection bulletins for Toyota vehicles.</p>
              <h3>School Life:</h3>
              <p>I graduated from Eastfield Community College with my asociates and a T-TEN Program certificate of completion. I am currently enrolled in a full stack web development boot bamp at UC Irvine.</p>
              <h3>Skills:</h3>
              <div id="skills">
                JavaScript, CSS, HTML, Bootstrap, React, JQuery, MySQL, MongoDB, Express, Handlebars, OOP, Node.js, Ajax, Git.
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

export default AboutMe;