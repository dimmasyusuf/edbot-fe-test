import { TextDecrease, TextIncrease } from "@mui/icons-material";
import { IconButton, Slider, Stack } from "@mui/material";

export default function ZoomSlider() {
  return (
    <Stack direction="row" spacing={2} className="w-full items-center">
      <IconButton>
        <TextDecrease />
      </IconButton>
      <Slider defaultValue={30} />
      <IconButton>
        <TextIncrease />
      </IconButton>
    </Stack>
  );
}
