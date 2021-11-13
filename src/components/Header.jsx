import React from "react";
import { Grid, Paper } from "@mui/material";
import { FlexBox, Textgraphy } from "../styles/components";
import CalendarMini from "./HeaderCalendar";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <FlexBox height="50px">
      <Grid container>
        <Grid item xs={6} sm={6} md={2}>
          <Textgraphy>VCS</Textgraphy>
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={8}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
          <CalendarMini />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <HeaderIcons />
        </Grid>
      </Grid>
    </FlexBox>
  );
};

export default Header;
