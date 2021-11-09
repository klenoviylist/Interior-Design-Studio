import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import './NavBar.css';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <NavLink className="navbar-brand" to="/">Interior Design Studio</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="p-2">
                        <NavLink className="nav-link m-2" aria-current="page" exact to="/">HOME</NavLink>
                        <NavLink className="nav-link m-2" to="/about">ABOUT</NavLink>
                        <NavLink className="nav-link m-2" to="/contact">CONTACT US</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
};

export default NavBar;
