import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const Hero = ({ name, subtext }) => {
    const heroRef = useRef(null);
    const [visibilityRatio, setVisibilityRatio] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate visible height of the Hero
            const visibleHeight = Math.max(
                0,
                Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
            );

            // Update opacity based on visible portion
            setVisibilityRatio(visibleHeight / rect.height);
        };

        // Add scroll listener with RAF for smoothness
        const optimizedScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener('scroll', optimizedScroll);

        // Initial calculation
        handleScroll();

        return () => window.removeEventListener('scroll', optimizedScroll);
    }, []);

    return (
        <div
            className="hero"
            ref={heroRef}
            style={{ opacity: visibilityRatio }}
        >
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-name">{name}</h1>
                    {subtext && <p className="hero-subtext">{subtext}</p>}
                </div>
            </div>
        </div>
    );
};

export default Hero;