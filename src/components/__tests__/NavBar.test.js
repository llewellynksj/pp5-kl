import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import { act } from "react-dom/test-utils";

describe("Test NavBar rendering for non-logged in user", () => {
  const nonLoggedInUser = () =>
    render(
      <Router>
        <NavBar />
      </Router>
    );

  it("tests for Home link", () => {
    nonLoggedInUser();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("tests for Login link", () => {
    nonLoggedInUser();
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
  });

  it("tests for Register link", () => {
    nonLoggedInUser();
    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();
  });

  it("tests no Logout link", () => {
    nonLoggedInUser();
    expect(
      screen.queryByRole("link", { name: "Logout" })
    ).not.toBeInTheDocument();
  });
});

describe("Test NavBar rendering for logged in user", () => {
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

  it("tests for no Login link", async () => {
    loggedInUser();
    await waitFor(() => {
      const link = screen.queryByRole("link", { name: "Login" });
      expect(link).not.toBeInTheDocument();
    });
  });

  it("tests for no Register link", async () => {
    loggedInUser();
    await waitFor(() => {
      const link = screen.queryByRole("link", { name: "Register" });
      expect(link).not.toBeInTheDocument();
    });
  });

  it("tests signing out via Logout in NavBar", async () => {
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
