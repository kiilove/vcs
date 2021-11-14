import { Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const menuItems = [
  { id: 1, title: "1번메뉴", tootlp: "1번메뉴입니다." },
  { id: 2, title: "2번메뉴", tootlp: "2번메뉴입니다." },
  { id: 3, title: "3번메뉴", tootlp: "3번메뉴입니다." },
  { id: 4, title: "4번메뉴", tootlp: "4번메뉴입니다." },
];
const RightEdgeMenu = () => {
  return (
    <Stack spacing={1}>
      {menuItems.map((item, index) => (
        <>
          <Paper>{item.title}</Paper>
        </>
      ))}
    </Stack>
  );
};

export default RightEdgeMenu;
