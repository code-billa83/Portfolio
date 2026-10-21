import React from 'react';
import Image from 'next/image';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Portfolio Websites",
    image: "/P.jpg",
    description: "Modern, responsive portfolio websites for professionals and businesses with stunning animations and user experience.",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Web Hosting", "UI"],
    links: { preview: "#", code: "#" }
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: "/ecommerce.jpg",
    description: "A full-featured e-commerce platform with secure payment integration, user-friendly interface, and robust admin panel for seamless online shopping experiences.",
    tags: ["ASP.NET Core", "C#", "SQL Server", "Web API", "API Integration", "Bootstrap"],
    links: { preview: "#", code: "#" }
  },
  {
    id: 3,
    title: "Admin Dashboards",
    image: "/admin.jpg",
    description: "Feature-rich admin panels with real-time analytics, user management, and data visualization capabilities.",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Web Hosting"],
    links: { preview: "#", code: "#" }
  },
  {
    id: 4,
    title: "Student Management Software",
    image: "/student.jpg",
    description: "A full-featured student management system built with ASP.NET Core, allowing administrators to manage student records, attendance, grades, and generate reports efficiently.",
    tags: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "Bootstrap", "Web Hosting"],
    links: { preview: "#", code: "#" }
  },
  {
    id: 5,
    title: "Automation & Security Tools",
    image: "/automation.jpg",
    description: "Developed custom automation scripts and utility security tools for vulnerability assessment, scanning, and system workflow optimization.",
    tags: ["Python", "Bash", "Git", "Web Testing", "API Integration", "Linux"],
    links: { preview: "#", code: "#" }
  },
  {
    id: 6,
    title: "REST API & Backend Services",
    image: "/restapi.jpg",
    description: "Secure and scalable REST APIs built using ASP.NET Core Web API with JWT authentication, CRUD operations, and database integration for modern applications.",
    tags: ["ASP.NET Core", "C#", "Node.js", "SQL Server", "API Development", "JWT Auth"],
    links: { preview: "#", code: "#" }
  }
];

export default function Projects() {
  return (
    <section className="portfolio-section">
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">

            <div className="project-image-container">
              <Image 
                src={project.image} 
                alt={project.title}
                width={400}
                height={220}
                className="project-img-file"
                priority={project.id <= 3}
              />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.links.preview} className="link-btn preview-btn" target="_blank" rel="noreferrer">
                  👁 Live Preview
                </a>
                <a href={project.links.code} className="link-btn code-btn" target="_blank" rel="noreferrer">
                  &lt;/&gt; Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
