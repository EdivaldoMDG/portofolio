import React from 'react'
import '../Sidebar/index.css';
import {
    Link
  } from "react-router-dom";
import Logo from '../../image/logo.png';


export default function Sidebar() {
    return (
        <div>
            <img className="logotipo" src={Logo} alt="logo"/>
            <ul>
                <li><Link to="/" className="links">Home</Link></li>
                <li><Link to="/about" className="links">About</Link></li>
                <li><Link to="/projects" className="links">Project</Link></li>
            </ul>
        </div>
    )
}
