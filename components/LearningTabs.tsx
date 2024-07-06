"use client";

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Description, QuestionAnswer } from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="flex h-full">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LearningTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>

      <Box className="fixed bottom-0 w-full">
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
            {...a11yProps(0)}
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
            {...a11yProps(1)}
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
