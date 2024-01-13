import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.webp'
import { TiHome, TiUserAdd, TiKeyOutline } from "react-icons/ti";
import styles from '../styles/NavBar.module.css'


import React from 'react'

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.NavLink} me-auto`}>
            <Nav.Link><TiHome size={25} />Home</Nav.Link>
          </Nav>
          <Nav className={`${styles.NavLink} ml-auto`}>
            <Nav.Link><TiKeyOutline size={25} />Login</Nav.Link>
            <Nav.Link><TiUserAdd size={25} />Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;