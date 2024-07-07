import { useState } from "react";
import TabPanel from "./ui/TabPanel";
import ZoomSlider from "./ZoomSlider";
import { Box, Typography } from "@mui/material";

interface PassageTabProps {
  value: number;
  passage: string;
}

export default function PassageTab(props: PassageTabProps) {
  const { value, passage } = props;

  return (
    <TabPanel value={value} index={0}>
      <Box className="mb-24">
        <Box className="relative bg-blue-100 px-4 py-4 sm:px-16 sm:py-8">
          <Box className="mx-auto max-w-screen-2xl">
            <ZoomSlider />
          </Box>
        </Box>

        <Box className="relative flex h-full flex-col items-center justify-center px-4 sm:px-16">
          <Box className="absolute inset-0 h-1/2 bg-blue-100" />
          <Box
            borderTop={2}
            className="z-10 max-w-screen-2xl rounded-lg border-t-4 border-blue-400 bg-white p-4 shadow-md"
          >
            <Typography variant="body1" component="h2" className="text-pretty">
              {passage}
            </Typography>
          </Box>
        </Box>
      </Box>
    </TabPanel>
  );
}
