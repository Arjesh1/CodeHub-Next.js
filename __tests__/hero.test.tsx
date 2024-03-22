import { screen, render } from "@testing-library/react";
import { Hero } from "../src/components/hero";

describe("Hero component", () => {
  it("renders the component", () => {
    render(<Hero />);
    const linkElement = screen.getAllByRole("link");
    const buttonElement = screen.getAllByRole("button");

    expect(linkElement).toHaveLength(3);
    expect(buttonElement).toHaveLength(3);
  });

  it("checks for add button and link", () => {
    const { getByText, getByRole } = render(<Hero />);
    const linkElement = getByRole("link", { name: "+ Add" });
    const buttonText = getByText("+ Add");

    expect(buttonText).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("snippet/add");
  });

  it("checks for me button and link", () => {
    const { getByText, getByRole } = render(<Hero />);
    const linkElement = getByRole("link", { name: "Me" });
    const buttonText = getByText("Me");

    expect(buttonText).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });

  it("checks for explore button and link", () => {
    const { getByText, getByRole } = render(<Hero />);
    const linkElement = getByRole("link", { name: "Explore" });
    const buttonText = getByText("Explore");

    expect(buttonText).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/explore");
  });
});
