import {
  Button,
  Paper,
  Stack,
  Typography,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  DatePickerWithMui,
  TimePickerWithMui,
} from "../controls/DatePickerWithMui";

import { FlexBox, ItemDiv } from "../styles/components";
const Style = {
  fontSize: { md: 15, lg: 20 },
};
const ClientMeet = () => {
  return (
    <Stack>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Stack spacing={1} sx={{ flexGrow: 1, p: 3, mb: 1 }}>
          <ItemDiv style={{ height: "50px" }}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                ml: 1,
              }}
            >
              <Typography variant="h6">미팅 일정추가</Typography>
            </Box>
          </ItemDiv>
          {/* 아이템별 박스 시작 */}
          <ItemDiv>
            <Box
              sx={{
                flex: 4,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Stack sx={{ flex: 1 }}>
                <FlexBox height="50px" justifyContent="flex-start" ml="10px">
                  <Typography sx={{ ...Style }}>일정</Typography>
                </FlexBox>

                <FlexBox height="50px" justifyContent="flex-start" ml="10px">
                  <Typography>메모</Typography>
                </FlexBox>
              </Stack>
              <Stack sx={{ flex: 3 }}>
                <FlexBox height="50px" justifyContent="flex-start" ml="20px">
                  <DatePickerWithMui />
                  <TimePickerWithMui />
                </FlexBox>

                <FlexBox height="50px" justifyContent="flex-start" ml="20px">
                  <TextField
                    multiline
                    maxRows={2}
                    minRows={1}
                    style={{ width: 290 }}
                    size="small"
                    fullWidth
                  />
                </FlexBox>
              </Stack>
              <Stack sx={{ flex: 1 }}>
                <FlexBox
                  height="100px"
                  justifyContent="flex-start"
                  ml="20px"
                  mr="5px"
                >
                  <Button variant="outlined" sx={{ width: 70, height: 90 }}>
                    추가
                  </Button>
                </FlexBox>
              </Stack>
            </Box>
          </ItemDiv>
          {/* 아이템별 박스 끝*/}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ClientMeet;
