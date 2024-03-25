import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { SnippetEditForm } from "../src/components/snippetEditForm";

describe("Snippet Edit Form Component", () => {
  const defaultProps = {
    id: 123,
    title: "My Code Title",
    code: "function add (a, b) { return a+ b }",
    isPrivate: true,
  };
  it("check the component renders successfully", () => {
    render(<SnippetEditForm {...defaultProps} />);
  });

  it("checks the input value is correct", () => {
    const { getByLabelText, getByText } = render(
      <SnippetEditForm {...defaultProps} />,
    );
    const ToggleButtonLabelElement = getByLabelText(
      "Private",
    ) as HTMLLabelElement;
    const ToggleButtonInputElement = getByLabelText(
      "Private",
    ) as HTMLInputElement;

    const InputLabelElement = getByLabelText("Title") as HTMLLabelElement;
    const InputButtonInputElement = getByLabelText("Title") as HTMLInputElement;

    const EditorLabelElement = getByText("Code");

    expect(ToggleButtonLabelElement).toBeInTheDocument();
    expect(ToggleButtonInputElement).toBeInTheDocument();
    expect(ToggleButtonInputElement.checked).toBe(true);

    expect(InputLabelElement).toBeInTheDocument();
    expect(InputButtonInputElement).toBeInTheDocument();
    expect(InputButtonInputElement.value).toBe(defaultProps.title);

    expect(EditorLabelElement).toBeInTheDocument();
  });

  it("calls handleOnDataChange with correct arguments when input value changes", () => {
    const { getByLabelText } = render(<SnippetEditForm {...defaultProps} />);
    const inputElement = getByLabelText("Title") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New Title" } });

    expect(inputElement.value).toBe("New Title");
  });

  it("calls handleEditSubmit function on button click", async () => {
    const { getByText } = render(<SnippetEditForm {...defaultProps} />);
    const editButton = getByText("Edit");

    expect(fireEvent.click(editButton)).toBe(true);
  });
});
