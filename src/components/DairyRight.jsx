import React from "react";

import RightEdgeMenu from "./RightEdgeMenu";

import { Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

const DairyRight = () => {
  return (
    <>
      <Box sx={{ flex: 1, backgroundColor: grey[500], height: "90vh" }}>
        <Stack>
          <Typography>물건관련</Typography>
          <Stack direction="row">
            <Stack
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Paper sx={{ height: "200px", width: "90%" }}>
                현재상담중 물건정보
              </Paper>
              <Paper sx={{ height: "200px", width: "90%" }}>
                나의 물건 메모
              </Paper>
              <Paper sx={{ height: "200px", width: "90%" }}>물건 목록</Paper>
            </Stack>
            <Stack>
              <RightEdgeMenu />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default DairyRight;
