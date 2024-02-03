import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AddPostForm from "../AddPostForm";

describe("AddPostForm component", () => {
  const renderComponent = () =>
    render(
      <Router>
        <AddPostForm />
      </Router>
    );

  it("renders the component", () => {
    renderComponent();
  });

  it("updates form fields correctly", () => {
    render(<AddPostForm />);
    fireEvent.change(screen.getByLabelText("Caption"), {
      target: { value: "Test Caption" },
    });
    expect(screen.getByLabelText("Caption")).toHaveValue("Test Caption");
  });

});
