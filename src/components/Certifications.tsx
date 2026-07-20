import React from "react";
import six_sigma_black_belt_certificate from '../assets/images/six_sigma_black_belt_certificate.png';
import six_sigma_green_certificate from '../assets/images/six_sigma_green_certificate.png'; 
// Import other certificate images as you add them:
// import cert_pmp from '../assets/images/cert_pmp.png';
import '../assets/styles/Project.scss';

interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyLink: string;
  image: string;
}

const certificationData: CertificationItem[] = [
  {
    id: 1,
    name: "Certified Lean Six Sigma Black Belt",
    issuer: "Six Sigma Academy Amsterdam (SSAA)",
    date: "2024",
    credentialId: "ac1c65b4-9177-4f7b-9797-098741af8d57",
    verifyLink: "https://www.virtualbadge.io/certificate-validator?credential=ac1c65b4-9177-4f7b-9797-098741af8d57",
    image: six_sigma_black_belt_certificate
  },
  {
    id: 2,
    name: "Certified Lean Six Sigma Green Belt",
    issuer: "Advanced Innovation Group Pro Excellence (AIGPE)",
    date: "2023",
    credentialId: "95637114910787",
    verifyLink: "https://digitalcredentials.aigproexcellence.com/en/verify/95637114910787?ref=email",
    image: "https://storage.googleapis.com/verified-storage/cert/95637114910787.png"
  },
  // {
  //   id: 3,
  //   name: "Project Management Professional (PMP)",
  //   issuer: "Project Management Institute",
  //   date: "2023",
  //   credentialId: "PMP-883920",
  //   verifyLink: "https://www.pmi.org/",
  //   image: six_sigma_green_certificate // Swap this out for your PMP image import later
  
  // },
  // Just copy, paste, and increment the ID for each new certificate!
];

function Certifications() {
  return (
    <div className="projects-container" id="certifications">
      <h1>Certifications & Credentials</h1>
      
      <div className="projects-grid">
        {certificationData.map((cert) => (
          <div className="project-card" key={cert.id}>
            <div className="project-image">
              <a href={cert.verifyLink} target="_blank" rel="noreferrer">
                <img src={cert.image} alt={cert.name} />
              </a>
            </div>
            
            <div className="project-content">
              <h3>{cert.name}</h3>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Issued:</strong> {cert.date}</p>
              {cert.credentialId && (
                <p><strong>Credential ID:</strong> {cert.credentialId}</p>
              )}
            </div>

            <div className="project-actions">
              <a href={cert.verifyLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%' }}>
                Verify Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;