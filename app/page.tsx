import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      component="main"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <Button variant="contained" color="primary" className="normal-case">
        EdBot AI
      </Button>
    </Box>
  );
}
