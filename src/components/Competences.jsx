import React from "react";
import './Competences.css';
import competences from "../data/competences.json";
import {CompetencesCard} from "./CompetencesCard";

export const Competences = () => {
    return (
        <section className="containerCompetences">
            <h2 className="titleCompetences">Compétences</h2>
            <div className="competences">{
                competences.map((competence, id) => {
                    return <CompetencesCard key={id} competence={competence}/>;
            })}
            </div>
        </section>
    )
}