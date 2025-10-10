import './Navigation.css';
import {Github, Linkedin, Mail} from 'lucide-react'

export default function Navigation ({activeSection}){
    return (
        <nav className='sidebar'>
            <div className='nav-header'>
                <h3>Valentina Marchel</h3>
                <h5>Front End Enthusiast</h5>
                <p>I enjoy creating web experiences that just make sense to use</p>
            </div>

            <ul>
                <li><a 
                href='#about'
                className={activeSection === 'about' ? 'active' : ''}
                >
                ABOUT
                </a></li>

                <li><a 
                href='#experience'
                className={activeSection === 'experience' ? 'active' : ''}
                >
                EXPERIENCE
                </a></li>
                <li><a 
                href='#projects'
                className={activeSection === 'projects' ? 'active' : ''}
                >
                PROJECTS</a></li>
            </ul>

            <div className='social-icons'>
                <a href='https://github.com/vmarchel' target='_blank'>
                <Github />
                </a>
                <a href='https://www.linkedin.com/in/vmarchel/' target='_blank'>
                <Linkedin />
                </a>
                <a href='mailto:vmarchel@outlook.com'>
                <Mail />
                </a>
            </div>

        </nav>
    )
}