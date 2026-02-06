import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
return (
<Navbar expand="lg" bg="primary" variant="dark" collapseOnSelect>
    <Container>
    <Navbar.Brand as={Link} to="/">Click Up</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href='#cart'><i className="fa-solid fa-thin fa-diagram-project"></i>Projects</Nav.Link>
        <Nav.Link href='#login'><i className="fas fa-user"></i>User</Nav.Link>  
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
)
}

export default Header