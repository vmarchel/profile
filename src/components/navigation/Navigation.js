import './Navigation.css';
import {Github, Linkedin, Mail, Download} from 'lucide-react'
// import CV from '../../assets/VALENTINA_MARCHEL_CV.pdf'

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
                <a href='https://github.com/vmarchel' target='_blank' rel="noopener noreferrer">
                <Github />
                </a>
                <a href='https://www.linkedin.com/in/vmarchel/' target='_blank' rel="noopener noreferrer">
                <Linkedin />
                </a>
                <a href='mailto:vmarchel@outlook.com'>
                <Mail />
                </a>
                {/* <a href={CV} download='Valentina_Marchel_CV.pdf'>
                <Download />
                </a> */}
            </div>

        </nav>
    )
}