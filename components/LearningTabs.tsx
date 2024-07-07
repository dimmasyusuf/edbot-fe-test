"use client";

import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Description, QuestionAnswer } from "@mui/icons-material";
import PassageTab from "./PassageTab";
import QuestionsTab from "./QuestionsTab";

export default function LearningTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="flex flex-col">
      <>
        <PassageTab value={value} />
        <QuestionsTab value={value} />
      </>

      <Box className="fixed bottom-0 z-50 w-full overflow-hidden">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="Learning Tabs"
          TabIndicatorProps={{
            className: "top-0 bg-amber-300 h-1",
          }}
          className="bg-slate-800"
        >
          <Tab
            icon={<Description />}
            iconPosition="start"
            label="Passage"
            id="tab-0"
            aria-controls="tab-0"
            className="h-12 normal-case text-white"
            sx={{
              "&.Mui-selected": {
                color: "#fcd34d !important",
              },
            }}
          />
          <Tab
            icon={<QuestionAnswer />}
            iconPosition="start"
            label="Questions"
            id="tab-1"
            aria-controls="tab-1"
            className="h-12 normal-case text-white"
            sx={{
              "&.Mui-selected": {
                color: "#fcd34d !important",
              },
            }}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
