import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import koLocale from "date-fns/locale/ko";
import { DateTimePicker, TimePicker } from "@mui/lab";

export const DatePickerWithMui = () => {
  const [dateValue, setDateValue] = useState(null);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
        <DatePicker
          label="날짜"
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} size="small" sx={{ width: 140 }} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};
export const TimePickerWithMui = () => {
  const [timeValue, setTimeValue] = useState(null);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
        <TimePicker
          label={"24시간"}
          ampm={false}
          value={timeValue}
          onChange={(newValue) => setTimeValue(newValue)}
          renderInput={(params) => (
            <TextField {...params} size="small" sx={{ width: 140, ml: 1.3 }} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export const DateTimePickerWithMui = () => {
  const [value, setValue] = useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} size="small" />}
        label="Ignore date and time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        minDateTime={new Date()}
      />
      <DateTimePicker
        renderInput={(params) => <TextField {...params} size="small" />}
        label="Ignore time in each day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        minDate={new Date("2020-02-14")}
        minTime={new Date(0, 0, 0, 8)}
        maxTime={new Date(0, 0, 0, 18, 45)}
      />
    </LocalizationProvider>
  );
};
