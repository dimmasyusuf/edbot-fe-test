"use client";

import { CloseRounded } from "@mui/icons-material";
import { AppBar, IconButton, LinearProgress, Toolbar } from "@mui/material";
import Link from "next/link";
import InfoModal from "./InfoModal";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export default function ProgressAppBar() {
  const progress = useSelector((state: RootState) => state.progress.progress);

  return (
    <AppBar position="static" className="bg-amber-300 shadow-none">
      <Toolbar className="p-0 sm:px-4">
        <IconButton
          component={Link}
          href="/"
          size="large"
          aria-label="Back to Home Page"
        >
          <CloseRounded />
        </IconButton>
        <LinearProgress
          variant="determinate"
          value={progress}
          className="w-full rounded-full bg-white p-2"
        />
        <InfoModal />
      </Toolbar>
    </AppBar>
  );
}
