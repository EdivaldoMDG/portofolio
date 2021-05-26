import React, { useEffect, useState } from "react";
import Layout from '../Layout';
import '../Projects/index.css';
import Project from '../../Components/Projects';
import axios from "../../services/axios";


export default function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function getProjects() {
            const response = await axios.get("/project/all");
            setProjects(response.data);
        }
        if (projects.length === 0) {
            getProjects()
        }
    }, [projects.length]);
    return (
        <Layout>
            <div className="projectsContainer">
                <h1>My Projects</h1>
                <h2 className='resume'>Here you can find my work and projects i have worked most of them are school related and individual studies</h2>
                <div className='projectList'>
                    {
                        projects.map((project) => {
                            <Project project={{ name: project.name, url: project.url, image: project.image }} />
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}