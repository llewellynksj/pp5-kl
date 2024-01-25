import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/logo.webp";
import { BsInstagram, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <Container fluid className="overflow-hidden px-4">
      <footer
        className={`d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top`}
      >
        <Row className="w-100">
          <Col>
            <img src={logo} alt="logo" height="25" />
          </Col>
          <Col className="d-flex justify-content-end">
            <BsInstagram className="mx-2" />
            <BsPinterest className="mx-2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="my-3">&copy; 2023 KSL Design</span>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Footer;
