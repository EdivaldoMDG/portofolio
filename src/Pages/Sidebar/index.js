import React from 'react'
import '../Sidebar/index.css';
import {
    Link
  } from "react-router-dom";


export default function Sidebar() {
    return (
        <header>
            <ul>
                <li><Link to="/" className="links">Home</Link></li>
                <li><Link to="/about" className="links">About</Link></li>
                <li><Link to="/projects" className="links">Project</Link></li>
                <li><Link to="/login" className="links">Login</Link></li>
            </ul>
        </header>
    )
}
