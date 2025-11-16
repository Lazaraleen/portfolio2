import React from "react";
import './About.css';

export const About = () => {
    return (
        <section className="aboutContainer" id="about">
            <h2 className="aboutTitre">A propos</h2>
            <div className="aboutContent">
                <img src="../images/About.png" alt="A propos" className="aboutImage"/>
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src="../images/AboutMenuIcon.png" alt="raccourci" />
                        <div className="aboutItemText">
                            <h3>Je suis en logistique</h3>
                            <p>Actuellement en formation TSMEL</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="../images/ServeurIcon.png" alt="raccourci" />
                        <div className="aboutItemText">
                            <h3>Je suis toujours en logistique</h3>
                            <p>Quelque part par là</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="../images/CursorIcon.png" alt="raccourci" />
                        <div className="aboutItemText">
                            <h3>Je suis encore et toujours en logistique</h3>
                            <p>Par contre je suis partie de l'autre côté</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}