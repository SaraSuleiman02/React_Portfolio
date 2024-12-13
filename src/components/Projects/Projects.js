import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  // initial number of projects to display
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Array of all project data
  const projects = [
    {
      img: "/img/KASITopia.jpeg",
      imgAlt: "KASITopia",
      title: "KASITopia",
      link: "https://github.com/SaraSuleiman02/Uni_Proj/tree/main/KASITopia",
    },
    {
      img: "img/TH_Essentials.jpeg",
      imgAlt: "TH_Essentials",
      title: "TH Essentials",
      link: "https://github.com/SaraSuleiman02/Uni_Proj/tree/main/WhereToPark",
    },
    {
      img: "img/WhereToPark.jpeg",
      imgAlt: "WhereToPark",
      title: "Where to Park",
      description : "A university project focused on ...",
      link: "https://github.com/SaraSuleiman02/Uni_Proj/tree/main/ThEssentials",
    },
    {
      img: "img/youTube.png",
      imgAlt: "youtube",
      title: "Youtube Layout-mock",
      link: "https://sarasuleiman02.github.io/Solve_HTML_css_task/Tasks/CSS%20Tasks/Flex/12_flex.html",
    },
    {
      img: "img/booking.png",
      imgAlt: "booking.com",
      title: "Booking.com Clone",
      link: "https://sarasuleiman02.github.io/Solve_HTML_css_task/Tasks/Booking%20website/booking.html",
    },
    {
      img: "img/smartSpending.png",
      imgAlt: "Smart Spending",
      title: "Smart Spending",
      link: "https://sarasuleiman02.github.io/Smart_Spending_Proj2/",
    },
    {
      img: "img/waggy.png",
      imgAlt: "Waggy",
      title: "Waggy",
      link: "https://github.com/SaraSuleiman02/waggy",
    },
    {
      img: "img/fillfun.png",
      imgAlt: "FillFun",
      title: "Fill-Fun",
      link: "https://github.com/SaraSuleiman02/FillFun",
    },
  ];

  // Handle "Show More" button click
  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="proj" className="bg">
      <h2>Projects</h2>
      <div className="proj-grid">
        {/* Show only the visible projects */}
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      {/* Show the button only if there are more projects to display */}
      {visibleProjects < projects.length && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;