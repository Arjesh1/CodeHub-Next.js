import { screen, render, fireEvent } from "@testing-library/react";
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
    const { getByLabelText } = render(<SnippetEditForm {...defaultProps} />);
    const ToggleButtonLabelElement = getByLabelText(
      "Private",
    ) as HTMLLabelElement;
    const ToggleButtonInputElement = getByLabelText(
      "Private",
    ) as HTMLInputElement;

    const InputLabelElement = getByLabelText("Title") as HTMLLabelElement;
    const InputButtonInputElement = getByLabelText("Title") as HTMLInputElement;

    const EditorLabelElement = getByLabelText("CodeEditor") as HTMLLabelElement;
    const EditorInputElement = getByLabelText("CodeEditor") as HTMLInputElement;

    expect(ToggleButtonLabelElement).toBeInTheDocument();
    expect(ToggleButtonInputElement).toBeInTheDocument();
    expect(ToggleButtonInputElement.checked).toBe(true);

    expect(InputLabelElement).toBeInTheDocument();
    expect(InputButtonInputElement).toBeInTheDocument();
    expect(InputButtonInputElement.value).toBe(defaultProps.title);

    // expect(EditorLabelElement).toBeInTheDocument();
    // expect(EditorInputElement).toBeInTheDocument();
    // expect(EditorInputElement.value).toBe(defaultProps.code)
  });
});
