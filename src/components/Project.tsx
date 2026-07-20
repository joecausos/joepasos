import React, { useState } from "react";
// IMPORT YOUR IMAGES HERE
import project_001_technical_seo_github from '../assets/images/project_001_technical_seo_github.png';
import '../assets/styles/Project.scss';

// Define the shape of a Project for TypeScript
interface ProjectItem {
  id: number;
  name: string;
  category: string;
  description: string;
  link: string;
  repo: string;
  image: string;
}

const projectData: ProjectItem[] = [
  {
    id: 10,
    name: "Technical SEO Audit of GitHub.io Page",
    category: "Technical SEO",
    description: "This project involved conducting a comprehensive technical SEO audit of a GitHub.io page. The audit focused on identifying and resolving issues related to site structure, meta tags, page speed, mobile responsiveness, and other critical SEO factors.",
    link: "https://joecausos.github.io/joepasos",
    repo: "https://github.com/joecausos/technical-seo/tree/main/projects/001_github.io",
    image: project_001_technical_seo_github
  },

  // {
  //   id: 11, // ALWAYS use a unique number (increment it by 1)
  //   name: "Project Title",
  //   category: "DevOps", // Must match your category list exactly
  //   description: "Brief, punchy description of what you built and the value it provides.",
  //   link: "https://your-live-link.com",
  //   repo: "https://github.com/your-username/repo-name",
  //   image: project_001_technical_seo_github// Use the variable you imported above
  // },

  // {
  //   id: 12, // ALWAYS use a unique number (increment it by 1)
  //   name: "Project Title",
  //   category: "DevOps", // Must match your category list exactly
  //   description: "Brief, punchy description of what you built and the value it provides.",
  //   link: "https://your-live-link.com",
  //   repo: "https://github.com/your-username/repo-name",
  //   image: project_001_technical_seo_github// Use the variable you imported above
  // },

  // {
  //   id: 11, // ALWAYS use a unique number (increment it by 1)
  //   name: "Project Title",
  //   category: "DevOps", // Must match your category list exactly
  //   description: "Brief, punchy description of what you built and the value it provides.",
  //   link: "https://your-live-link.com",
  //   repo: "https://github.com/your-username/repo-name",
  //   image: project_001_technical_seo_github// Use the variable you imported above
  // },

  // {
  //   id: 12, // ALWAYS use a unique number (increment it by 1)
  //   name: "Project Title",
  //   category: "DevOps", // Must match your category list exactly
  //   description: "Brief, punchy description of what you built and the value it provides.",
  //   link: "https://your-live-link.com",
  //   repo: "https://github.com/your-username/repo-name",
  //   image: project_001_technical_seo_github// Use the variable you imported above
  // },

];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Data Analysis", "DevOps", "Reliability Engineering", "Technical SEO"];

  const filteredProjects = selectedCategory === "All" 
    ? projectData 
    : projectData.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      
      <div className="category-buttons">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={selectedCategory === cat ? "active" : ""} 
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.name} />
                </a>
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-actions">
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">Live Site</a>
                <a href={project.repo} target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
              </div>
            </div>
          ))
        ) : (
          <div className="coming-soon-card">
            <h3>🚀 Coming Soon</h3>
            <p>I am currently documenting my {selectedCategory} work. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;