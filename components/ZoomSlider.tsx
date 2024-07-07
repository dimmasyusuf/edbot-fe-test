"use client";
import { TextDecrease, TextIncrease } from "@mui/icons-material";
import { IconButton, Slider, Stack } from "@mui/material";

interface ZoomSliderProps {
  zoomValue: number;
  onZoomChange: (value: number) => void;
}

export default function ZoomSlider({
  zoomValue,
  onZoomChange,
}: ZoomSliderProps) {
  const handleIncrease = () => {
    onZoomChange(Math.min(zoomValue + 1, 4));
  };

  const handleDecrease = () => {
    onZoomChange(Math.max(zoomValue - 1, 1));
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    onZoomChange(newValue as number);
  };

  return (
    <Stack direction="row" spacing={2} className="w-full items-center">
      <IconButton onClick={handleDecrease} data-testid="decrease-button">
        <TextDecrease />
      </IconButton>
      <Slider
        value={zoomValue}
        step={1}
        min={1}
        max={4}
        marks
        onChange={handleSliderChange}
      />
      <IconButton onClick={handleIncrease} data-testid="increase-button">
        <TextIncrease />
      </IconButton>
    </Stack>
  );
}
