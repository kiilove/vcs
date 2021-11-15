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
        label="날짜"
        value={dateValue}
        onChange={(newValue) => {
          setDateValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} size="small" sx={{ width: "48.5%", ml: 1 }} />
        )}
      />
    </LocalizationProvider>
  );
  const TimePickerMui = (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
      <TimePicker
        label={"24시간"}
        ampm={false}
        value={timeValue}
        onChange={(newValue) => setTimeValue(newValue)}
        renderInput={(params) => (
          <TextField {...params} size="small" sx={{ width: "48.5%", ml: 1 }} />
        )}
      />
    </LocalizationProvider>
  );
  return (
    <Stack spacing={1}>
      <Paper sx={{ width: "100%", height: "100%", pt: 2, pb: 2 }}>
        <Box sx={{ height: "50px" }}>
          <Typography variant="h6" textAlign="left" sx={{ ml: 4 }}>
            일정 추가
          </Typography>
          <Divider sx={{ mb: 1, mt: 1 }} />
        </Box>
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <Stack
            sx={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography sx={{ mr: 1 }}>약속 일정</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography sx={{ mr: 1 }}>일정준비사항</Typography>
            </Box>
          </Stack>
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
                sx={{ width: "100%", ml: 1 }}
                multiline
                maxRows={2}
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
            <Button variant="outlined" sx={{ width: "90%", height: "100%" }}>
              등록
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientMeet;
