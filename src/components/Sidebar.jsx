import React from 'react';
import { FiHome } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';

const Sidebar = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="sidebar">
            <div className="logo-container">
                <button onClick={scrollToTop} className="home-button">
                    <FiHome className="icon home-icon" />
                </button>
            </div>
            <div className="social-links">
                <a href="https://github.com/benfawthrop" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/ben-fawthrop-798322271/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="mailto:benjamin.fawthrop@gmail.com">
                    <FaEnvelope className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;