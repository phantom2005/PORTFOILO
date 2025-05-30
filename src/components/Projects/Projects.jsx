import React from 'react';
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "SETLABS",
    description: "A frontent web project for renting and setup personlize office,cabin,space e.t.c.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "JIVANAMRIT",
    description: "An AI integrated web app to upgrage agricultural activity and technologies.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS","JAVASCRIPT", "MONGODB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "HIVEMIND",
    description: "A full stack web app build with blockchain related to job and internship .",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },

    {
    id: 5,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 6,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          {" "}
          Featured <span className="projects-heading-highlight"> Projects </span>
        </h2>

        <p className="projects-description">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card-wrapper"
            >
              <div className="project-image-hider">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-card-content">
                <div className="project-tags-container">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-card-title"> {project.title}</h3>
                <p className="project-card-description">
                  {project.description}
                </p>
                <div className="project-card-links">
                  <div className="project-card-icon-links">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-button-section">
          <a
            className="cosmic-button github-link-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/phantom2005"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};