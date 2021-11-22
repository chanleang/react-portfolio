// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "../styles/styles.css"
// import { FaPlus, FaGithub } from 'react-icons/all';



const Navigate = () => {
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> CB </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="#About">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigate;
