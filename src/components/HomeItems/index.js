import React from "react";
import mugshot from "../../assets/mugshot.png"
import "./style.css";

function HomeItems() {
    return (
        <div>
            <div className="home-container">
                <div className="row">
                    <div className="card-body">
                        <div id="image">
                            <img src={mugshot} alt="Profile Pic" className="img-thumbnail rounded-circle" title="Matthew Chappelle"></img>
                        </div>
                    </div>
                </div>
                <h1 id="greeting">Matthew Chappelle</h1>
                <h5 id="role">Full Stack Web Developer</h5>
            </div>
        </div>
    );
}

export default HomeItems;

