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
                        <img src="../images/Logistique.png" alt="raccourci" className="fill"/>
                        <div className="aboutItemText">
                            <h3>Formation TSMEL</h3>
                            <p>Aftral - Lescar</p>
                            <p>En cours</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="../images/Integrateur.png" alt="raccourci" />
                        <div className="aboutItemText">
                            <h3>Intégratrice Web</h3>
                            <p>OpenClassRooms (en distanciel)</p>
                            <p>2022</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="../images/Licence.png" alt="mathématiques" />
                        <div className="aboutItemText">
                            <h3>Licence de Mathématiques</h3>
                            <p>UPPA - Pau</p>
                            <p>2004</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}