import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import "./style.css";


function Footer() {
    return (
        <footer className="footer copyright page-footer">
            <a href="https://github.com/MatthewChappelle" target="_blank" rel="noreferrer"><img src={github} alt="github" className="social-icons"></img></a>{' '}
            <a href="https://www.linkedin.com/in/matt-chap-60675a27a/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" className="social-icons"></img></a>
            <span className="text-white">©Copyright</span>
        </footer>
    );
}

export default Footer;