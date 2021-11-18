import * as React from "react";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "../demoDatas/Schedule";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

const currentDate = "2018-07-17";

const WorkCaledar = () => {
  return (
    <Box sx={{ maxWidth: "690px", backgroundColor: "white" }}>
      <Scheduler data={appointments} height={731}>
        <ViewState currentDate={currentDate} />
        <MonthView />
        <Appointments />
      </Scheduler>
    </Box>
  );
};

export default WorkCaledar;
