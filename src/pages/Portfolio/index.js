import React from "react";
import Project from "../../components/Project"


function Portfolio(props) {
    //   const imagePath = "./Assets/Images/"
    const projects = [
        {
            name: 'APP PLACEHOLDER',
            // imageURL: imagehere,
            appLink: "link here",
            githubLink: "repohere"
        },
        {
            name: 'APP PLACEHOLDER',
            // imageURL: imagehere,
            appLink: "link here",
            githubLink: "repohere"
        },
        {
            name: 'APP PLACEHOLDER',
            // imageURL: imagehere,
            appLink: "link here",
            githubLink: "repohere"
        },
        {
            name: 'APP PLACEHOLDER',
            // imageURL: imagehere,
            appLink: "link here",
            githubLink: "repohere"
        },
        {
            name: 'APP PLACEHOLDER',
            // imageURL: imagehere,
            appLink: "link here",
            githubLink: "repohere"
        },
        {
            name: 'APP PLACEHOLDER',
            // imageURL: imagehere,
            appLink: "link here",
            githubLink: "repohere"
        },
        {
            name: 'APP PLACEHOLDER',
            // imageURL: imagehere,
            appLink: "link here",
            githubLink: "repohere"
        },
    ];
    return (
        <div className="row" style={{ marginRight: 0 }}>
            <div className="col-md-9">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1 className="card-title" title="Portfolio"><span id="portfolio">Portfolio</span></h1>
                        <hr></hr>
                        <Project projects={projects} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;