import { CloseRounded, InfoRounded } from "@mui/icons-material";
import { AppBar, IconButton, LinearProgress, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import InfoModal from "./InfoModal";

export default function ProgressAppBar() {
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
          value={25}
          className="w-full rounded-full bg-white p-2"
        />
        <InfoModal />
      </Toolbar>
    </AppBar>
  );
}
