import { Box, Button, Stack, Typography } from "@mui/material";
import TabPanel from "./ui/TabPanel";

export default function QuestionsTab({ value }: { value: number }) {
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
              What time does Lisa wake up?
            </Typography>
          </Box>
        </Box>

        <Stack direction="column" spacing={1} className="flex px-4 sm:px-16">
          <Button
            variant="outlined"
            color="primary"
            className="justify-start rounded-lg py-3 normal-case"
          >
            Question 1
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="justify-start rounded-lg py-3 normal-case"
          >
            Question 1
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="justify-start rounded-lg py-3 normal-case"
          >
            Question 1
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="justify-start rounded-lg py-3 normal-case"
          >
            Question 1
          </Button>
        </Stack>
      </Box>
    </TabPanel>
  );
}
