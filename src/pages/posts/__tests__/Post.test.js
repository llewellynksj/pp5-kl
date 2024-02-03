import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../Post";
import { act } from "react-dom/test-utils";

describe("Post component test", () => {
  // Mock data
  const id = 1;
  const created_at = Date.now();
  const updated_at = Date.now();
  const caption = "caption";
  const image = "";

  const renderComponent = () =>
    render(
      <Router>
        <Post
          id={id}
          created_at={created_at}
          updated_at={updated_at}
          caption={caption}
          image={image}
        />
      </Router>
    );

  it("renders the component", async () => {
    renderComponent();
    await act(async () => {
      expect(true).toEqual(true);
    });
  });
});
