import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoModal from "./InfoModal";

describe("InfoModal", () => {
  it("should open the dialog when the info button is clicked", () => {
    const { getByLabelText, getByRole } = render(<InfoModal />);

    fireEvent.click(getByLabelText("Info"));

    expect(getByRole("dialog")).toBeInTheDocument();
  });

  it("should display the correct title and description in the dialog", () => {
    const { getByLabelText, getByText } = render(<InfoModal />);

    fireEvent.click(getByLabelText("Info"));

    expect(getByText("Info")).toBeInTheDocument();
    expect(getByText("This is a modal dialog box.")).toBeInTheDocument();
  });
});
