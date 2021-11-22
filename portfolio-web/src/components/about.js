import React from "react";
import "../styles/styles.css";
import styled from "styled-components";

export const Header = styled.div`
    font-size: 2.5rem;
    margin: auto;
    width: 50%;
    padding: 10px;
`

export const Text = styled.div `
    margin: auto;
    width: 50%;
    padding: 10px;
`

const About = () => {   
    return (
        <div className="About">
            <Header>About Me</Header>
            <section className="about-section">
                <text>
                    <Text>
                        I am a recent graduate from the University of California, Santa Cruz with a 
                        B.S. in Computer Science. I am currently looking for a full-time position. I am 
                        passionate about data science and the intersection of design and technology. 
                    </Text>
                </text>
            </section>
        </div>
    );
};  

export default About;
