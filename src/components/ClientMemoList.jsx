import {
  Button,
  Paper,
  Stack,
  Typography,
  TextareaAutosize,
  TextField,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FlexBox, ItemDiv } from "../styles/components";
const ClientMemoList = () => {
  return (
    <Stack>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Stack spacing={1} sx={{ flexGrow: 1, p: 3, mb: 1 }}>
          <ItemDiv style={{ height: "50px" }}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                ml: 1,
              }}
            >
              <Typography variant="h6">메모 목록</Typography>
            </Box>
          </ItemDiv>
          {/* 아이템별 박스 시작 */}
          <ItemDiv>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                  sx={{ mb: 1 }}
                />
                <Stack direction="row">
                  <TextField
                    multiline
                    minRows={1}
                    maxRows={2}
                    sx={{ width: 320 }}
                    size="small"
                  />
                  <Button variant="outlined" sx={{ width: 70, ml: 3 }}>
                    작성
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </ItemDiv>
          {/* 아이템별 박스 끝*/}
          {/* 아이템별 박스 시작 */}
          <ItemDiv>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Stack sx={{ flex: 1 }}>여기에 리스트</Stack>
            </Box>
          </ItemDiv>
          {/* 아이템별 박스 끝*/}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ClientMemoList;
