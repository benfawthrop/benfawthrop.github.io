import React, { useRef, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Hero from './Hero';
import HamburgerMenu from './HamburgerMobile';
import './App.css';
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


function App() {
    const form = useRef();
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Initialize EmailJS with User ID
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current
        )
            .then((result) => {
                setShowSuccess(true);
                form.current.reset();
                setTimeout(() => setShowSuccess(false), 3000);
            }, (error) => {
                alert('Failed to send message. Please try again later.');
            });
    };

    useEffect(() => {
        const hero = document.querySelector(".hero");
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains("hero")) {
                            setActiveSection(null); // no highlight on hero
                        } else {
                            setActiveSection(entry.target.id);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (hero) observer.observe(hero);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (

        <div className="app">
            <div className={`success-notification ${showSuccess ? 'visible' : ''}`}>
                <span className="check-icon">✓</span>
                Message sent successfully!
            </div>
            <HamburgerMenu />
            <div className="mobile-menu-backdrop"></div>

            <Sidebar />
            <Navigation activeSection={activeSection} />
            <Hero name="Ben Fawthrop" subtext={"4th Year CS Major @ RPI"} />

            <main className="content">
                <section id="about" className="section about-grid">
                    <h2>About Me</h2>
                    <div className="about-container">
                        <div className="about-text">
                            <p>I am a fourth-year Computer Science student at Rensselaer Polytechnic Institute (RPI),
                                concentrating in Artificial Intelligence and Machine Learning. I enjoy building robust
                                full-stack applications and developing algorithmic solutions to real-world problems.
                                My experience spans software development, open-source contributions, and research-driven
                                engineering projects—from backend API development and frontend interfaces to modeling
                                battery systems for motorsport simulation. I'm also an active participant in the RPI
                                community, serving as a captain of the Quadball team and contributing to campus-wide
                                tech platforms. With a strong foundation in Python, C++, and JavaScript frameworks, I’m
                                eager to bring thoughtful, efficient solutions to complex technical challenges.
                            </p>

                            <div className="tech-section">
                                <h3>Technologies I've Worked With Recently</h3>
                                <ul className="tech-list">
                                    <li>Python</li>
                                    <li>PyTorch</li>
                                    <li>C++</li>
                                    <li>C</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>Version Control (Git)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-image">
                            <img
                                // src="https://placehold.co/600x800"
                                src={ process.env.PUBLIC_URL + "/images/profile.jpg" }
                                alt="Ben Fawthrop"
                                className="profile-photo"
                                width="600"
                                height="800"
                            />
                        </div>
                    </div>
                </section>

                <section id="experience" className="section">
                    <h2>Work Experience</h2>
                    <div className="timeline-container">
                        <div className="timeline">

                            {/* Professional Experience */}
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Tennis Coach & Racket Technician</h3>
                                    <div className="timeline-company">Enfield Tennis Club</div>
                                    <div className="timeline-date">2019 - 2023</div>
                                    <p>Coached over 300 individual and group lessons per season, improving participant
                                        skills in stroke technique, strategy, and footwork. Designed and led summer
                                        camps for 6–16 year‑olds. Consulted with members on racket selection,
                                        string type, and tension; strung and maintained 300+ rackets in 2023.
                                        Managed front‑desk operations, handling member inquiries, registrations,
                                        and pro‑shop sales.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Tennis Coach</h3>
                                    <div className="timeline-company">Tri-City Fitness</div>
                                    <div className="timeline-date">2024-2025</div>
                                    <p>Delivered private and group lessons to juniors and adults, focusing on
                                        fundamental consistency. Collaborated on camp curriculum development,
                                        incorporating fitness drills and peer analysis sessions
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <h3>Food Runner/Expo</h3>
                                    <div className="timeline-company">Brown's Brewing Company</div>
                                    <div className="timeline-date">2025</div>
                                    <p>Assisted in high-volume food service by coordinating timely delivery of
                                        dishes between kitchen and dining areas. Maintained quality control and
                                        presentation standards while communicating closely with chefs and servers
                                        to ensure seamless guest experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section">
                    <h2>Projects</h2>
                    <div className="projects-container">
                        <div className="project-card">
                            <h3>C++ Wordsearch Board Generation</h3>
                            <div className="project-organization">Personal</div>
                            <p>Developed a recursive algorithm to generate possible word search boards of a given size
                                using a specified set of words. This involved implementing variable-sized matrices to
                                store boards and creating methods to populate and validate each board. The project required
                                efficient backtracking techniques to ensure correctness.
                            </p>
                            <div className="tech-tags">
                                <span>C++</span>
                                <span>Algorithms</span>
                                <span>Backtracking</span>
                            </div>
                            <a
                                href="https://github.com/benfawthrop/data_structures/tree/main/hw/hw_06"
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>

                        <div className="project-card">
                            <h3>Battery Model and LapSim</h3>
                            <div className="project-organization">Rensselaer Center for Open Source - Rensselaer Motorsport (RM)</div>
                            <p>Developed a Python-based simulation of a battery system for an electric vehicle, focusing
                                on performance optimization and energy management. The project involved modeling
                                battery chemistry and thermal dynamics, and implementing algorithms to optimize
                                energy distribution across multiple motors.
                            </p>
                            <div className="tech-tags">
                                <span>Python</span>
                                <span>PyBaMM API</span>
                                <span>Data Visualization</span>
                                <span>Thermal Modeling</span>
                            </div>
                            <a
                                href="https://github.com/RensselaerMotorsport"
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>

                        <div className="project-card">
                            <h3>Edureka Event Management Platform</h3>
                            <div className="project-organization">Rensselaer Center for Open Source - President's Office</div>
                            <p>Contributed to the development of Edureka, the ground truth event management system for RPI, designed for use by the President’s
                                Office and campus-wide display tools like Concerto. Built Express.js backend routes to serve weekly event data to Concerto and the
                                public site, as well as admin-specific routes for event editing and archiving. On the frontend, developed the admin-facing Edit Event
                                page using React, TypeScript, and Bootstrap, enabling full CRUD functionality for managing events. Integrated data from multiple
                                existing platforms (EventHub, StudyCompass) into a unified MongoDB-backed database to centralize event visibility across campus.
                            </p>
                            <div className="tech-tags">
                                <span>React</span>
                                <span>TypeScript</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Bootstrap</span>
                            </div>
                            <a
                                href="https://github.com/EdurekaRPI"
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>

                        <div className="project-card">
                            <h3>C Wordle Server with TCP Socket Connections</h3>
                            <div className="project-organization">Personal</div>
                            <p>Developed a Wordle game server in C, utilizing TCP socket connections to allow multiple users to connect and play
                                simultaneously from remote locations. The project involved implementing multi-threading to handle concurrent client
                                connections and managing game states for each player session. Designed the server to provide real-time feedback to players,
                                ensuring smooth gameplay and correct word validation.
                            </p>
                            <div className="tech-tags">
                                <span>C</span>
                                <span>TCP/IP</span>
                                <span>Multithreading</span>
                                <span>Network Programming</span>
                            </div>
                            <a
                                href="https://github.com/benfawthrop/OpSys/tree/main/Homeworks/hw3"
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <div className="project-card">
                            <h3>Object Detection System with Region Proposals</h3>
                            <div className="project-organization">Computational Vision Course Project</div>
                            <p>
                                Developed an end-to-end object detection system using PyTorch, featuring:
                                <ul className="project-features">
                                    <li>Custom region proposal processing pipeline</li>
                                    <li>Dual-output network architecture (classification + bounding box regression)</li>
                                    <li>Combined loss function with BCE and MSE components</li>
                                    <li>Non-maximum suppression implementation</li>
                                    <li>Mean Average Precision (mAP) evaluation system</li>
                                </ul>
                                Achieved robust object detection across 10 classes through careful hyperparameter tuning
                                and implementation of precision-recall curve analysis. Implemented visualization tools for
                                bounding box verification and confusion matrix analysis.
                            </p>
                            <div className="tech-tags">
                                <span>PyTorch</span>
                                <span>ResNet-18</span>
                                <span>Computer Vision</span>
                                <span>mAP Evaluation</span>
                                <span>Jupyter Notebook</span>
                            </div>
                            <a
                                href="https://github.com/benfawthrop/Computer_Vision/tree/main/src/hw5"
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <div className="project-card">
                            <h3>This Website!</h3>
                            <div className="project-organization">Personal</div>
                            <p>
                                Designed and developed a modern responsive portfolio showcasing technical projects and professional experience.
                                Key features include:
                                <ul className="project-features">
                                    <li>Dynamic project grid with hover animations</li>
                                    <li>Interactive timeline component for work history</li>
                                    <li>EmailJS integration for contact form functionality</li>
                                    <li>Responsive sidebar navigation</li>
                                    <li>CSS custom properties for theme consistency</li>
                                </ul>
                                Built with a focus on performance and accessibility, implementing smooth scroll behavior,
                                semantic HTML structure, and mobile-first responsive design principles.
                            </p>
                            <div className="tech-tags">
                                <span>React</span>
                                <span>CSS Modules</span>
                                <span>EmailJS</span>
                                <span>React Icons</span>
                                <span>Responsive Design</span>
                                <span>HTML</span>
                            </div>
                            <a
                                href="https://github.com/benfawthrop/personal_website"
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <h2>Get in Touch</h2>
                    <div className="contact-container">
                        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="from_email"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder=" "
                            required
                        ></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>

                        <div className="contact-info">
                            <h3>Direct Contact</h3>
                            <ul className="contact-list">
                                <li>
                                    <i className="icon fas fa-envelope"></i>
                                    <a href="mailto:benjamin.fawthrop@gmail.com">benjamin.fawthrop@gmail.com</a>
                                </li>
                                <li>
                                    <i className="icon fas fa-phone"></i>
                                    <a href="tel:8604368766">(860) 436-8766</a>
                                </li>
                                <li>
                                    <i className="icon fab fa-github"></i>
                                    <a href="https://github.com/benfawthrop" target="_blank" rel="noopener noreferrer">github.com/benfawthrop</a>
                                </li>
                                <li>
                                    <i className="icon fab fa-linkedin"></i>
                                    <a href="https://linkedin.com/in/ben-fawthrop-798322271" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;