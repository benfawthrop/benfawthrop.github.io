import React, { useState } from 'react';
import { FiHome, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsOpen(false);
    };

    return (
        <div className="mobile-menu">
            <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX /> : '☰'}
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="mobile-menu-backdrop"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div className={`mobile-nav-container ${isOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    <button onClick={scrollToTop} className="mobile-nav-item">
                        <FiHome className="icon" />
                        <span>Home</span>
                    </button>

                    <button onClick={() => scrollToSection('about')} className="mobile-nav-item">
                        About
                    </button>
                    <button onClick={() => scrollToSection('experience')} className="mobile-nav-item">
                        Experience
                    </button>
                    <button onClick={() => scrollToSection('projects')} className="mobile-nav-item">
                        Projects
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="mobile-nav-item">
                        Contact
                    </button>

                    <div className="mobile-social-links">
                        <a
                            href="https://github.com/benfawthrop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-nav-item"
                        >
                            <FaGithub className="icon" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ben-fawthrop-798322271/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-nav-item"
                        >
                            <FaLinkedin className="icon" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:benjamin.fawthrop@gmail.com" className="mobile-nav-item">
                            <FaEnvelope className="icon" />
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
