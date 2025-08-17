import React from 'react';
import './App.css';

const Navigation = ( ) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="top-nav desktop-only">
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
    );
};

export default Navigation;