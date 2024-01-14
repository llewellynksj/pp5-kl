import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo_dark.webp";
import {
  TiHome,
  TiUserAdd,
  TiKeyOutline,
  TiPlus,
  TiLockClosed,
} from "react-icons/ti";
import s from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

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
      <NavLink to="/login" className={s.NavLink} activeClassName={s.Active}>
        Login
        <TiKeyOutline size={25} />
      </NavLink>
      <NavLink to="/register" className={s.NavLink} activeClassName={s.Active}>
        Register
        <TiUserAdd size={25} />
      </NavLink>
    </>
  );

  const loggedInNav = (
    <>
      <NavLink to="/" className={s.NavLink} activeClassName={s.Active}>
        Add Post
        <TiPlus size={25} />
      </NavLink>
      <NavLink to="/" className={s.NavLink} onClick={handleLogout}>
        Logout
        <TiLockClosed size={25} />
      </NavLink>
      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={s.NavLink}
      >
        <Avatar
          src={currentUser?.profile_image}
          text={currentUser?.username}
          height={40}
        />
      </NavLink>
    </>
  );

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
            {currentUser ? loggedInNav : loggedOutNav}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
