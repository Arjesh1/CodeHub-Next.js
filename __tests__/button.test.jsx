import { render, fireEvent } from "@testing-library/react";
import { Button } from "../src/components/button";

describe("Button Component", () => {
  const defaultProps = {
    buttonText: "Test Button",
    type: "submit",
    onClick: jest.fn(),
  };

  it("renders button with correct text and type", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const button = getByText(defaultProps.buttonText);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-indigo-600");
  });

  it("calls onClick handler when button is clicked", () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const button = getByText(defaultProps.buttonText);
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("applies correct styling based on type prop", () => {
    const deleteProps = {
      ...defaultProps,
      type: "delete",
    };
    const { getByText } = render(<Button {...deleteProps} />);
    const button = getByText(defaultProps.buttonText);
    expect(button).toHaveClass("bg-red-600");
  });
});
