import React from "react";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skils from "./components/Skils";
import About from "./components/Aboutme";
import Footer from "./components/Footer";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">

      <Header />
      <div className="container">
        <About />
        <WorkExperience />
        <Education />
        <Skils />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
