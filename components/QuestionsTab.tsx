import { Box, Button, Typography } from "@mui/material";
import TabPanel from "./ui/TabPanel";
import { useState } from "react";
import Lottie from "lottie-react";
import edCorrect from "@/lib/lotties/ed_correct.json";
import edIncorrect from "@/lib/lotties/ed_incorrect.json";

interface QuestionsTabProps {
  id: string;
  value: number;
  question: string;
  options: string[];
  answer: string;
}

export default function QuestionsTab(props: QuestionsTabProps) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerChecked, setAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { value, id, question, options, answer } = props;

  const handleAnswer = (option: string) => {
    setAnswerChecked(true);
    setSelectedAnswer(option);

    if (option === answer) {
      console.log("Correct answer");
      setIsCorrect(true);
    } else {
      console.log("Wrong answer");
      setIsCorrect(false);
    }
  };

  return (
    <TabPanel value={value} index={1}>
      <Box className="mb-24 flex flex-col gap-4 sm:gap-8">
        <Box className="bg-blue-100 px-4 py-4 sm:px-16 sm:py-8">
          <Box
            borderLeft={2}
            className="mx-auto flex min-h-20 max-w-screen-2xl items-center rounded-lg border-l-4 border-blue-400 bg-white p-4 shadow-md"
          >
            <Typography
              variant="body1"
              component="h2"
              className="text-pretty font-bold"
            >
              {question}
            </Typography>
          </Box>
        </Box>

        <Box className="flex items-center justify-center px-4 sm:px-16">
          <Box className="flex w-full max-w-screen-2xl flex-col gap-4">
            {!answerChecked &&
              options.map((option, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  color="primary"
                  className="justify-start rounded-lg py-3 normal-case"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              ))}
            {answerChecked && (
              <Box className="flex flex-col gap-4">
                <Typography
                  variant="body1"
                  className={`rounded-lg px-4 py-3 font-bold text-white ${
                    isCorrect ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {selectedAnswer}
                </Typography>
                <Box className="rounded-lg bg-white p-8 shadow-md">
                  <Box className="mx-auto flex aspect-square max-w-sm flex-col items-center justify-center gap-4">
                    <Box className="flex w-full flex-row items-center justify-center gap-4">
                      <Lottie
                        animationData={isCorrect ? edCorrect : edIncorrect}
                        className="h-32 w-32"
                      />
                      <Typography
                        variant="h5"
                        component="span"
                        className={`font-bold ${
                          isCorrect ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {isCorrect ? "Amazing!" : "Sorry, that's wrong!"}
                      </Typography>
                    </Box>
                    <Button
                      onClick={() => {
                        setIsCorrect(false);
                        setAnswerChecked(false);
                        setSelectedAnswer("");
                      }}
                      className={`w-full rounded-lg px-4 py-2 normal-case text-white ${
                        isCorrect ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      Continue
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </TabPanel>
  );
}
