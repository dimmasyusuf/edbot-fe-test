"use client";

import { useState } from "react";
import { Box, Dialog, Tab, Tabs } from "@mui/material";
import { Description, QuestionAnswer } from "@mui/icons-material";
import PassageTab from "./PassageTab";
import QuestionsTab from "./QuestionsTab";
import questions from "@/lib/data/question_data.json";
import { useRouter } from "next/navigation";

export default function LearningTabs() {
  const [value, setValue] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const router = useRouter();

  const { question_id, question_data } = questions[currentQuestion];
  const { question, options, answer, passage, passage_id } = question_data;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  if (isFinished) {
    return (
      <Dialog open={isFinished}>
        <Box className="p-8">
          <Box className="text-center">
            <h1 className="text-3xl font-bold">Congratulations!</h1>
            <p className="text-lg">You have completed the test.</p>
          </Box>
        </Box>
      </Dialog>
    );
  }

  return (
    <Box className="flex flex-col">
      <>
        <PassageTab value={value} passage={passage} />
        <QuestionsTab
          value={value}
          id={passage_id}
          question={question}
          options={options}
          answer={answer}
          onNextQuestion={handleNextQuestion}
        />
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
