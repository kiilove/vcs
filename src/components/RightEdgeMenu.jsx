import { Paper, Stack, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const menuItems = [
  { id: 1, title: "캘린더", tootlp: "1번메뉴입니다." },
  { id: 2, title: "메모목록", tootlp: "2번메뉴입니다." },
  { id: 3, title: "물건목록", tootlp: "3번메뉴입니다." },
  { id: 4, title: "아직모름", tootlp: "4번메뉴입니다." },
];
const RightEdgeMenu = () => {
  return (
    <Stack spacing={1} alignItems="flex-start" width="100%">
      {menuItems.map((item, index) => (
        <>
          <Box
            sx={{
              backgroundColor: indigo[50],
              width: "70%",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" sx={{ writingMode: "vertical-rl" }}>
              {item.title}
            </Typography>
          </Box>
        </>
      ))}
    </Stack>
  );
};

export default RightEdgeMenu;
