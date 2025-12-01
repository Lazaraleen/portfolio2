import React from "react";
import './Experience.css';
import skills from './../data/skills.json';
import history from './../data/history.json';
import './Experience.css';

export const Experience = () => {
    return (
        <section className="expContainer" id="experience">
            <h2 className="expTitle">Expérience</h2>
            <div className="expContent">
                <div className="expSkills">
                    {skills.map((skill, id) => (
                        <div key={id} className="expSkill">
                            <div className="expImgContainer">
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <ul className="expHistory">
                    {history.map((historyItem, id) => (
                        <li key={id} className="expHistoryItem">
                            <img src={historyItem.imageSrc} alt={historyItem.organisation} />
                            <div className="expHistoryItemDetail">
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{historyItem.pendant}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => (
                                        <div key={id}>
                                            <li key={id}>{experience}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}