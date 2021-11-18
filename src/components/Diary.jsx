import { Grid } from "@mui/material";

import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ClientList from "./ClientList";
import DairyClientList from "./DairyClientList";
import DairyLeft from "./DairyLeft";
import DairyRight from "./DairyRight";

const Diary = () => {
  return (
    <Grid container>
      <Grid item center md={12} lg={6} sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<DairyLeft />} />
          <Route path="clientlist" element={<DairyClientList />} />
        </Routes>
      </Grid>
      <Grid item center md={12} lg={6} sx={{ flex: 1 }}>
        <DairyRight />
      </Grid>
    </Grid>
  );
};

export default Diary;
