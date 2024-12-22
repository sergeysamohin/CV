import React from "react";
import "../styles/Skils.css";

const Skils = () => {
    return (
        <section className="skils">
            <h2>SKILS</h2>
            <div className="flex-wrapper">
                <div className="left-skils">
                    <h3>Technical</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Figma</li>
                    </ul>
                    <h3>Languages</h3>
                    <ul>
                        <li>Russian (native)</li>
                        <li>English (B2)</li>
                    </ul>
                </div>
                <div className="right-skils">
                    <h3>Proffesional</h3>
                    <ul>
                        <li>Effective communication</li>
                        <li>Successful Negotiation</li>
                        <li>Strong problem solver</li>
                        <li>Good time management</li>
                        <li>Systems thinking</li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Skils;
