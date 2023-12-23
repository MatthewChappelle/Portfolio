import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand glow" to="/" id="name">
                Matthew Chappelle
            </Link>
            <button style={{ backgroundColor: 'white' }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <span className="text-color glow">HOME</span>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <Link className="nav-link" to="/about">
                            <span className="text-color glow">ABOUT</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                        <span className="text-color glow">contact</span>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

