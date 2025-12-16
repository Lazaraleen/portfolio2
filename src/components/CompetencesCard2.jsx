import React from "react";
import './CompetencesCard.css';

export const CompetencesCard2 = ({competence: {title, imageSrc}}) => {
    return (
        <div className="containerCompCard color2">
            <img src={imageSrc} alt={`${title}`} className="imageCompCard"/>
            <h3 className="titleCompCard">{title}</h3>
        </div>
    )
}