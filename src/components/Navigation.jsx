import React from 'react';
import './App.css';
import { useRef, useEffect, useState } from "react";

const Navigation = ( { activeSection } ) => {
    const [highlightStyle, setHighlightStyle] = useState({});
    const navRef = useRef();

    useEffect(() => {
        if (!activeSection) {
            setHighlightStyle({ width: 0 }); // hide highlight when on hero
            return;
        }

        const activeBtn = navRef.current.querySelector(
            `button[data-section="${activeSection}"]`
        );

        if (activeBtn) {
            const rect = activeBtn.getBoundingClientRect();
            const navRect = navRef.current.getBoundingClientRect();

            setHighlightStyle({
                width: `${rect.width}px`,
                left: `${rect.left - navRect.left}px`,
            });
        }
    }, [activeSection]);

    return (
        <nav className="top-nav" ref={navRef}>
            <button data-section="about" onClick={() =>
                document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }>About</button>
            <button data-section="experience" onClick={() =>
                document.getElementById("experience").scrollIntoView({ behavior: "smooth" })
            }>Experience</button>
            <button data-section="projects" onClick={() =>
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }>Projects</button>
            <button data-section="contact" onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }>Contact</button>

            <div className="highlight" style={highlightStyle}></div>
        </nav>
    );
};

export default Navigation;