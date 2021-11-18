import React from "react";

import LeftEdgeMenu from "./LeftEdgeMenu";
import ClientBasicInfo from "./ClientBasicInfo";
import ClientExtraInfo from "./ClientExtraInfo";
import ClientMeet from "./ClientMeet";
import ClientMemoList from "./ClientMemoList";

import { Paper, Stack, Typography } from "@mui/material";
import {
  brown,
  grey,
  indigo,
  lightGreen,
  teal,
  yellow,
} from "@mui/material/colors";
import { Box } from "@mui/system";

const DairyClientList = (props) => {
  console.log(props);
  return (
    <>
      <Box
        sx={{
          flex: 1,
          backgroundColor: indigo[200],
          height: "100%",
          pb: 2,
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <Stack sx={{ pt: 3 }}>
          <Stack direction="row">
            <Stack sx={{ flex: 1, backgroundColor: indigo[200] }}>
              <LeftEdgeMenu />
            </Stack>
            <Stack
              sx={{
                flex: 9,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: indigo[50],
              }}
              spacing={2}
            >
              <Box sx={{ width: "90%", pt: 2 }}></Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default DairyClientList;
