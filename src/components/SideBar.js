import { Container } from "react-bootstrap";
import s from "../App.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = ({ mobile }) => {
  return (
    <Container className={`${mobile && "d-lg-none text-center mb-3"}`}>
      <p className={`${s.Heading} mb-1`}>Quick Links</p>
      <div className="d-flex flex-column">
        <Link to="/add" style={{ textDecoration: "none" }} className="p-2">
          Add Post
        </Link>
        <Link
          to="/treanding"
          style={{ textDecoration: "none" }}
          className="p-2"
        >
          Trending Posts
        </Link>
        <Link
          to="/favourites"
          style={{ textDecoration: "none" }}
          className="p-2"
        >
          Favourite Posts
        </Link>
      </div>
    </Container>
  );
};

export default SideBar;
