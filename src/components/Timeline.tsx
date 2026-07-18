import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="JULY 2025 - PRESENT"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Reliability Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">MinebeaMitsumi</h4>
            <h4 className="vertical-timeline-element-subtitle">Cebu, Visayas, PH</h4>
            <br></br>
            <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0' }}>
              <li style={{ marginBottom: '5px' }}>Applied statistical analysis (Weibull, Log-normal, Exponential distributions) to predict system failure rates and ensure long-term operational stability</li>
              <li style={{ marginBottom: '5px' }}>Executed systemic failure investigations using FMEA and Fault Tree Analysis to isolate bottlenecks and reduce MTTR (Mean Time to Repair)</li>
              <li style={{ marginBottom: '5px' }}>Maintained weekly reliability dashboards tracking MTBF, OEE, and failure trends, translating complex technical data into clear reports for management</li>
              <li style={{ marginBottom: '5px' }}>Optimized maintenance schedules and equipment workflows by utilizing predictive modeling to identify and resolve performance degradation before failures occurred</li>
              <li style={{ marginBottom: '5px' }}>Managed process adherence for ISO/IATF/IEC standards, ensuring all equipment configurations met technical and customer requirements</li>
            </ul>

            <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '15px', fontWeight: 'bold' }}>Achievements:</h4>
            <ul style={{ paddingLeft: '20px', margin: '5px 0 0 0' }}>
              <li style={{ marginBottom: '5px' }}>Spearheaded a project to reduce PCB assembly defects by 37.78% by identifying and correcting critical process variables in manual assembly lines</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="JULY 2019 - JUNE 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Wistron InfoComm (Phils.) Corp.</h4>
            <h4 className="vertical-timeline-element-subtitle">Olongapo, Luzon, PH</h4>
            <br></br>  
            <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0' }}>
              <li style={{ marginBottom: '5px' }}>Led comprehensive process audits to maintain compliance with global quality standards, identifying structural bottlenecks and implementing corrective measures to ensure system stability</li>
              <li style={{ marginBottom: '5px' }}>Resolved complex performance issues by applying 8D, 5Why, and CAPA methodologies, systematically isolating theroot sources of defects to minimize recurring errors</li>
              <li style={{ marginBottom: '5px' }}>Managed large datasets to identify operational patterns and performance trends, providing actionable insightsthat informed strategic decision-making and process refinements
</li>
              <li style={{ marginBottom: '5px' }}>Utilized process mapping to evaluate and improve quality control workflows, effectively reducing operational friction and enhancing team efficiency</li>
              <li style={{ marginBottom: '5px' }}>Partnered with internal and external stakeholders to align technical requirements with global ISO standards, ensuring seamless product lifecycle management</li>
            </ul>

            <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '15px', fontWeight: 'bold' }}>Achievements:</h4>
            <ul style={{ paddingLeft: '20px', margin: '5px 0 0 0' }}>
              <li style={{ marginBottom: '5px' }}>Led a semi-automation initiative for reporting and dashboarding, resulting in a 60% reduction in processing time</li>
              <li style={{ marginBottom: '5px' }}>Improved system-wide performance by reducing defect identification and resolution time by 25% through proactive process improvement</li>
              <li style={{ marginBottom: '5px' }}>Spearheaded Kaizen projects to standardize data across platforms, improving tracking accuracy and overall team productivity</li>
              <li style={{ marginBottom: '5px' }}>Awarded multiple Quarterly Business Recognitions (2022, 2023, 2025) for sustained contributions to quality improvement and operational excellence</li>
            </ul>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="AUGUST 2023 – DECEMBER 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Repair Engineer (Seasonal)</h3>
            <h4 className="vertical-timeline-element-subtitle">Wistron InfoComm (Phils.) Corp.</h4>
            <h4 className="vertical-timeline-element-subtitle">Olongapo, Luzon, PH</h4>
            <br></br>
            <ul style={{ paddingLeft: '20px', margin: '5px 0 0 0' }}>
              <li style={{ marginBottom: '5px' }}>Conducted rigorous technical inspections to isolate and address performance failure points, maintaining strict quality control and operational stability</li>
              <li style={{ marginBottom: '5px' }}>Analysed performance reports to replicate issues and implement effective corrective measures, ensuring long-term system reliability</li>
              <li style={{ marginBottom: '5px' }}>Applied precise inspection methodologies to evaluate system viability and ensure all outputs met specified technical performance requirements</li>
            </ul>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="FEBRUARY 2019 – JUNE 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Powerlane Resources Inc.</h4>
            <h4 className="vertical-timeline-element-subtitle">Olongapo, Luzon, PH</h4>
            <br></br>
            <ul style={{ paddingLeft: '20px', margin: '5px 0 0 0' }}>
              <li style={{ marginBottom: '5px' }}>Performed comprehensive audits to ensure operational standards, identifying and documenting opportunities for system-wide performance enhancement</li>
              <li style={{ marginBottom: '5px' }}>Developed and executed programs to improve efficiency and maintain high-quality output standards</li>
              <li style={{ marginBottom: '5px' }}>Investigated quality complaints by conducting systematic root cause analyses and implementing preventive solutions to mitigate future risks</li>
              <li style={{ marginBottom: '5px' }}>Collaborated on new product development to ensure strict adherence to quality and compliance standards</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="JULY 2025 - PRESENT"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sanyo Denki Philippines Inc.</h4>
            <h4 className="vertical-timeline-element-subtitle">Olongapo, Luzon, PH</h4>
            <br></br>
            <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0' }}>
              <li style={{ marginBottom: '5px' }}>Spearheaded the development of automated testing equipment, achieving a 20% reduction in testing time</li>
              <li style={{ marginBottom: '5px' }}>Assessed complex technical documentation to ensure full alignment with customer-defined requirements</li>
              <li style={{ marginBottom: '5px' }}>Implemented automated inspection systems to enhance precision and operational consistency</li>
            </ul>

            <h4 className="vertical-timeline-element-subtitle" style={{ marginTop: '15px', fontWeight: 'bold' }}>Achievements:</h4>
            <ul style={{ paddingLeft: '20px', margin: '5px 0 0 0' }}>
              <li style={{ marginBottom: '5px' }}>Improvement title: Successfully automated shaft appearance inspections and developed predictive quality models based on tool-bit life cycles</li>
            </ul>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;