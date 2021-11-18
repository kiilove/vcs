import { Grid } from "@mui/material";
import React from "react";
import Diary from "../components/Diary";
import Header from "../components/Header";
import { lincone } from "../styles/common";
import { BorderWithRadiusMaker, FlexBox } from "../styles/components";
import { Routes, Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: lincone.pallette.background }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={0.5} sm={0.2} md={0.5} lg={1.5}></Grid>
        <Grid item xs={11} sm={11.6} md={11} lg={9}>
          <Diary />
        </Grid>
        <Grid item xs={0.5} sm={0.2} md={0.5} lg={1.5}></Grid>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Home;
