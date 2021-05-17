import React from 'react'
import SideBar from '../Sidebar'
import '../Layout/index.css'

export default function Layout(props) {
    return (
        <div className="main">
            <div className="headerContainer">
                <SideBar/>
            </div>
            <div className="content">
                 {props.children}
             </div>
        </div>
    )
}
