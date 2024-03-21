import { screen, render, fireEvent } from "@testing-library/react";
import { SnippetList } from "../src/components/snippetList";

describe("Snippet List component", () => {
  const defaultProps = {
    title: "Code Title",
    id: 123,
  };

  it("renders without crashing", () => {
    render(<SnippetList title="Test Snippet" id={123} />);
  });

  it("renders the list with correct title and button", () => {
    const { getByText } = render(<SnippetList {...defaultProps} />);
    const titleElement = getByText(defaultProps.title);
    const buttonElement = getByText("View");
    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("checks if the correct link is there", () => {
    render(<SnippetList {...defaultProps} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement.getAttribute("href")).toBe("snippet/123");
  });
});
