import React, {useState, useEffect} from "react";
import {
    Main,
    About,          // 1. Import About
    Expertise,
    Timeline,
    Project,
    Certifications, // 2. Import Certifications
    Contact,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <About/>           {/* Placed right after the hero banner */}
            <Expertise/>
            <Timeline/>
            <Project/>
            <Certifications/>  {/* Placed right after your practical projects */}
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;