import { render, fireEvent } from "@testing-library/react";
import { Input } from "../src/components/input";

describe("Input component", () => {
  const defaultProps = {
    label: "Test label",
    name: "Test label",
    placeholderText: "Test label",
    onChange: jest.fn(),
    value: "Test value",
  };

  it("renders with correct label and placeholder", () => {
    const { getByPlaceholderText, getByText } = render(
      <Input {...defaultProps} />,
    );
    const labelElement = getByText(defaultProps.label);
    const placeholderElement = getByPlaceholderText(
      defaultProps.placeholderText,
    );

    expect(labelElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  });

  it("renders the correct value prop passed", () => {
    const { getByDisplayValue } = render(<Input {...defaultProps} />);

    const inputValueElement = getByDisplayValue(defaultProps.value);
    expect(inputValueElement).toBeInTheDocument();
  });
});
