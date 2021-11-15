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
    <Stack spacing={1}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flex: 4,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <TextField
                  size="small"
                  fullWidth
                  sx={{ width: "100%" }}
                  label="한줄메모"
                />
              </Box>
            </Stack>
            <Stack
              sx={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "100%", height: "100%" }}>
                <Button
                  variant="outlined"
                  sx={{ width: "90%", height: "100%" }}
                >
                  등록
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientMemoList;
