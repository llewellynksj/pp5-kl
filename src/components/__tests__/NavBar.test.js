import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import { act } from "react-dom/test-utils";

describe("Render NavBar for logged out users", () => {
  const loggedOutUser = () =>
    render(
      <Router>
        <NavBar />
      </Router>
    );

  it("tests for Home link", () => {
    loggedOutUser();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("tests for Login link", () => {
    loggedOutUser();
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
  });

  it("tests for Register link", () => {
    loggedOutUser();
    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();
  });

  it("tests there is no Logout link", () => {
    loggedOutUser();
    expect(
      screen.queryByRole("link", { name: "Logout" })
    ).not.toBeInTheDocument();
  });
});

describe("Render NavBar for logged in users", () => {
  const loggedInUser = () =>
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );

  it("tests for Logout", async () => {
    loggedInUser();
    const link = await screen.findByRole("link", { name: "Logout" });
    expect(link).toBeInTheDocument();
  });

  it("tests there is no Login link", async () => {
    loggedInUser();
    await waitFor(() => {
      const link = screen.queryByRole("link", { name: "Login" });
      expect(link).not.toBeInTheDocument();
    });
  });

  it("tests there is no Register link", async () => {
    loggedInUser();
    await waitFor(() => {
      const link = screen.queryByRole("link", { name: "Register" });
      expect(link).not.toBeInTheDocument();
    });
  });

  it("tests logout via Logout button in NavBar", async () => {
    loggedInUser();

    const link = await screen.findByRole("link", { name: "Logout" });

    await act(async () => {
      link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    const loginLink = await screen.findByRole("link", { name: "Login" });
    const registerLink = await screen.findByRole("link", { name: "Register" });

    expect(loginLink).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });
});
