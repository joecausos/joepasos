import React, { useState } from "react";
// KEEP YOUR EXISTING IMPORTS
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

// Add your projects here
const projectData = [
  {
    id: 10,
    name: "Filmate AI",
    category: "Data Analysis",
    description: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
    link: "https://www.filmate.club/",
    image: mock10
  },
];

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Data Analysis", "Reliability Engineering", "Technical SEO",];

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

      <br />
      
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project" key={project.id}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} className="zoom" alt={project.name} width="100%"/>
              </a>
              <a href={project.link} target="_blank" rel="noreferrer">
                <h2>{project.name}</h2>
              </a>
              <p>{project.description}</p>
            </div>
          ))
        ) : (
          <div className="coming-soon-card">
            <h3>Coming Soon</h3>
            <p>I am currently documenting my {selectedCategory} work. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;