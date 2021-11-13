import React from "react";
import { FlexBox } from "../styles/components";
import Year from "react-live-clock";
import Month from "react-live-clock";
import Day from "react-live-clock";

const HeaderCalendar = () => {
  return (
    <FlexBox>
      <Year id="Year" format={"YYYY"} ticking={false} timezone={"KR/Pacific"} />
      <Month format={"MM"} ticking={false} timezone={"KR/Pacific"} />
      <Day format={"DD"} ticking={false} timezone={"KR/Pacific"} />
    </FlexBox>
  );
};

export default HeaderCalendar;
