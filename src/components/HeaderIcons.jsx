import React from "react";
import { FlexBox } from "../styles/components";
import { faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";

const HeaderIcons = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box flex="1">
        <FontAwesomeIcon icon={faBell} />
      </Box>
      <Box flex="1">
        <FontAwesomeIcon icon={faCog} />
      </Box>
      <Box flex="1">
        <FontAwesomeIcon icon={faCog} />
      </Box>
    </Box>
  );
};

export default HeaderIcons;
