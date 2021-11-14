import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ItemDiv } from "../styles/components";

const ClientExtraInfo = () => {
  return (
    <Stack>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <Stack spacing={1} sx={{ flexGrow: 1, p: 3 }}>
          {/* 잠금버튼 시작 */}
          <ItemDiv style={{ height: "50px" }}>
            <Box
              sx={{
                flex: 5,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                ml: 1,
              }}
            >
              <Typography variant="h6">고객 추가정보</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                mr: 1,
              }}
            >
              <FontAwesomeIcon icon={faLock} style={{ fontSize: 20 }} />
            </Box>
          </ItemDiv>
          {/* 잠금버트 끝 */}
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
              <Typography sx={{ ml: 1 }}>이름</Typography>
            </Box>
            <Box
              sx={{
                flex: 4,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextField size="small" disabled fullWidth />
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
              <Typography sx={{ ml: 1 }}>주소</Typography>
            </Box>
            <Box
              sx={{
                flex: 4,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextField size="small" disabled fullWidth />
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
              <Typography sx={{ ml: 1 }}>이메일</Typography>
            </Box>
            <Box
              sx={{
                flex: 4,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextField size="small" disabled fullWidth />
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
              <Typography sx={{ ml: 1 }}>추가연락처</Typography>
            </Box>
            <Box
              sx={{
                flex: 4,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextField size="small" disabled fullWidth />
            </Box>
          </ItemDiv>
          {/* 아이템별 박스 끝*/}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ClientExtraInfo;
