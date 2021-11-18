import React from "react";

import RightEdgeMenu from "./RightEdgeMenu";

import { Paper, Stack, Typography } from "@mui/material";

import { Box } from "@mui/system";
import {
  brown,
  grey,
  indigo,
  lightGreen,
  teal,
  yellow,
} from "@mui/material/colors";

const DairyRight = () => {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          backgroundColor: indigo[200],
          height: "100%",
          pb: 2,
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Stack sx={{ pt: 3 }}>
          <Stack direction="row">
            <Stack
              sx={{
                flex: 9,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: indigo[50],
              }}
              spacing={2}
            >
              <Box sx={{ width: "90%", pt: 3 }}></Box>

              <Box sx={{ width: "90%" }}></Box>
              <Box sx={{ width: "90%" }}></Box>
            </Stack>
            <Stack sx={{ flex: 1, backgroundColor: indigo[200] }}>
              <RightEdgeMenu />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default DairyRight;
