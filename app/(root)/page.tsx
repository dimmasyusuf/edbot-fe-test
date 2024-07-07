import { Box, Container } from "@mui/material";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Box
      component="main"
      className="flex min-h-dvh items-center justify-center bg-neutral-50 px-2"
    >
      <Hero />
    </Box>
  );
}
