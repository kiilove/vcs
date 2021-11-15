import { Grid } from "@mui/material";

import React from "react";

import DairyLeft from "./DairyLeft";
import DairyRight from "./DairyRight";

const Diary = () => {
  return (
    <Grid container>
      <Grid item center md={12} lg={6}>
        <DairyLeft />
      </Grid>
      <Grid item>
        <DairyRight md={12} lg={6} />
      </Grid>
    </Grid>
  );
};

export default Diary;
