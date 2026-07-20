import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDiagramProject, faGear, faChartBar } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "Six Sigma", // Fixed spelling from "Sig Sigma"
    "Reliability",
    "Grafana",
];

const labelsSecond = [
    "Git",
    "Knime",
    "PostgreSQL",
];

const labelsThird = [
    "DMAIC",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* Skill 1: Data Analysis */}
                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Data Analysis & Engineering</h3>
                    <p style={{ textAlign: 'justify' }}>
                        Transform raw technical metrics into actionable business intelligence. I leverage data-driven 
                        modeling, statistical analysis, and performance tracking architectures to isolate root-cause issues, 
                        forecast reliability trends, and support strategic decision-making.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Skill 2: Automation & Infrastructure */}
                <div className="skill">
                    <FontAwesomeIcon icon={faGear} size="3x"/>
                    <h3>Automation & Infrastructure</h3>
                    <p style={{ textAlign: 'justify' }}>
                        Design and deploy scalable testing matrixes, robust CI/CD pipelines, and infrastructure 
                        automations. I bridge the gap between engineering theory and production, ensuring system 
                        stability, minimal downtime, and seamless, predictable deployment cycles.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Skill 3: Lean Six Sigma */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDiagramProject} size="3x"/>
                    <h3>Lean Six Sigma & Continuous Improvement</h3>
                    <p style={{ textAlign: 'justify' }}>
                        Drive operational excellence by eliminating waste, reducing variability, and optimizing workflows. 
                        I apply data-driven methodologies and root-cause analysis to streamline engineering processes, 
                        enhance system reliability, and deliver measurable business value.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
