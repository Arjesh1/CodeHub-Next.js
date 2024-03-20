import { render, fireEvent } from "@testing-library/react";
import { Input } from "../src/components/input";

describe("Input component", () => {
  const defaultProps = {
    label: "Input label",
    name: "InputName",
    placeholderText: "Input Placeholder",
    onChange: jest.fn(),
    value: "",
  };

  it("renders with correct label and placeholder", () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);
    const labelElement = getByLabelText(defaultProps.label) as HTMLLabelElement;
    const inputElement = getByLabelText(defaultProps.label) as HTMLInputElement;

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.placeholder).toBe(defaultProps.placeholderText);
    expect(inputElement.value).toBe(defaultProps.value);
  });

  it("calls onChange handler with correct arguments when input value changes", () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);
    const inputElement = getByLabelText(defaultProps.label) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith(
      defaultProps.name,
      "New Value",
    );
  });
});
