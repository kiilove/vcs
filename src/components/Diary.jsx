import React from "react";
import { FlexBox } from "../styles/components";

const Diary = () => {
  return (
    <FlexBox height="800px">
      <FlexBox width="30px" backgroundColor="red"></FlexBox>
      <FlexBox width="400px" backgroundColor="green"></FlexBox>
      <FlexBox width="10px" backgroundColor="red"></FlexBox>
    </FlexBox>
  );
};

export default Diary;
