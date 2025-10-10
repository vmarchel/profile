import { useState } from 'react';
import './Projects.css';
import {projects} from './projectsData.js'

export default function Projects() {

    const [hoveredId, setHoveredId] = useState(null)
   
    return (
    <section id='projects'>
        <div className='projects-content'>
            <h2 className='section-title'>PROJECTS</h2>
            {projects.map(project => (
            <div 
                key={project.id} 
                className={`project-card ${hoveredId && hoveredId !== project.id ? 'dimmed' : ''}`}
                onClick={() => window.open(project.demo, '_blank')}
                onMouseEnter={()=> setHoveredId(project.id)}
                onMouseLeave={()=> setHoveredId(null)}
            >
                <img className='project-image' src={project.image} alt={project.title}/>
                
                <div className='project-content'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className='project-technologies'>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='tech-tag'>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
);
}