import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function MyNavbar(props) {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Navbar.Brand  href='#' onClick={()=>props.change('home')}>Url-Formatter</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={()=>props.change('home')} >Home</Nav.Link>
                <Nav.Link onClick={()=>props.change('about')} >About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default MyNavbar;
