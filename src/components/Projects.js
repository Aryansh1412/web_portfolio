import React from "react";
import "./Projects.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website to showcase projects, skills, and contact information. Integrated animations and transitions with Framer Motion to enhance user experience.",
    technologies: ["React JSX", "HTML", "Tailwind CSS", "Framer Motion"],
    image: project1,
    link: "https://github.com/Aryansh1412/personal-portfolio",
  },
  {
    title: "RealTime Code-Editor",
    description:
      "A real-time collaborative code editor allowing multiple users to write, edit, and execute code simultaneously. Implemented real-time synchronization using WebSocket to ensure seamless collaboration.",
    technologies: ["React JS", "HTML", "CSS", "Node.JS", "Express JS"],
    image: project2,
    link: "https://github.com/Aryansh1412/realtime-code-editor",
  },
  {
    title: "Leaderboard",
    description:
      "An application that displays a list of players with their respective scores, sorted in descending order.Implemented an auto-scrolling image carousel that add a dynamic and visually appealing feature.",
    technologies: ["React JS", "HTML", "CSS", "Typescript", "Redux"],
    image: project3,
    link: "https://github.com/Aryansh1412/Leaderboard_project",
  },
  // Add more projects if needed
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>
        <p className="technologies">
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
