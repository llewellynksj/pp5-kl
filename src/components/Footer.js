import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/logo.webp";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import s from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${s.Footer} d-flex flex-wrap justify-content-between align-items-center border-top p-3`}
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
  );
};

export default Footer;
