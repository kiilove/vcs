import React from "react";

import LeftEdgeMenu from "./LeftEdgeMenu";
import ClientBasicInfo from "./ClientBasicInfo";
import ClientExtraInfo from "./ClientExtraInfo";
import ClientMeet from "./ClientMeet";
import ClientMemoList from "./ClientMemoList";

import { Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

const DairyLeft = () => {
  return (
    <>
      <Box sx={{ flex: 1, backgroundColor: grey[300], height: "90vh" }}>
        <Stack>
          <Typography>인물관련</Typography>
          <Stack direction="row">
            <Stack>
              <LeftEdgeMenu />
            </Stack>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Box sx={{ width: "90%" }}>
                <ClientBasicInfo />
              </Box>

              <Box sx={{ width: "90%" }}>
                <ClientMeet />
              </Box>
              <Box sx={{ width: "90%" }}>
                <ClientMemoList />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default DairyLeft;
