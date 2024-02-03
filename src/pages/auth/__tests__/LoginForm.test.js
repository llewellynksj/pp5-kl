import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "../LoginForm";

// Mock the styles import
jest.mock("../../styles/LoginRegisterForms.module.css", () => ({}));

describe("LoginForm component test", () => {
  const renderComponent = () =>
    render(
      <Router>
        <LoginForm />
      </Router>
    );

  it("renders the component", () => {
    renderComponent();
    expect(true).toEqual(true);
  });
});
