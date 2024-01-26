import { Container } from "react-bootstrap";
import s from "../App.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DividerLine from "./DividerLine";

const SideBar = ({ mobile }) => {
  return (
    <Container className={`${mobile && "d-lg-none text-center mb-3"}`}>
      <p className={`${s.Heading} mb-1`}>Quick Links</p>
      <div className="d-flex flex-column pl-2">
        <Link to="/add" style={{ textDecoration: "none" }} className="p-2">
          Add Post
        </Link>
        <Link to="/trending" style={{ textDecoration: "none" }} className="p-2">
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
      <div>
        <DividerLine />
      </div>
    </Container>
  );
};

export default SideBar;
