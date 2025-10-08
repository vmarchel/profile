import './Navigation.css';

export default function Navigation ({activeSection}){
    return (
        <nav className='sidebar'>
            <div className='nav-header'>Valentina Marchel</div>

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

            <div>Social Icons</div>
        </nav>
    )
}