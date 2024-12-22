import React from "react";
import "../styles/WorkExperience.css";

const WorkExperience = () => {
    return (
        <section className="work-experience">
            <h2>WORK EXPERIENCE</h2>
            <div>
                <h3>Frontend developer</h3>
                <p> Сourses | Sep 2020 - June 2021</p>
                <ul>
                    <li>I completed a year-long course in web development (HTML, CSS, JS, Figma). </li>
                    <li>I developed graduation projects as part of a team.</li>
                </ul>
            </div>
            <div>
                <h3>Frontend developer</h3>
                <p> Universety | Sep 2023 - present</p>
                <ul>
                    <li>Course of Web-design (HTML, CSS, Figma). </li>
                    <li>Frontend development (JS, React, Node JS, Redux)</li>
                    <li>C++</li>
                    <li>All branch of mathematics</li>
                </ul>
            </div>
            <div>
                <h3>Frontend developer</h3>
                <p>Self-education | Sep 2020 - Present</p>
            </div>
        </section>
    );
};

export default WorkExperience;
