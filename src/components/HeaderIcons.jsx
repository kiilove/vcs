import React from "react";
import { FlexBox } from "../styles/components";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderIcons = () => {
  return (
    <FlexBox>
      <FlexBox flex="1">
        <FontAwesomeIcon icon={faBell} />
      </FlexBox>
      <FlexBox flex="1">
        <FontAwesomeIcon icon={faCog} />
      </FlexBox>
    </FlexBox>
  );
};

export default HeaderIcons;
