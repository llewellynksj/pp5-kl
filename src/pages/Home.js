import { Col, Carousel, Container, Row } from "react-bootstrap";
import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.webp";
import carousel3 from "../assets/carousel3.webp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import s from "../App.module.css";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center my-4 pt-4">
          <Col md={6} className="text-center mb-4">
            <h1>Welcome to the InkPad community</h1>
            <p className="my-1 py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className={`${s.Highlight} ${s.Link} py-3`}
            >
              <h2>Login</h2>
            </Link>
            <p className="my-1 py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              to="/register"
              style={{ textDecoration: "none" }}
              className={`${s.Highlight} ${s.Link} py-3`}
            >
              <h2>Register Now</h2>
            </Link>
          </Col>

          {/* Carousel */}
          <Col md={6}>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className={`d-block m-auto`}
                  height="650"
                  src={carousel1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block m-auto"
                  height="650"
                  src={carousel2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block m-auto"
                  height="650"
                  src={carousel3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
