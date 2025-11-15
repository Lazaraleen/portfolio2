import React from "react";
import './Accueil.css';

export const Accueil = () => {
    return (
        <section className="container">
            <div className="content">
                <h1 className="titre">Hi, I'm Myriam</h1>
                <p className="description">I'm in Logistic</p>
                <a href="mailto:myemail@myemail.com" className="contactBtn">Contactez Moi</a>
            </div>
            <img src="./images/LaptopCircle.png" alt="PhotoMyriam" className="photo"/>
            <div className="topBlur"></div>
            <div className="bottomBlur"></div>
        </section>
    )
}