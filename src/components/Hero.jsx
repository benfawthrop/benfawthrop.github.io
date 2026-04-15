import React from 'react';
import './App.css';

const Hero = ({ name, subtext }) => {
    return (
        <div className="hero">
            <div className="hero-window">
                <div className="hero-header">
                    PORTFOLIO.EXE
                </div>

                <div className="hero-body">
                    <p className="hero-line">&gt; Initializing portfolio...</p>
                    <p className="hero-line">&gt; Loading user: {name}</p>
                    <p className="hero-line">&gt; Status: READY</p>

                    <h1 className="hero-name">{name}</h1>
                    <p className="hero-subtext">{subtext}</p>

                    <p className="hero-line">&gt; Scroll to continue...</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;