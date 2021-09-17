
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';

function Footer() {

    return (
        <Navbar bg="dark" variant="dark">
            <p style={{ color: "white", margin: "0px 0px 8px 16px" }}>
                Author: Jere Manni <br></br>
                Created with <a href="https://github.com/Jefishub/homepage-react" style={{ color: "yellow" }}>React</a>, Deployed with <a href="https://firebase.google.com/" style={{ color: "yellow" }}>Firebase</a>
            </p>
        </Navbar>
    )
}

export default Footer;
