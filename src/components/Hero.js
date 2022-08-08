import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Electronics for you</h2>
            <h3>Todays world without electronics is like a <br />body without a soul</h3>
            <Link className="btn" to="/products">View All products</Link>
        </section>
    )
}

export default Hero
