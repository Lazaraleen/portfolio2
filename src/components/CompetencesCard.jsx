import React from "react";
import './CompetencesCard.css';

export const CompetencesCard = ({competence: {title, imageSrc, description}}) => {
    return (
        <div className="containerCompCard">
            <img src={imageSrc} alt={`${title}`} className="imageCompCard"/>
            <h3 className="titleCompCard large">{title}</h3>
            {/* <p className="descriptionCompCard">{description}</p>s */}
        </div>
    )
}