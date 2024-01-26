import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.webp";
import {
  BsHouseFill,
  BsFillLockFill,
  BsFillUnlockFill,
  BsPersonAdd,
} from "react-icons/bs";
import s from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useState, useEffect } from "react";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  const [isMobile, setIsMobile] = useState(false);

  //Check if the user is on mobile screen size
  useEffect(() => {
    // Check the screen width to determine the size is less than lg to match burger menu toggle
    const isMobileDevice = window.innerWidth <= 992;
    setIsMobile(isMobileDevice);

    // Update the state if the screen width changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener when unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedOutNav = (
    <>
      <Nav className={`me-auto`}>
        <NavLink
          exact
          to="/"
          className={`${s.NavLink} d-flex`}
          activeClassName={s.Active}
        >
          Home
          <div className={`px-2`}>
            <BsHouseFill size={18} />
          </div>
        </NavLink>
      </Nav>
      <Nav className={`ml-auto`}>
        <NavLink
          to="/login"
          className={`${s.NavLink} d-flex`}
          activeClassName={s.Active}
        >
          Login
          <div className={`px-2`}>
            <BsFillUnlockFill size={18} />
          </div>
        </NavLink>
        <NavLink
          to="/register"
          className={`${s.NavLink} d-flex`}
          activeClassName={s.Active}
        >
          Register
          <div className={`px-2`}>
            <BsPersonAdd size={18} />
          </div>
        </NavLink>
      </Nav>
    </>
  );

  const loggedInNav = (
    <>
      <Nav className={`me-auto`}>
        <NavLink
          exact
          to="/feed"
          className={`${s.NavLink} d-flex`}
          activeClassName={s.Active}
        >
          Home
          <div className={`px-2`}>
            <BsHouseFill size={18} />
          </div>
        </NavLink>
      </Nav>
      <Nav className={`ml-auto`}>
        <NavLink
          to="/"
          className={`${s.NavLink} d-flex`}
          onClick={handleLogout}
        >
          Logout
          <div className={`px-2`}>
            <BsFillLockFill size={18} />
          </div>
        </NavLink>
        <NavLink
          to={`/profiles/${currentUser?.profile_id}`}
          className={`${s.NavLink} d-flex`}
          activeClassName={s.Active}
        >
          {isMobile ? (
            <p mobile>{currentUser?.username}'s Account</p>
          ) : (
            <Avatar
              src={currentUser?.profile_image}
              text={currentUser?.username}
              height={32}
            />
          )}
        </NavLink>
      </Nav>
    </>
  );

  return (
    <Navbar expanded={expanded} expand="lg" className="mb-3">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={s.NavToggle}
          ref={ref}
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          {currentUser ? loggedInNav : loggedOutNav}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
