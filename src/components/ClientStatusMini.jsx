import React, { useState } from "react";
import {
  pink,
  grey,
  blueGrey,
  lightBlue,
  lightGreen,
  blue,
  red,
} from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroup, Stack } from "@mui/material";
const ClientStatusMini = () => {
  const [value, setValue] = useState("standby");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        mt: 1,
      }}
    >
      <RadioGroup
        row
        aria-label="status"
        name="controlled-status-radio-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="standby"
          control={
            <Radio
              sx={{
                color: lightGreen[400],
                "&.Mui-checked": {
                  color: lightGreen[800],
                },
              }}
            />
          }
          label="확인중"
          sx={{
            height: 30,
            mt: 0.5,
            color: lightGreen[800],
            "& .MuiFormControlLabel-label": {
              fontWeight: 600,
              fontSize: 16,
            },
          }}
        />
        <FormControlLabel
          value="processing"
          control={
            <Radio
              sx={{
                color: blue[400],
                "&.Mui-checked": {
                  color: blue[800],
                },
              }}
            />
          }
          label="진행중"
          sx={{
            height: 30,
            mt: 0.5,
            "& .MuiFormControlLabel-label": {
              fontWeight: 600,
              fontSize: 16,
              color: blue[800],
            },
          }}
        />
        <FormControlLabel
          value="stop"
          control={
            <Radio
              sx={{
                color: red[400],
                "&.Mui-checked": {
                  color: red[800],
                },
              }}
            />
          }
          sx={{
            height: 30,
            mt: 0.5,
            color: red[800],
            "& .MuiFormControlLabel-label": {
              fontWeight: 600,
              fontSize: 16,
            },
          }}
          label="중단됨"
        />
      </RadioGroup>
    </Stack>
  );
};

export default ClientStatusMini;
