import { render, fireEvent } from "@testing-library/react";
import { Header } from "../src/components/header";

describe("Header Component", () => {
  const defaultLoginProps = {
    userData: {
      uid: 123,
    },
  };

  it("renders without crashing", () => {
    render(<Header />);
  });

  it("displays the correct text for login when user is not logged in", () => {
    const { getByText } = render(<Header />);
    const loginLink = getByText("Login");
    expect(loginLink).toBeInTheDocument();
  });

  it("displays the correct text for profile when user is logged in", () => {
    const { getByText } = render(<Header {...defaultLoginProps} />);
    const profileLink = getByText("Open user menu");
    expect(profileLink).toBeInTheDocument();
  });

  it("calls handleOnLogOut function when logout button is clicked", () => {
    const { getByText } = render(<Header {...defaultLoginProps} />);

    const openMenu = getByText("Open user menu");
    fireEvent.click(openMenu);

    const logoutButton = getByText("Log out");
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);

    const loginLink = getByText("Login");
    expect(loginLink).toBeInTheDocument();
  });
});
