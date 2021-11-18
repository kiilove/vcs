import { Paper, Stack, Typography } from "@mui/material";
import { blueGrey, grey, indigo, yellow } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

import { Link } from "react-router-dom";
const menuItems = [
  { id: 1, title: "고객명부", tootlp: "1번메뉴입니다." },
  { id: 2, title: "할일목록", tootlp: "2번메뉴입니다." },
  { id: 3, title: "업무노트", tootlp: "3번메뉴입니다." },
  { id: 4, title: "아직모름", tootlp: "4번메뉴입니다." },
];
const LeftEdgeMenu = () => {
  return (
    <Stack spacing={1} alignItems="flex-end" width="100%">
      {menuItems.map((item, index) => (
        <>
          {item.id === 1 ? (
            <Box
              sx={{
                backgroundColor: indigo[50],
                width: "70%",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            >
              <Link
                to="/clientlist"
                style={{ textDecoration: "none", color: blueGrey[800] }}
              >
                <Typography
                  variant="body2"
                  sx={{ writingMode: "vertical-rl", textDecoration: "none" }}
                >
                  {item.title}
                </Typography>
              </Link>
            </Box>
          ) : (
            <Box
              sx={{
                backgroundColor: indigo[100],
                width: "70%",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ writingMode: "vertical-rl", textDecoration: "none" }}
              >
                {item.title}
              </Typography>
            </Box>
          )}
        </>
      ))}
    </Stack>
  );
};

export default LeftEdgeMenu;
