import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {

    return (
        <Navbar bg="dark" variant="dark" sticky="top"> 
            <Container style={{marginLeft:"16px"}}>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/work">Work History</Nav.Link>
                    <Nav.Link href="/education">Education</Nav.Link>
                    <Nav.Link href="/skills">Skills</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;