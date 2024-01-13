import { Form, Button, Container, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = loginData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", loginData);
      history.push("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <>
      <Container>
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

          <Form.Group className="mb-3" controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password1"
              value={password1}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.password1?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group className="mb-3" controlId="password2">
            <Form.Label className="d-none">Repeat Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Repeat Password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.password2?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {errors.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="warning" className="mt-3">{message}</Alert>
          ))}
        </Form>
      </Container>
      <Container>
        <Link to="/login">
          Already have an account? <span>Login</span>
        </Link>
      </Container>
    </>
  );
};

export default RegisterForm;
