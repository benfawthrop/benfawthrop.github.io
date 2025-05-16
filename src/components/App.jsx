import React, { useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import Hero from './Hero';
import './App.css';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


function App() {
    const form = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

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

    return (

        <div className="app">
            <div className={`success-notification ${showSuccess ? 'visible' : ''}`}>
                <span className="check-icon">✓</span>
                Message sent successfully!
            </div>

            <Sidebar />
            <Navigation />
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
                                    <div className="timeline-date">2024-Present</div>
                                    <p>Delivered private and group lessons to juniors and adults, focusing on
                                        fundamental consistency. Collaborated on camp curriculum development,
                                        incorporating fitness drills and peer analysis sessions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="section">
                    <h2>Projects</h2>
                    {/* Add your content here */}
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