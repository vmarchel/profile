import { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Navigation from './components/navigation/Navigation';
import Projects from './components/projects/Projects';
import {Github, Linkedin, Mail, Download} from 'lucide-react'
// import CV from './assets/VALENTINA_MARCHEL_CV.pdf'


function App() {

  const [activeSection, setActiveSection] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      const aboutSection = document.getElementById('about')
      const experienceSection = document.getElementById('experience')
      const projectsSection = document.getElementById('projects')

      if (scrollPosition >= projectsSection.offsetTop) {
        setActiveSection('projects')
      } else if (scrollPosition >= experienceSection.offsetTop) {
        setActiveSection('experience')
      } else {
        setActiveSection('about')
      }
    }  
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      
      <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(255, 192, 203, 0.15), 
          transparent 80%)`
      }}
      />
      
      <div className='app-container'>

        <Navigation activeSection={activeSection}/>

        <main className='main-content'>
        
        <About />
        <Experience />
        <Projects />

        </main>

      </div>

      <div className='mobile-social-footer'>
                <a href='https://github.com/vmarchel' className='social-tag' target='_blank' rel="noopener noreferrer">
                <Github />
                </a>
                <a href='https://www.linkedin.com/in/vmarchel/' className='social-tag' target='_blank' rel="noopener noreferrer">
                <Linkedin />
                </a>
                <a href='mailto:vmarchel@outlook.com' className='social-tag'>
                <Mail />
                </a>
                {/* <a href={CV} download='Valentina_Marchel_CV.pdf' className='social-tag'>
                <Download />
                </a> */}
            </div>

    </>
  );
}

export default App;
