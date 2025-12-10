import React from "react";
import './ProjectCard.css';

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
    return (
        <div className="containerCard">
            <img src={imageSrc} alt={`${title}`} className="imageCard"/>
            <h3 className="titleCard">{title}</h3>
            <p className="descriptionCard">{description}</p>
            <ul className="skillsCard">
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className="skillCard">{skill}</li>
                    )
                   
                })}
            </ul>
            <div className="linksCard">
                <a href={demo} className="linkCard">Demo</a>
                <a href={source} className="linkCard">Source</a>
            </div>
        </div>
    )
}