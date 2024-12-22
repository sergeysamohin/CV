import React from "react";
import "../styles/Projects.css";

const Projects = () => {
    return (
        <section className="project">
            <h2>PROJECTS</h2>
            <div className="flex-wrapper2">
                <a href="https://github.com/sergeysamohin/TODO-list2.git"><div className="block">
                    <h3>TODO List</h3>
                    <img src="/todoList.png" alt="" />
                    <div className="text">
                        <p>Frontend</p>
                        <p>React, JS, HTML, CSS</p>
                    </div>

                </div></a>
                <a href="https://github.com/sergeysamohin/Lamoda.git"><div className="block">
                    <h3>LAMODA</h3>
                    <img src="/lamoda.png" alt="lamoda" />
                    <div className="text">
                        <p>Frontend</p>
                        <p>React, JS, HTML, CSS</p>
                    </div>

                </div></a>
                <a href="https://github.com/sergeysamohin/Bench_of_love.git"><div className="block">
                    <h3>TODO List</h3>
                    <img src="/benchOfLove.png" alt="" />
                    <div className="text">
                        <p>Project Manager</p>
                        <p>
                            Organized and assembled a team for a commercial project</p>
                    </div>

                </div></a>
            </div>

        </section>
    );
};

export default Projects;