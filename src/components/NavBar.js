import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import Avatar from "./Avatar";
import logo from "../assets/logo.webp";
import {
  BsHouseFill,
  BsFillLockFill,
  BsFillUnlockFill,
  BsPersonAdd,
} from "react-icons/bs";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Styles
import s from "../styles/NavBar.module.css";
import { removeTokenTimestamp } from "../utils/utils";

// Code adapted from Code Institute's 'Moments' Walkthrough

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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const loggedOutNav = (
    <>
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
            className={`${s.NavLink} d-flex pr-2`}
            activeClassName={s.Active}
          >
            Login
            <div className={`px-2`}>
              <BsFillUnlockFill size={15} />
            </div>
          </NavLink>
          <NavLink
            to="/register"
            className={`${s.NavLink} d-flex`}
            activeClassName={s.Active}
          >
            Register
            <div className={`px-2`}>
              <BsPersonAdd size={15} />
            </div>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  const loggedInNav = (
    <>
      <NavLink to="/feed">
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
              <BsFillLockFill size={15} />
            </div>
          </NavLink>
          <NavLink
            to={`/profiles/${currentUser?.profile_id}`}
            className={`${s.NavLink} d-flex`}
            activeClassName={s.Active}
          >
            {isMobile ? (
              <p mobile="true">{currentUser?.username}'s Account</p>
            ) : (
              <Avatar
                src={currentUser?.profile_image}
                text={currentUser?.username}
                height={32}
              />
            )}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  return (
    <Navbar expanded={expanded} expand="lg" className="mb-3">
      <Container>{currentUser ? loggedInNav : loggedOutNav}</Container>
    </Navbar>
  );
};

export default NavBar;
