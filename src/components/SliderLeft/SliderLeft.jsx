import React from "react";
import './SliderLeft.css'

const SliderLeft = ({title}) => {

    return (
        <div className="slider-left">
            <img className="profile-picture" src="/images/profile_picture.jpg" alt="arnau_rovira" />    
            <h2 style={{color:"#DBD3D8"}}>Arnau Rovira</h2>
            <div className="main-information">
                <ul>
                    <li><b>What I studied:</b> <br/> Comunications Engineering & Full-Stack Development</li>
                    <li><b>Lenguages I speak:</b><br/> HTML, CSS, JavaScript, Python and a bit of C++</li>
                    <li><b>Libraries and Frameworks:</b><br/> React, Node.js, TypeScript, Express & Vite</li>
                    <li><b>Tools I use:</b><br/> Jira, Github, MongoDB, PostgreSQL & VS Code</li>

                </ul>
            </div>
        </div>
    )
}

export default SliderLeft;