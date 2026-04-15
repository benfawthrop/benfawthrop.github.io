import React, { useRef, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Hero from './Hero';
import HamburgerMenu from './HamburgerMobile';
import './App.css';
// import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
// import AOS from 'aos';
// import "aos/dist/aos.css";


function App() {
    const form = useRef();
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            title: "C++ Wordsearch Board Generation",
            org: "Personal",
            content: [
                {
                    type: "text",
                    value: "Developed a recursive algorithm to generate possible word search boards of a given size using a specified set of words."
                },
                {
                    type: "text",
                    value: "This involved implementing variable-sized matrices to store boards and creating methods to populate and validate each board. The project required efficient backtracking techniques to ensure correctness."
                }
            ],
            tech: ["C++", "Algorithms", "Backtracking"],
            link: "https://github.com/benfawthrop/data_structures/tree/main/hw/hw_06"
        },
        {
            title: "Battery Model and LapSim",
            org: "Rensselaer Center for Open Source - Rensselaer Motorsport (RM)",
            content: [
                {
                    type: "text",
                    value: "Developed a Python-based simulation of a battery system for an electric vehicle, focusing on performance optimization and energy management."
                },
                {
                    type: "text",
                    value: "The project involved modeling battery chemistry and thermal dynamics, and implementing algorithms to optimize energy distribution across multiple motors."
                }
            ],
            tech: ["Python", "PyBaMM API", "Data Visualization", "Thermal Modeling"],
            link: "https://github.com/RensselaerMotorsport"
        },
        {
            title: "Edureka Event Management Platform",
            org: "Rensselaer Center for Open Source - President's Office",
            content: [
                {
                    type: "text",
                    value: "Contributed to the development of Edureka, the ground truth event management system for RPI, designed for use by the President’s Office and campus-wide display tools like Concerto."
                },
                {
                    type: "text",
                    value: "Built Express.js backend routes to serve weekly event data to Concerto and the public site, as well as admin-specific routes for event editing and archiving."
                },
                {
                    type: "text",
                    value: "On the frontend, developed the admin-facing Edit Event page using React, TypeScript, and Bootstrap, enabling full CRUD functionality for managing events."
                },
                {
                    type: "text",
                    value: "Integrated data from multiple existing platforms (EventHub, StudyCompass) into a unified MongoDB-backed database to centralize event visibility across campus."
                }
            ],
            tech: ["React", "TypeScript", "Express.js", "MongoDB", "Bootstrap"],
            link: "https://github.com/EdurekaRPI"
        },
        {
            title: "C Wordle Server with TCP Socket Connections",
            org: "Personal",
            content: [
                {
                    type: "text",
                    value: "Developed a Wordle game server in C, utilizing TCP socket connections to allow multiple users to connect and play simultaneously from remote locations."
                },
                {
                    type: "text",
                    value: "The project involved implementing multithreading to handle concurrent client connections and managing game states for each player session."
                },
                {
                    type: "text",
                    value: "Designed the server to provide real-time feedback to players, ensuring smooth gameplay and correct word validation."
                }
            ],
            tech: ["C", "TCP/IP", "Multithreading", "Network Programming"],
            link: "https://github.com/benfawthrop/OpSys/tree/main/Homeworks/hw3"
        },
        {
            title: "Object Detection System with Region Proposals",
            org: "Computational Vision Course Project",
            content: [
                {
                    type: "text",
                    value: "Developed an end-to-end object detection system using PyTorch, featuring:"
                },
                {
                    type: "list",
                    items: [
                        "Custom region proposal processing pipeline",
                        "Dual-output network architecture (classification + bounding box regression)",
                        "Combined loss function with BCE and MSE components",
                        "Non-maximum suppression implementation",
                        "Mean Average Precision (mAP) evaluation system"
                    ]
                },
                {
                    type: "text",
                    value: "Achieved robust object detection across 10 classes through careful hyperparameter tuning and implementation of precision-recall curve analysis."
                },
                {
                    type: "text",
                    value: "Implemented visualization tools for bounding box verification and confusion matrix analysis."
                }
            ],
            tech: ["PyTorch", "ResNet-18", "Computer Vision", "mAP Evaluation", "Jupyter Notebook"],
            link: "https://github.com/benfawthrop/Computer_Vision/tree/main/src/hw5"
        },
        {
            title: "This Website!",
            org: "Personal",
            content: [
                {
                    type: "text",
                    value: "Designed and developed a modern responsive portfolio showcasing technical projects and professional experience."
                },
                {
                    type: "text",
                    value: "Key features include:"
                },
                {
                    type: "list",
                    items: [
                        "Dynamic project grid with hover animations",
                        "Interactive timeline component for work history",
                        "EmailJS integration for contact form functionality",
                        "Responsive sidebar navigation",
                        "CSS custom properties for theme consistency"
                    ]
                },
                {
                    type: "text",
                    value: "Built with a focus on performance and accessibility, implementing smooth scroll behavior, semantic HTML structure, and mobile-first responsive design principles."
                }
            ],
            tech: ["React", "CSS", "EmailJS", "Responsive Design", "HTML"],
            link: "https://github.com/benfawthrop/personal_website"
        },
        {
            title: "dinnerparty",
            org: "Software Design & Documentation - Open Source Project",
            content: [
                {
                    type: "text",
                    value: "Led the development of DinnerParty, a full-stack web application designed to simplify recipe discovery, organization, and sharing through a centralized, user-friendly platform."
                },
                {
                    type: "text",
                    value: "Served as team lead and lead developer in an Agile (Scrum) environment, coordinating weekly sprint cycles, delegating tasks, and guiding architectural decisions to ensure steady progress and timely delivery."
                },
                {
                    type: "text",
                    value: "Implemented an AI-powered recipe parsing system that allows users to import recipes directly from external URLs, automatically extracting structured data such as ingredients, instructions, and metadata into the application."
                },
                {
                    type: "text",
                    value: "Built a complete user system with authentication, profile customization, and persistent storage, enabling users to create, edit, and manage their own recipe collections."
                },
                {
                    type: "list",
                    items: [
                        "Full CRUD functionality for user-created recipes",
                        "Automated recipe scraping and data normalization pipeline",
                        "Centralized database for aggregating recipes from multiple sources",
                        "Responsive UI for browsing, editing, and organizing recipes",
                        "Sprint-based development with weekly standups and iterative feature delivery"
                    ]
                },
                {
                    type: "text",
                    value: "Collaborated closely with team members using GitHub workflows, maintaining clean, modular, and scalable code while integrating contributions across both frontend and backend systems."
                }
            ],
            tech: ["React", "TypeScript", "MongoDB", "CSS", "HTML", "ExpressJS", "GeminiAPI", "Docker", "Agile"],
            link: "https://github.com/SDDSixGuys/dinnerparty"
        }
    ];

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

    // tracking section for section highlighting
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const navOffset = 80;

            let closestSection = null;
            let closestDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top - navOffset);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            // Handle hero (top of page)
            if (window.scrollY < 100) {
                setActiveSection(null);
                return;
            }

            if (closestSection) {
                setActiveSection(closestSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on load

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div
            className="app"
            style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/IMG_6056.jpeg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                }}
        >
            <div className={`success-notification ${showSuccess ? 'visible' : ''}`}>
                <span className="check-icon">✓</span>
                Message sent successfully!
            </div>
            <HamburgerMenu />

            <Sidebar />
            <Navigation activeSection={activeSection} />
            <Hero name="Ben Fawthrop" subtext={"4th Year CS Major @ RPI"} />

            <main className="content">
                <section id="about" className="section about-grid" >
                    <h2>About Me</h2>
                    <div className="about-container" >
                        <div className="about-text" >
                            <p>I am a fourth-year Computer Science student at Rensselaer Polytechnic Institute (RPI),
                                concentrating in Artificial Intelligence and Machine Learning. I enjoy building robust
                                full-stack applications and developing algorithmic solutions to real-world problems.
                                My experience spans software development, open-source contributions, and research-driven
                                engineering projects—from backend API development and frontend interfaces to modeling
                                battery systems for motorsport simulation. I'm also an active participant in the RPI
                                community, serving as a captain of the RPI Quadball team and contributing to campus-wide
                                tech platforms. With a strong foundation in Python, C++, and JavaScript frameworks, I’m
                                eager to bring thoughtful, efficient solutions to complex technical challenges.
                            </p>

                            <div className="tech-section" >
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
                        <div className="about-image" >
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

                <section id="experience" className="section" >
                    <h2>Work Experience</h2>
                    <div className="timeline-container" >
                        <div className="timeline" >

                            {/* Professional Experience */}
                            <div className="timeline-item" >
                                <div className="timeline-content" >
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

                            <div className="timeline-item" >
                                <div className="timeline-content" >
                                    <h3>Tennis Coach</h3>
                                    <div className="timeline-company">Tri-City Fitness</div>
                                    <div className="timeline-date">2024-2025</div>
                                    <p>Delivered private and group lessons to juniors and adults, focusing on
                                        fundamental consistency. Collaborated on camp curriculum development,
                                        incorporating fitness drills and peer analysis sessions
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item" >
                                <div className="timeline-content" >
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

                    <div className="desktop">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="folder"
                                onClick={() => setActiveProject(project)}
                            >
                                <div className="folder-icon">
                                    <div className="folder-tab"></div>
                                    <div className="folder-body"></div>
                                </div>
                                <div className="folder-name">{project.title}</div>
                            </div>
                        ))}
                    </div>

                    {activeProject && (
                        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
                            <div
                                className="modal-window"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="modal-header">
                                    {activeProject.title}
                                    <button
                                        className="close-btn"
                                        onClick={() => setActiveProject(null)}
                                    >
                                        X
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="project-organization">
                                        {activeProject.org}
                                    </div>

                                    {activeProject.content.map((block, i) => {
                                        if (block.type === "text") {
                                            return <p key={i}>{block.value}</p>;
                                        }

                                        if (block.type === "list") {
                                            return (
                                                <ul key={i} className="project-features">
                                                    {block.items.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            );
                                        }

                                        return null;
                                    })}

                                    <div className="tech-tags">
                                        {activeProject.tech.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>

                                    <div className="modal-actions">
                                        <a
                                            href={activeProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="retro-btn">
                                                OPEN GITHUB
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section id="contact" className="section" >
                    <h2>Get in Touch</h2>
                    <div className="contact-container" >
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