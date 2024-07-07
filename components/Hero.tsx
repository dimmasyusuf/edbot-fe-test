"use client";

import { RootState } from "@/lib/redux/store";
import {
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Hero() {
  const progress = useSelector((state: RootState) => state.progress.progress);

  return (
    <Container
      sx={{ width: "100%" }}
      className="my-auto max-w-xl rounded-xl bg-gradient-to-r from-blue-500 to-blue-800 p-8 shadow-lg sm:p-12"
    >
      <Stack direction="column" spacing={{ xs: 1, sm: 2 }}>
        <Container className="flex aspect-square h-12 w-12 items-center justify-center rounded-md sm:h-24 sm:w-24">
          <Image
            src="/images/ed_smile.webp"
            alt="Ed the Learning Bot"
            width={96}
            height={96}
            className="h-12 w-12 sm:h-24 sm:w-24"
          />
        </Container>

        <Stack direction="column" spacing={4}>
          <Stack direction="column" spacing={1}>
            <Typography
              variant="h5"
              component="h1"
              sx={{ typography: { sm: "h4" } }}
              className="line-clamp-2 font-bold text-white"
            >
              English Basic Reading (A1)
            </Typography>
            <Typography variant="body1" className="line-clamp-1 text-white">
              Chapter 1
            </Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={progress}
            color="success"
            className="rounded-full p-1"
          />

          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/learn/ebr"
            className="rounded-full bg-gradient-to-r from-blue-400 to-yellow-300 font-bold normal-case"
          >
            Start!
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
