import React from "react";
import './Projects.css';
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className="containerProjects">
            <h2 className="titleProjects">Projets</h2>
            <div className="projects">{
                projects.map((project, id) => {
                    return <ProjectCard key={id} project={project}/>;
            })}
            </div>
        </section>
    )
}