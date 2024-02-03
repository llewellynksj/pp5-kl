import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Check Footer rendering", () => {
  const footerRender = () =>
    render(
      <Router>
        <Footer />
      </Router>
    );

  it("shows social media links", () => {
    footerRender();
    const socialLinks = screen.getAllByRole("link", {
      name: /Instagram|Pinterest/,
    });
    expect(socialLinks[0]).toHaveAttribute(
      "href",
      "https://www.instagram.com/"
    );
    expect(socialLinks[1]).toHaveAttribute(
      "href",
      "https://www.pinterest.co.uk/"
    );
  });

  it("social media links open in new tab", () => {
    footerRender();
    const socialLinks = screen.getAllByRole("link", {
      name: /Instagram|Pinterest/,
    });
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
