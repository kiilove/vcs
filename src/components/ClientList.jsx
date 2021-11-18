import { Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ClientList = () => {
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
          ></Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientList;
