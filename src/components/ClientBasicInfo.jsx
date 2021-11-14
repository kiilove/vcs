import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ClientStatusMini from "./ClientStatusMini";

const ClientBasicInfo = () => {
  return (
    <Stack spacing={1}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ flexGrow: 1, p: "1rem", display: "flex", mt: 1, mb: 1 }}>
          <Stack sx={{ flex: 1, height: "100px" }}>
            <Avatar
              sx={{
                width: "7rem",
                height: "7rem",
                fontSize: "2rem",
              }}
            >
              김진배
            </Avatar>
          </Stack>
          <Stack
            sx={{
              flex: 3,
              height: "100px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h3" sx={{ fontSize: "2rem" }}>
              010-4643-3464
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
              등록일자: 2021.11.01
            </Typography>
            <ClientStatusMini />
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientBasicInfo;
