import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
// 1. Add this import (Ensure the path is correct relative to this file)
import myPhoto from '../assets/JoePasos.png'; 

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* 2. Add the img tag here */}
          <img src={myPhoto} alt="Joe Pasos" />
        </div>
        <div className="content">
          <h1>Joe Pasos</h1>
          <p>Senior Quality & Machine Reliability Engineer</p>
          <div className="social_icons">
            <a href="https://github.com/joecausos" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/joepasos/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>


          <div className="mobile_social_icons">
            <a href="https://github.com/joecausos" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/joepasos/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;