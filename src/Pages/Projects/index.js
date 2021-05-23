import React,{ useEffect,useState } from "react";
import Layout from '../Layout';
import '../Projects/index.css';
import  Project  from '../../Components/Projects';
import axios from "../../services/axios";


export default function Projects(){
    const [projects,setProjects] = useState([]);
    useEffect(() => {
        async function getProjects(){
         const response = await axios.get("/project/all");
           setProjects(response.data);
        }
        if(projects.length === 0) {
           getProjects()
        }
     }, [projects.length]);
    return (
        <Layout>
            <div className="projectsContainer">
                <h1>My Projects</h1>
                <p className='resume'>Lorem ipsum doloris aicajh korem ipsum doloris aicajh Lorem ipsum doloris 
                aicajhLorem ipsum doloris aicajhLorem ipsum doloris aicajhLorem ipsum doloris aicajhLorem ipsum 
                doloris aicajh</p>
                <div className='projectList'>
                    <Project project={{name: "mi e edi palhasse", url:"teste", image:null}}/>
                </div>
            </div>
        </Layout>
    )
}