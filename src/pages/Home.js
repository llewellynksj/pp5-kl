import { Link } from "react-router-dom/cjs/react-router-dom.min";
import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.webp";
import carousel3 from "../assets/carousel3.webp";
import carousel4 from "../assets/carousel4.webp";
import carousel5 from "../assets/carousel5.webp";
import carousel6 from "../assets/carousel6.webp";

// Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

// Styles
import s from "../App.module.css";

const Home = () => {
  const carouselStyle = {
    objectFit: "cover",
    width: "100%",
  };

  const carouselImages = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
  ];

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center mt-4 pt-4">
          <Col md={6} className="text-center mb-4">
            <h1>Welcome to the InkPad community</h1>
            <p className="my-1 py-3">
              Unveil the artistry etched beneath the skin. Welcome to a vibrant
              community where tattoo enthusiasts, artists, and admirers converge
              to celebrate ink in all its forms. Whether you're a seasoned
              tattoo collector or contemplating your first masterpiece, InkPad
              is your canvas to share, explore, and connect through the language
              of ink.
            </p>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className={`${s.Highlight} ${s.OppositeLink} py-3`}
            >
              <h2>Login</h2>
            </Link>
            <p className="mt-1 pt-3 lead">Discover Inspiration</p>
            <p className="">
              Browse an endless gallery of tattoo designs, each telling a unique
              story. From intricate sleeves to minimalist symbols, find
              inspiration that resonates with your style and soul.
            </p>
            <p className="lead">Connect with Artists</p>
            <p className="mb-1 pb-3">
              Connect with passionate tattoo artists from around the globe.
              Explore their portfolios, discover their techniques, and
              collaborate to bring your vision to life.
            </p>

            <Link
              to="/register"
              style={{ textDecoration: "none" }}
              className={`${s.Highlight} ${s.OppositeLink} py-3`}
            >
              <h2>Register Now</h2>
            </Link>
          </Col>

          {/* Carousel */}
          <Col md={6} className="pb-4">
            <Carousel controls={false} indicators={false}>
              {carouselImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className={`d-block m-auto`}
                    height="650"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={carouselStyle}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
