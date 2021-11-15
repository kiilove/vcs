import {
  Button,
  Paper,
  Stack,
  Typography,
  TextareaAutosize,
  TextField,
  Divider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import Reactm, { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import koLocale from "date-fns/locale/ko";
import { DateTimePicker, TimePicker } from "@mui/lab";

import { FlexBox, ItemDiv } from "../styles/components";
const Style = {
  fontSize: { md: 15, lg: 20 },
};
const ClientMeet = () => {
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);

  const DatePickerMui = (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
      <DatePicker
        label="날짜(YYYY.MM.DD)"
        value={dateValue}
        onChange={(newValue) => {
          setDateValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} size="small" sx={{ width: "50%" }} />
        )}
      />
    </LocalizationProvider>
  );
  const TimePickerMui = (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
      <TimePicker
        label="미팅시간(24H)"
        ampm={false}
        value={timeValue}
        onChange={(newValue) => setTimeValue(newValue)}
        renderInput={(params) => (
          <TextField {...params} size="small" sx={{ width: "50%", ml: 2 }} />
        )}
      />
    </LocalizationProvider>
  );
  return (
    <Stack spacing={1}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ height: "50px" }}>
            <Typography variant="h6" textAlign="left" sx={{ fontWeight: 700 }}>
              미팅
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
            <Stack
              spacing={1}
              sx={{
                flex: 4,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {DatePickerMui}
                {TimePickerMui}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <TextField
                  size="small"
                  fullWidth
                  sx={{ width: "100%" }}
                  multiline
                  maxRows={2}
                  label="미팅전 준비사항"
                />
              </Box>
            </Stack>
            <Stack
              sx={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "100%", height: "100%" }}>
                <Button
                  variant="outlined"
                  sx={{ width: "90%", height: "100%" }}
                >
                  등록
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientMeet;
