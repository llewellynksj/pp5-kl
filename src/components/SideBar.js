import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DividerLine from "./DividerLine";
import { BsPlusCircleFill, BsChevronDown } from "react-icons/bs";

// Bootstrap
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Styles
import s from "../styles/SideBarHottestProfiles.module.css";
import appS from "../App.module.css";

const SideBar = ({ mobile }) => {
  if (mobile) {
    return (
      <Container className="d-lg-none text-center">
        <Accordion>
          <Card className={s.Accordion}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className={`${s.Heading} p-0 d-flex justify-content-center`}
            >
              Menu
              <div className="mx-2">
                <BsChevronDown />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="p-0">
                <Link
                  to="/add"
                  style={{ textDecoration: "none" }}
                  className={appS.Link}
                >
                  Add Post
                </Link>
                <br />
                <Link
                  to="/trending"
                  style={{ textDecoration: "none" }}
                  className={appS.Link}
                >
                  Trending Posts
                </Link>
                <br />

                <Link
                  to="/favourites"
                  style={{ textDecoration: "none" }}
                  className={appS.Link}
                >
                  Favourite Posts
                </Link>
                <br />

                <Link
                  to="/following"
                  style={{ textDecoration: "none" }}
                  className={appS.Link}
                >
                  Following
                </Link>
                <br />

                <Link
                  to="/followers"
                  style={{ textDecoration: "none" }}
                  className={appS.Link}
                >
                  Followers
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  } else {
    return (
      <Container>
        <p className={`${s.Heading} mb-1`}>Menu</p>
        <div className="d-flex flex-column pl-2">
          <Link
            to="/add"
            style={{ textDecoration: "none" }}
            className={`${appS.Link} p-2 lead d-flex`}
          >
            Add Post
            <div className="mx-2">
              <BsPlusCircleFill size={18} />
            </div>
          </Link>
          <Link
            to="/trending"
            style={{ textDecoration: "none" }}
            className={`${appS.Link} p-2 lead`}
          >
            Trending Posts
          </Link>
          <Link
            to="/favourites"
            style={{ textDecoration: "none" }}
            className={`${appS.Link} p-2 lead`}
          >
            Favourite Posts
          </Link>
          <Link
            to="/following"
            style={{ textDecoration: "none" }}
            className={`${appS.Link} p-2 lead`}
          >
            Following
          </Link>
          <Link
            to="/followers"
            style={{ textDecoration: "none" }}
            className={`${appS.Link} p-2 lead`}
          >
            Followers
          </Link>
        </div>
        <DividerLine />
      </Container>
    );
  }
};

export default SideBar;
