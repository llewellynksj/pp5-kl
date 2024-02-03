import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RegisterForm from "../RegisterForm";

// Mock the styles import
jest.mock("../../styles/LoginRegisterForms.module.css", () => ({}));

describe("RegisterForm component test", () => {
  const renderComponent = () =>
    render(
      <Router>
        <RegisterForm />
      </Router>
    );

  it("renders the component", () => {
    renderComponent();
    expect(true).toEqual(true);
  });
});
