import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageCropper from "../ImageCropper";

describe("ImageCropper component", () => {
  const renderComponent = () =>
    render(
      <Router>
        <ImageCropper />
      </Router>
    );

  it("renders the component", () => {
    renderComponent();
  });

  it("updates zoom value when slider is changed", () => {
    renderComponent();
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 2 } });
    expect(screen.queryByText("Zoom: 200%")).toBeInTheDocument();
  });
});
