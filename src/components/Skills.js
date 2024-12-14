import React from "react";

function Skills() {
  return (
    <section id="skills" className="bg2">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill">
          <i className="fa-brands fa-html5 fa-2xl"></i>
          <h4>HTML</h4>
        </div>

        <div className="skill">
          <i className="fa-brands fa-css3-alt fa-2xl"></i>
          <h4>CSS</h4>
        </div>

        <div className="skill">
          <i className="fa-brands fa-php fa-2xl"></i>
          <h4>PHP</h4>
        </div>
        <div className="skill">
          <i className="fa-brands fa-js fa-2xl"></i>
          <h4>JavaScript</h4>
        </div>
        <div className="skill">
          <i className="fa-solid fa-database fa-2xl"></i>
          <h4>MySQL</h4>
        </div>
        <div className="skill">
          <i className="fa-brands fa-java fa-2xl"></i>
          <h4>Java</h4>
        </div>

        <div className="skill">
          <i className="fa-brands fa-laravel fa-2xl"></i>
          <h4>Laravel</h4>
        </div>

        <div className="skill">
          <i className="fa-brands fa-react fa-2xl"></i>
          <h4>React</h4>
        </div>
      </div>
    </section>
  );
}

export default Skills;
