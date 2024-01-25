import { Col, Carousel } from "react-bootstrap";
import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.webp";
import carousel3 from "../assets/carousel3.webp";

const Home = () => {
  return (
    <>
      {/* Carousel */}
      <Col md={6}>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className={`d-block w-100`}
              src={carousel1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </>
  );
};

export default Home;
