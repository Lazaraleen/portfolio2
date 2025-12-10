import React from "react";
import './Accueil.css';

export const Accueil = () => {
    return (
        <section className="container">
            <div className="content">
                <h1 className="titre">Hello, je suis Myriam</h1>
                <p className="description little">Je suis en TSMEL</p>
                <p className="description">(Technicien Supérieur en Méthodes et Exploitation Logistique)</p>
                <a href="mailto:myemail@myemail.com" className="contactBtn">Contactez Moi</a>
            </div>
            <img src="./images/Accueil.png" alt="PhotoMyriam" className="photo"/>
            <div className="topBlur"></div>
            <div className="bottomBlur"></div>
        </section>
    )
}