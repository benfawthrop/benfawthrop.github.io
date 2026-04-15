import React from 'react';
import './App.css';

const Navigation = ({ activeSection }) => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const offset = 80;

        const top =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({
            top,
            behavior: "smooth"
        });
    };

    return (
        <nav className="top-nav">
            {["about", "experience", "projects", "contact"].map((section) => (
                <button
                    key={section}
                    data-section={section}
                    className={activeSection === section ? "active" : ""}
                    onClick={() => scrollToSection(section)}
                >
                    {section.toUpperCase()}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;