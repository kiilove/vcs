import { Button, Paper, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

import * as XLSX from "xlsx";
import axios from "axios";
import ClientListGrid from "./ClientListGrid";

const Input = styled("input")({
  display: "none",
});

const ClientList = () => {
  const [items, setItems] = useState([]);

  function renameKey(obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  const readExcel = async (file) => {
    try {
      const fileReader = await new FileReader();
      await fileReader.readAsArrayBuffer(file);
      fileReader.onload = async (e) => {
        const bufferArray = e.target.result;

        const wb = await XLSX.read(bufferArray, { type: "buffer" });
        const wsname = await wb.SheetNames[0];
        const ws = await wb.Sheets[wsname];
        const rawData = await XLSX.utils.sheet_to_json(ws);
        rawData.forEach((obj) => renameKey(obj, "전화번호", "clientNumber"));
        rawData.forEach((obj) =>
          renameKey(obj, "프로젝트", "clientFromProject")
        );

        console.log(JSON.stringify(rawData));
        const header = { "Content-type": "application/json" };
        await axios({
          method: "post",
          url: "http://localhost:7733/api/client/register/excel",
          headers: header,
          data: JSON.stringify(rawData),
        });
      };
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Stack spacing={1} sx={{ height: "100%" }}>
      <Paper elevation={0} sx={{ width: "100%", height: "100%", pb: 2 }}>
        <Box sx={{ pt: 1, pb: 1, pl: 5, pr: 5 }}>
          <Stack>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
              }}
            >
              <Stack direction="row" sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", flex: 1 }}>
                  <TextField size="small" placeholder="고객검색" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{ ml: 1, mr: 1 }}
                  >
                    건별등록
                  </Button>
                  <label htmlFor="containedExcelFile">
                    <Input
                      id="containedExcelFile"
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                      }}
                    />
                    <Button
                      disableElevation
                      variant="contained"
                      component="span"
                    >
                      엑셀등록
                    </Button>
                  </label>
                </Box>
              </Stack>
            </Box>
            <Box sx={{ width: "100%", minHeight: "500px" }}>
              <ClientListGrid />
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};

export default ClientList;
