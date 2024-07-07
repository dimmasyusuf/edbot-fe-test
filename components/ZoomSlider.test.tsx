import { render, fireEvent } from "@testing-library/react";
import ZoomSlider from "./ZoomSlider";

describe("ZoomSlider", () => {
  it("should call onZoomChange with increased value when increase button is clicked", () => {
    const onZoomChange = jest.fn();
    const { getByTestId } = render(
      <ZoomSlider zoomValue={2} onZoomChange={onZoomChange} />,
    );

    fireEvent.click(getByTestId("increase-button"));

    expect(onZoomChange).toHaveBeenCalledWith(3);
  });

  it("should call onZoomChange with decreased value when decrease button is clicked", () => {
    const onZoomChange = jest.fn();
    const { getByTestId } = render(
      <ZoomSlider zoomValue={3} onZoomChange={onZoomChange} />,
    );

    fireEvent.click(getByTestId("decrease-button"));

    expect(onZoomChange).toHaveBeenCalledWith(2);
  });

  it("should call onZoomChange with new value when slider value is changed", () => {
    const onZoomChange = jest.fn();
    const { getByRole } = render(
      <ZoomSlider zoomValue={2} onZoomChange={onZoomChange} />,
    );

    fireEvent.change(getByRole("slider"), { target: { value: 4 } });

    expect(onZoomChange).toHaveBeenCalledWith(4);
  });
});
