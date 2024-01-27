import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/logo.webp";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import s from "../styles/Footer.module.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (scrollHeight - scrollTop === clientHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`${s.Footer} ${
        showFooter ? s.Show : s.Hide
      } d-flex flex-wrap justify-content-between align-items-center border-top p-3`}
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
