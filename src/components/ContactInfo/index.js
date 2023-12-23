import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import "./style.css";

function ContactInfo() {
  return (
    <div className="col-md-5">
        <div className="card bg-light shadow">
            <div className="card-body">
                <h3 className="contact_details">Email:</h3>
                <a href="mattchap2@gmail.com">matt@gmail.com</a>
                <hr></hr>
                <h3 className="contact_details">Phone:</h3>
                <p>(123) 456-7890</p>
                <hr></hr>
            </div>
        </div>  
    </div>
  );
}

export default ContactInfo;