import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo_dark.webp";
import { TiHome, TiUserAdd, TiKeyOutline } from "react-icons/ti";
import s from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto`}>
            <NavLink
              exact
              to="/"
              className={s.NavLink}
              activeClassName={s.Active}
            >
              Home
              <TiHome size={25} />
            </NavLink>
          </Nav>
          <Nav className={`ml-auto`}>
            <NavLink
              to="/login"
              className={s.NavLink}
              activeClassName={s.Active}
            >
              Login
              <TiKeyOutline size={25} />
            </NavLink>
            <NavLink
              to="/register"
              className={s.NavLink}
              activeClassName={s.Active}
            >
              Register
              <TiUserAdd size={25} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
