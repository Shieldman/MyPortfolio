import React from "react";
import './ProjectsSlider.css'
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSlider = () => {

    return (
        <div className="projects-slider">
            <h1>My Projects!</h1>
            <div className="projects-gallery">
                <ProjectCard title={"Game Conqueror"} image={"/images/GameConqueror.png"} imagealt={"game_conqueror"} description={"Game Hub made with React and custom Hooks. email:RTC pw: abcd"} github={"https://github.com/Shieldman/GameConqueror"} projectlink={"https://verdant-peony-57495b.netlify.app"}/>
                <ProjectCard title={"NASA pic of the day"} image={"/images/NASA.png"} imagealt={"nasa"} description={"API interaction and live filtering in a Single Page application made with React and Vite"} github={"https://github.com/Shieldman/NASA-APOD"} projectlink={"https://aquamarine-chaja-db5e39.netlify.app/"}/>
                <ProjectCard title={"Pokemon Landing"} image={"/images/Pokemon.png"} imagealt={"pokemon_landing"} description={"React page connecting to an API as a dynamic landing page"} github={"https://github.com/Shieldman/StyledLanding"} projectlink={"https://celebrated-blancmange-122eb8.netlify.app/"}/>
                <ProjectCard title={"Frontend example"} image={"/images/PcComponentes.png"} imagealt={"pccom"} description={"Front end example of PC Componentes page"} github={"https://github.com/Shieldman/Proyecto2JS"} projectlink={"https://lucent-sprinkles-95fc66.netlify.app/"}/>
                <ProjectCard title={"Weather Page"} image={"/images/Weather.png"} imagealt={"weather"} description={"Weather page using the user location and the information from the weather API"} github={"https://github.com/Shieldman/TheWheather"} projectlink={"https://adorable-tanuki-17534c.netlify.app/"}/>
                <ProjectCard title={"Cars & Owners"} image={"/images/Cars.png"} imagealt={"cars"} description={"Backend project with an Express.js API for creating owners and cars with linked id's in a nosql database"} github={"https://github.com/Shieldman/MERN_7"} projectlink={"https://github.com/Shieldman/MERN_7"}/> 
            </div>
        </div>
    )
}

export default ProjectsSlider;