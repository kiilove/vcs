import { Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { FlexBox } from "../styles/components";
import ClientBasicInfo from "./ClientBasicInfo";
import ClientExtraInfo from "./ClientExtraInfo";
import ClientMeet from "./ClientMeet";
import ClientMemoBase from "./ClientMemoBase";
import ClientMemoList from "./ClientMemoList";
import LeftEdgeMenu from "./LeftEdgeMenu";
import RightEdgeMenu from "./RightEdgeMenu";

const Diary = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
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
                <ClientExtraInfo />
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
    </Box>
  );
};

export default Diary;
