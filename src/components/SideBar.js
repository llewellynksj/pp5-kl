import { Container, Accordion, Card } from "react-bootstrap";
import s from "../styles/SideBar.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DividerLine from "./DividerLine";
import { BsPlusCircleFill } from "react-icons/bs";

const SideBar = ({ mobile }) => {
  if (mobile) {
    return (
      <Container className="d-lg-none text-center mb-3">
        <Accordion defaultActiveKey="0">
          <Card className={s.Accordion}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className={`${s.Heading} p-0`}
            >
              Quick Links
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="p-0">
                <Link to="/add" style={{ textDecoration: "none" }}>
                  Add Post
                </Link>
                <br />
                <Link to="/trending" style={{ textDecoration: "none" }}>
                  Trending Posts
                </Link>
                <br />
                <Link to="/favourites" style={{ textDecoration: "none" }}>
                  Favourite Posts
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <DividerLine />
      </Container>
    );
  } else {
    return (
      <Container>
        <p className={`${s.Heading} mb-1`}>Quick Links</p>
        <div className="d-flex flex-column pl-2">
          <Link
            to="/add"
            style={{ textDecoration: "none" }}
            className="p-2 lead d-flex"
          >
            Add Post
            <div className="mx-2">
              <BsPlusCircleFill size={18} />
            </div>
          </Link>
          <Link
            to="/trending"
            style={{ textDecoration: "none" }}
            className="p-2 lead"
          >
            Trending Posts
          </Link>
          <Link
            to="/favourites"
            style={{ textDecoration: "none" }}
            className="p-2 lead"
          >
            Favourite Posts
          </Link>
        </div>
        <DividerLine />
      </Container>
    );
  }
};

export default SideBar;