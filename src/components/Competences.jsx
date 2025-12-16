import React from "react";
import './Competences.css';
import competences from "../data/competences.json";
import competences2 from "../data/competences2.json";
import competences3 from "../data/competences3.json";
import competences4 from "../data/competences4.json";
import competences5 from "../data/competences5.json";
import {CompetencesCard} from "./CompetencesCard";
import {CompetencesCard2} from "./CompetencesCard2";

export const Competences = () => {
    return (
        <section className="containerCompetences" id="competences">
            <h2 className="titleCompetences">Compétences</h2>
            <h3 className="titleComp">Soft Skills</h3>
            <div className="competences">{
                competences2.map((competence, id) => {
                    return <CompetencesCard2 key={id} competence={competence}/>;
            })}
            </div>
            <h3 className="titleComp">Hard Skills</h3>
            <div className="competences">{
                competences.map((competence, id) => {
                    return <CompetencesCard key={id} competence={competence}/>;
            })}
            </div>
            <div className="competences">{
                competences3.map((competence, id) => {
                    return <CompetencesCard key={id} competence={competence}/>;
            })}
            </div>
            <div className="competences">{
                competences4.map((competence, id) => {
                    return <CompetencesCard key={id} competence={competence}/>;
            })}
            </div>
            <div className="competences">{
                competences5.map((competence, id) => {
                    return <CompetencesCard key={id} competence={competence}/>;
            })}
            </div>
        </section>
    )
}