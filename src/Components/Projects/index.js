import React from 'react';
import image from '../../image/notFound.jpeg';

import "./index.css";

export default function Projects({project}) {
    return (
        <div className="container">
            <img src={project.image === null? image : project.image} alt="projectsPortofolio" />
            <p><strong>Project:</strong> {project.name}</p>
            <p><strong>URL: </strong>{project.url}</p>
        </div>
    )
}
