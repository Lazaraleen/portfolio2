import React, {useState} from "react";
import './Navbar.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className="navbar">
        <a className="title" href="/">Portfolio</a>
        <div className="menu">
            <img 
                className="menuBtn" 
                src={
                    menuOpen
                    ? "../images/menuIconClose.png"
                    : "../images/menuIcon.png"
                    }
                alt="Bouton Menu" 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${"menuUl"} ${menuOpen && "menuUlOpen"}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">A propos</a>
                </li>
                <li>
                    <a href="#experience">Expérience</a>
                </li>
                {/* <li>
                    <a href="#formation">Formation</a>
                </li> */}
                <li>
                    <a href="#competences">Compétences</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
}