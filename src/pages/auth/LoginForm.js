import { Form, Container, Alert, Row, Col, Carousel } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import carousel1 from "../../assets/carousel1.webp";
import carousel2 from "../../assets/carousel2.webp";
import carousel3 from "../../assets/carousel3.webp";
import Button from "../../components/Button";

const LoginForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Before axios request");
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", loginData);
      console.log("After axios request, data received:", data);
      setCurrentUser(data.user);
      history.goBack();
    } catch (err) {
      console.log("Error response from server:", err.response?.data);
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Row>
        <Col className="mt-2 py-2">
          <h1>Login</h1>
        </Col>
      </Row>
      {/* Login Form */}
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button type="submit">Submit</Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          <Container>
            <Link to="/register">
              Don't have an account? <span>Register</span>
            </Link>
          </Container>
        </Col>
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
              <img
                className="d-block w-100"
                src={carousel2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carousel3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
