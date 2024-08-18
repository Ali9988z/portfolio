import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () =>{
    return(
        <>
        <Navbar className="justify-content-end " bg="dark " data-bs-theme="dark   ">
        <Container> 
          <Nav className="me-auto" >
          <Navbar.Brand href="/home" style={{color: '#fff'}}>Home</Navbar.Brand>
            <Nav.Link href="/about" style={{color: '#fff'}}>About</Nav.Link>
            <Nav.Link href="/project" style={{color: '#fff'}}>Projects</Nav.Link>
            <Nav.Link href="/skills" style={{color: '#fff'}}>Skills</Nav.Link>
            <Nav.Link href="/contact" style={{color: '#fff'}}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}
export default Header;