import {
  Avatar,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { blue, grey, lightGreen } from "@mui/material/colors";
import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import ClientStatusMini from "./ClientStatusMini";

const ClientAvatar = {
  width: { sx: "50px", md: "80px", lg: "100px" },
  height: { sx: "50px", md: "80px", lg: "100px" },
  color: { sx: blue, md: lightGreen, lg: grey },
};

const useStyle = makeStyles({
  avatar: {
    width: { xs: "50px", lg: "100px" },
  },
});

const ClientBasicInfo = () => {
  const classes = useStyle();
  return (
    <Stack spacing={1}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
          <Stack
            sx={{
              flex: 1,
              backgroundColor: "whitesmoke",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Avatar />
            </Box>
          </Stack>
          <Stack sx={{ flex: 5 }}>
            <Box>
              <Typography>010-4643-3464</Typography>
            </Box>
            <Box>
              <Typography>등록일자:2021.11.03</Typography>
            </Box>
            <Box>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="확인중"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="진행중"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="중지됨"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientBasicInfo;
