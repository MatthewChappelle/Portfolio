import React from "react";
import "./style.css";

function Project(props) {
    const { projects } = props

    //This logic creates rows each consisting of two items so they can be mapped 2 items. This also allows odd numbers.
    let column = []
    projects.forEach((project, i) => {
        let row = [];
        if (i % 2 === 0) {
            row.push(projects[i], projects[i+1])
            column.push(row);
        }
        if (column[column.length - 1][1] === undefined) {
           column.splice(column.length-1, 1, [row[0]])
        } else return
    })

    return (
        <div>  
            {column.map((project, index) => (
                <div className="row" key={index}>
                    {project.map(item => (
                        <div className="col-12-xs col-md-6" key={item.name}>
                            <div className="shadow card bg-light">
                                <img src={item.imageURL} className="card-img-top" alt={item.name} title={item.name}></img>
                                <div className="card-body">
                                    <p className="card-text portfolio_card_text"><a href={item.appLink} target="_blank" title="Password Generator" rel="noreferrer" class="project-text">{item.name}</a></p>
                                    <hr></hr>
                                    <p className="card-text portfolio_card_text portfolio_card_repo_text"><a href={item.githubLink} target="_blank" title="Github Repo" rel="noreferrer" class="project-text">Github Repo</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}            
        </div>
    );
}

export default Project;

