// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import { FaPlus, FaGithub } from 'react-icons/all';

const Navigate = () => {
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">CB. Portfolio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Skills">Skills</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigate;
