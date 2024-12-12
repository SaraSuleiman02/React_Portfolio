import React from "react";

function Projects() {
  return (
    <section id="proj" className="bg">
      <h1>Projects</h1>
      <div className="proj-grid">
        <div className="project">
          <img src="/img/KASITopia.jpeg" alt="KASITopia" height={150} />
          <h5>KASITopia</h5>
          <button type="button">
            <a
              href="https://github.com/SaraSuleiman02/Uni_Proj/tree/main/KASITopia"
              target="_blank"
            >
              See the Code!
            </a>
          </button>
        </div>

        <div className="project">
          <img src="img/WhereToPark.jpeg" alt="WhereToPark" height="150px" />

          <h5>Where to Park</h5>
          <button type="button">
            <a
              href="https://github.com/SaraSuleiman02/Uni_Proj/tree/main/WhereToPark"
              target="_blank"
            >
              See the Code!
            </a>
          </button>
        </div>

        <div className="project">
          <img
            src="img/TH_Essentials.jpeg"
            alt="TH_Essentials"
            height="150px"
          />

          <h5>TH Essentials</h5>
          <button type="button">
            {" "}
            <a
              href="https://github.com/SaraSuleiman02/Uni_Proj/tree/main/ThEssentials"
              target="_blank"
            >
              See the Code!
            </a>
          </button>
        </div>

        <div className="project">
          <img
            src="img/youTube.png"
            alt="youtube"
            height="150px"
            width="100%"
          />

          <h5>Youtube Layout-mock</h5>
          <button type="button">
            <a
              href="https://sarasuleiman02.github.io/Solve_HTML_css_task/Tasks/CSS%20Tasks/Flex/12_flex.html"
              target="_blank"
            >
              See the Code!
            </a>
          </button>
        </div>

        <div className="project">
          <img
            src="img/booking.png"
            alt="booking.com"
            height="150px"
            width="100%"
          />

          <h5>Booking Clone</h5>
          <button type="button">
            <a
              href="https://sarasuleiman02.github.io/Solve_HTML_css_task/Tasks/Booking%20website/booking.html"
              target="_blank"
            >
              See the Code!
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
