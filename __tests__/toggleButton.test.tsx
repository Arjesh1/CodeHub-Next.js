import { render, fireEvent } from "@testing-library/react";
import { ToggleButton } from "../src/components/toggleButton";

describe("Toggle Button Component", () => {
  const defaultProps = {
    label: "Test Label",
    name: "Test Name",
    onChange: jest.fn(),
    checked: false,
  };

  it("renders with correct label and unchecked state", () => {
    const { getByText, getByLabelText } = render(
      <ToggleButton {...defaultProps} />,
    );
    const labelElement = getByText(defaultProps.label);
    const inputElement = getByLabelText(defaultProps.label) as HTMLInputElement;

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.checked).toBe(false);
  });

  it("checks if the checked is true when user clicks on it", () => {
    const { getByLabelText } = render(<ToggleButton {...defaultProps} />);
    const inputElement = getByLabelText(defaultProps.label);

    fireEvent.click(inputElement);

    expect(defaultProps.onChange).toHaveBeenCalledWith(defaultProps.name, true);

    fireEvent.click(inputElement);

    expect(defaultProps.onChange).toHaveBeenCalledWith(
      defaultProps.name,
      false,
    );
  });
});
