import { render, fireEvent } from "@testing-library/react";
import { Textarea } from "../src/components/textarea";

describe("Textarea component", () => {
  const defaultProps = {
    rows: 3,
    placeholderText: "Textarea Placeholder",
    name: "Textarea Name",
    label: "Textarea label",
    onChange: jest.fn(),
  };

  it("renders with correct value, placeholder and label", () => {
    const { getByLabelText } = render(<Textarea {...defaultProps} />);
    const labelElement = getByLabelText(defaultProps.label) as HTMLLabelElement;
    const inputElement = getByLabelText(defaultProps.label) as HTMLInputElement;

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.placeholder).toBe(defaultProps.placeholderText);
  });

  it("calls onChange handler with correct arguments when input value changes", () => {
    const { getByLabelText } = render(<Textarea {...defaultProps} />);
    const inputElement = getByLabelText(defaultProps.label) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New Textarea value" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith(
      defaultProps.name,
      "New Textarea value",
    );
  });
});
