import React from 'react';
import background from './media/video (2).mp4';
import '../styles/styles.css';

const Features = () => {
    return (
        <div className="Feature">
            <section 
                style={{
                    position: 'relative',
                }}
                className="feature-section">
                <video
                autoPlay
                loop
                muted
                style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                }}
                src={background}
                />

                <div className="overlay">
                </div>
                <div 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translate(10%, -50%)',
                    }}
                    className="text">
                    <h2>DATA. DESIGN. ENGINEER. GROWTH.</h2>
                    <h3>A passionate data scientist who wants to change the world</h3>
                    <a href="#explore">
                    Explore
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Features;