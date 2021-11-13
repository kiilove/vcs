import { Grid } from "@mui/material";
import React from "react";
import Diary from "../components/Diary";
import Header from "../components/Header";
import { lincone } from "../styles/common";
import { BorderWithRadiusMaker, FlexBox } from "../styles/components";
const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Diary />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Home;
