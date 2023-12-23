import React, { useState } from "react";
import "./style.css";

function EmailForm() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate fields again in case they haven't lost focus yet
        handleNameBlur();
        handleEmailBlur();
        handleMessageBlur();

        // Only proceed if all fields are valid
        if (!nameError && !emailError && !messageError) {
            // TODO: Do something with the form data, like sending it to a server
            console.log({ name, email, message });

            // Clear the form
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    const handleNameBlur = () => {
        if (!name) {
            setNameError("Name field is required");
        } else {
            setNameError("");
        }
    };

    const handleEmailBlur = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError("Email field is required");
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email");
        } else {
            setEmailError("");
        }
    };

    const handleMessageBlur = () => {
        if (!message) {
            setMessageError("Message field is required");
        } else {
            setMessageError("");
        }
    };

    return (
        <div className="col-md-7">
            <div className="card bg-light shadow">
                <div className="card-body">
                    <h1 className="card-title" title="Contact">
                        <span id="contact">Contact Me</span>
                    </h1>
                    <hr></hr>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={handleNameBlur}
                                required
                            ></input>
                            {nameError && <div className="error">{nameError}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail2">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleEmailBlur}
                                required
                            ></input>
                            {emailError && <div className="error">{emailError}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputMessage1">Message:</label>
                            <textarea
                                className="form-control"
                                id="exampleInputMessage1"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onBlur={handleMessageBlur}
                                required
                            ></textarea>
                            {messageError && <div className="error">{messageError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary shadow" title="Submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmailForm;