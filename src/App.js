import { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Navigation from './components/navigation/Navigation';
import Projects from './components/projects/Projects';

function App() {

  const [activeSection, setActiveSection] = useState('')

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

      // console.log('Scrolling. Current position:', window.scrollY)
    }  
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='app-container'>

      <Navigation activeSection={activeSection}/>

      <main className='main-content'>

      <About />
      <Experience />
      <Projects />

      </main>

    </div>
  );
}

export default App;
