import React from "react";
import "../styles/styles.css";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";

export const Header = styled.div`
    font-size: 2.5rem;
    margin: auto;
    text-align: center;
    padding: 10px;
`

export const Text = styled.div `
    padding: 10px;
`

const About = () => {   
    return (
        <div className="About">
            <Header>About Me</Header>
            <section className="about-section">
                <Container 
                    style={{
                        border: '1px solid white',
                        margin: 'auto',
                    }}
                >
                <text>
                    <Text>
                        I am a recent graduate from the University of California, Santa Cruz with a 
                        B.S. in Computer Science. I am currently looking for a full-time position as a data scientist. I am 
                        passionate about data science and the intersection of design and technology. At UCSC, I focused 
                        on the development of data science tools and applications. I finished my project, and now I am looking
                        for a new challenge.
                    </Text>
                </text>
                </Container>
            </section>
        </div>
    );
};  

export default About;
