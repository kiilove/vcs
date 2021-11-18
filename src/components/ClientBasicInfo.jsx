import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { blue, blueGrey, green, pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const ClientBasicInfo = () => {
  return (
    <Stack spacing={1}>
      <Paper elevation={0} sx={{ width: "100%", height: "100%", pb: 2 }}>
        <Box sx={{ pt: 1, pb: 1, pl: 5, pr: 5 }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <Stack
              spacing={1}
              sx={{
                flex: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  pt: 1,
                  pb: 1,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography variant="h4">010-4643-3464</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Typography variant="h6">2021.11.03 등록</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "70%",
                    border: `1px solid ${blueGrey[100]}`,
                    borderRadius: 5,
                    p: 1,
                  }}
                >
                  <FormControl component="fieldset">
                    <RadioGroup row name="row-radio-buttons-group">
                      <FormControlLabel
                        value="standby"
                        control={
                          <Radio
                            sx={{
                              color: green[800],
                              "&.Mui-checked": {
                                color: green[600],
                              },
                            }}
                          />
                        }
                        label="확인중"
                        sx={{ color: green[800] }}
                      />
                      <FormControlLabel
                        value="ing"
                        control={
                          <Radio
                            sx={{
                              color: blue[800],
                              "&.Mui-checked": {
                                color: blue[600],
                              },
                            }}
                          />
                        }
                        label="진행중"
                        sx={{ color: blue[800] }}
                      />
                      <FormControlLabel
                        value="stop"
                        control={
                          <Radio
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="중지"
                        sx={{ color: pink[800] }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientBasicInfo;
