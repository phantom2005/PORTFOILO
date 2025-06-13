import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "SETLABS",
    description:
      "Find and customize your ideal office, cabin, or flexible workspace with ease. Your perfect spot, personalized.",
    image: "/assets/projectpic/setlabpic.jpg",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    demoUrl: null,
    githubUrl: 'https://github.com/phantom2005/SETLABS',
  },
  {
    id: 2,
    title: "JIVANAMRIT",
    description:
      "Empower your agricultural activities with our advanced AI-integrated web application. SmartFarm AI provides farmers with cutting-edge tools.",
    image: "/assets/projectpic/jivanamirt.jpeg",
    tags: ["HTML", "CSS", "JAVASCRIPT", "MONGODB","FLASK"],
    demoUrl: '/assets/videoes/jivanamrit.mp4',
    githubUrl: "https://github.com/phantom2005/Jivanamrta",
  },
  {
    id: 3,
    title: "HIVEMIND",
    description:
      "This full-stack web application integrates blockchain technology to create a secure and transparent platform for managing job and internship opportunities.",
    image: "/assets/projectpic/hivehimdpic.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "/assets/videoes/hivemind.mp4",
    githubUrl: 'https://github.com/phantom2005/HIVEMIND/tree/main/hivemind-main',
  },
  {
    id: 4,
    title: "TIC-TAC-TOE",
    description:
      "A classic Tic Tac Toe for interactive gameplay. Place your X's and O's and try to get three in a row!",
    image: "/assets/projectpic/gamepic.jpg",
    tags: ["HTML", "JAVASCRIPT", "CSS"],
    demoUrl: '/assets/videoes/tic-tac video.mp4',
    githubUrl: "https://github.com/phantom2005/TIC-TAC-TOE",
  },
  {
    id: 5,
    title: "ASHRAY",
    description: "!!IN PROGRESS!!",
    image: "/assets/projectpic/ashray.jpeg",
    tags: [],
  },
   {
    id: 6,
    title: "PORTFOLIO",
    description: "A dynamic, component-based web application showcasing my projects and skills, built with React and bit touch of my creativity.",
    image: "/assets/projectpic/portfolio.jpg ",
    tags: [],
     githubUrl: "https://github.com/phantom2005/PORTFOILO",
  },
  {
    id: 7,
    title: "",
    description: "",
    image: "/assets/projectpic/nextpic.jpg",
    tags: [],
    
  },
 
];

export const ProjectsSection = () => {
  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          {" "}
          Featured{" "}
          <span className="projects-heading-highlight"> Projects </span>
        </h2>

        <p className="projects-description">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
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
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-link"
                      >
                        <Github size={20} />
                      </a>
                    )}
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