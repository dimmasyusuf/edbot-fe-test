"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { InfoRounded } from "@mui/icons-material";

export default function InfoModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton size="large" aria-label="Info" onClick={handleOpen}>
        <InfoRounded />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="info-modal-title"
        aria-describedby="info-modal-description"
      >
        <DialogTitle id="info-modal-title">Info</DialogTitle>
        <DialogContent>
          <DialogContentText id="info-modal-description">
            This is a modal dialog box.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
