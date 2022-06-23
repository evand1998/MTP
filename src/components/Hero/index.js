import React from 'react';
import './style.css';

function Hero() {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Evan S. Diaz</h1>
                <p>Full Stack Web Developer</p>
            </div>
        </section>
    )
}

export default Hero;