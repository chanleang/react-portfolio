import React from 'react';
import background from './media/video (2).mp4';
import '../styles/styles.css';
import styled, { keyframes } from 'styled-components';

export const animation = keyframes`
    0% { opacity: 0; }
    25% { opacity: 1; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`;

export const Wrapper = styled.div`
    opacity: 0;
    font-size: 2.5rem;
    animation-name: ${animation};
    animation-duration: 21s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`;

export const Wrapper2 = styled.div`
    opacity: 0;
    font-size: 1.5rem;
    animation-name: ${animation};
    animation-duration: 21s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`;


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
                    <Wrapper>DATA. DESIGN. ENGINEER. GROWTH.</Wrapper>
                    <Wrapper2>A passionate data scientist who wants to change the world</Wrapper2>
                    <a href="#explore">
                    Explore
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Features;