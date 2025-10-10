import './Experience.css';

export default function Experience() {
    return (
        <section id='experience'>

            <h2 className='section-title'>EXPERIENCE</h2>

            <div className='experience-content'>
                
                <div className='experience-item'>
                    <div className='experience-date'>
                        <span>Jul 2022 — Present</span>
                    </div>
                    <div className='experience-details'>
                        <h3>Career Break - Professional Development</h3>
                        <ul>
                            <li>
                            Completed a comprehensive 6-month Front-End Development course covering React, JavaScript (ES6+), HTML5, CSS3, responsive design, and modern web development practices 
                            <a href="https://verify.trueoriginal.com/FB33329A-FA5D-9928-9A6E-EBA1DC84443C/?ref=direct-copy" target="_blank" rel="noopener noreferrer" className="cert-link"> [View Certificate]</a>
                            </li>
                            <li>
                            Completed an in-depth course on modern JavaScript, covering ES6+, DOM manipulation, asynchronous programming, and building dynamic web applications
                            <a href="https://www.udemy.com/certificate/UC-4cadbbe1-0e0f-4498-8dae-f356a8e94002/" target="_blank" rel="noopener noreferrer" className="cert-link"> [View Certificate]</a>
                            </li>
                            <li>
                            Gained hands-on experience in Python scripting, automation, and key IT tasks, including system administration, networking, and managing cloud services
                            <a href="https://coursera.org/share/e81a2b2330644644248d2b4ca124ebbe" target="_blank" rel="noopener noreferrer" className="cert-link"> [View Certificate]</a>
                            </li>
                            <li>
                            Learned SQL fundamentals, including querying, data manipulation, and database management for real-world applications
                            <a href="https://www.udemy.com/certificate/UC-a842d8c3-8b95-4a3b-8372-1faff3c4c19a/" target="_blank" rel="noopener noreferrer" className="cert-link"> [View Certificate]</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className='experience-date'>
                        <span>Oct 2015 — Jun 2022</span>
                    </div>
                    <div className='experience-details'>
                        <h3>Forensic Services Consultant</h3>
                        <ul>
                            <li>
                            Managed technical document processing across multi-region investigations, filtering and analyzing millions of documents using complex queries, boolean logic, and custom workflows in Relativity
                            </li>
                            <li>
                            Created and tracked KPIs for senior management, monitoring project metrics for international jurisdictions
                            </li>
                            <li>
                            Collaborated with legal teams, IT departments, and international stakeholders to optimize document review processes and ensure data accuracy
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className='experience-date'>
                        <span>Oct 2009 — Jul 2015</span>
                    </div>
                    <div className='experience-details'>
                        <h3>Master & Bachelor of Science</h3>
                        <p className='experience-location'>Polytechnic University, Bucharest</p>
                    </div>
                </div>

            </div>
        </section>
    )
}