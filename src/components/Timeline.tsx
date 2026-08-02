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
              <li style={{ marginBottom: '5px', textAlign: 'justify'}}>Spearheaded defect-reduction initiatives, cutting PCB assembly errors by 37.78% through targeted process variable optimization.</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Modeled equipment failure rates using Weibull and exponential distributions to predict performance degradation and maximize operational stability.</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Executed systemic root-cause investigations via FMEA and Fault Tree Analysis to isolate bottlenecks and reduce Mean Time to Repair (MTTR).</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Optimized maintenance schedules and equipment workflows by utilizing predictive modeling to identify and resolve performance degradation before failures occurred</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Managed real-time MTBF and OEE reliability dashboards to streamline maintenance workflows and ensure strict ISO/IATF/IEC compliance.</li>
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
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Automated reporting and dashboarding workflows, slashing processing time by 60% and boosting tracking accuracy.</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Resolved critical defects and cut identification-to-resolution time by 25% utilizing 8D, 5Why, and CAPA methodologies.</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Streamlined quality control workflows through process mapping and targeted Kaizen initiatives to eliminate operational friction.</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Secured multiple Quarterly Business Recognitions (2022, 2023, 2025) for driving sustained operational excellence and global ISO compliance.</li>
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
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Conducted rigorous technical inspections to isolate and address performance failure points, maintaining strict quality control and operational stability</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Analysed performance reports to replicate issues and implement effective corrective measures, ensuring long-term system reliability</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Applied precise inspection methodologies to evaluate system viability and ensure all outputs met specified technical performance requirements</li>
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
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Performed comprehensive audits to ensure operational standards, identifying and documenting opportunities for system-wide performance enhancement</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Developed and executed programs to improve efficiency and maintain high-quality output standards</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Investigated quality complaints by conducting systematic root cause analyses and implementing preventive solutions to mitigate future risks</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Collaborated on new product development to ensure strict adherence to quality and compliance standards</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="JANUARY 2016 - SEPTEMBER 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sanyo Denki Philippines Inc.</h4>
            <h4 className="vertical-timeline-element-subtitle">Olongapo, Luzon, PH</h4>
            <br></br>
            <ul style={{ paddingLeft: '20px', margin: '0 0 15px 0' }}>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Spearheaded the development of automated testing equipment, achieving a 20% reduction in testing time</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Automated shaft appearance inspections and developed predictive quality models driven by tool-bit life cycles to eliminate manual errors.</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Evaluated complex technical documentation to guarantee strict alignment with customer-defined specifications.</li>
            </ul>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;