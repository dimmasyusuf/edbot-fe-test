import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function LearnPage() {
  return (
    <Container className="flex min-h-max items-center justify-center">
      <Typography>Learn Page</Typography>
      <Button component={Link} href="/">
        Back
      </Button>
    </Container>
  );
}
