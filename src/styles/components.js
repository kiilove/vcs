import { blueGrey, grey } from "@material-ui/core/colors";
import React from "react";
import styled from "styled-components";

// function makeProps(items, type, base) {
//   return `${(items) => (items.type ? items.type : base)}`;
// }

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${(props) => props.pa && props.pa};
  padding-top: ${(props) => props.pt && props.pt};
  padding-bottom: ${(props) => props.pb && props.pb};
  padding-left: ${(props) => props.pl && props.pl};
  padding-right: ${(props) => props.pr && props.pr};
  margin: ${(props) => (props.ma ? props.ma : "0px")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
`;
export const FlexBox = styled.div`
  display: flex;
  flex: ${(props) => props.flex && props.flex};
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.container
      ? "flex-start"
      : props.justifyContent
      ? props.justifyContent
      : "center"};
  align-items: ${(props) =>
    props.container
      ? "flex-start"
      : props.alignItems
      ? props.alignItems
      : "center"};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};

  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) =>
    props.container && !props.height
      ? "99vh"
      : props.height
      ? props.height
      : "100%"};
  padding: ${(props) => props.pa && props.pa};
  padding-top: ${(props) => props.pt && props.pt};
  padding-bottom: ${(props) => props.pb && props.pb};
  padding-left: ${(props) => props.pl && props.pl};
  padding-right: ${(props) => props.pr && props.pr};
  margin: ${(props) => (props.ma ? props.ma : "0px")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
`;

export const Textgraphy = styled.span`
  display: ${(props) => (props.display ? props.display : "block")};
  vertical-align: ${(props) =>
    props.verticalAlign ? props.verticalAlign : "middle"};
  justify-content: ${(props) =>
    props.container
      ? "flex-start"
      : props.justifyContent
      ? props.justifyContent
      : "center"};
  align-items: ${(props) =>
    props.container
      ? "flex-start"
      : props.alignItems
      ? props.alignItems
      : "center"};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height && props.height};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 300)};
  color: ${(props) => (props.color ? props.color : blueGrey[800])};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  padding: ${(props) => props.pa && props.pa};
  padding-top: ${(props) => props.pt && props.pt};
  padding-bottom: ${(props) => props.pb && props.pb};
  padding-left: ${(props) => props.pl && props.pl};
  padding-right: ${(props) => props.pr && props.pr};
  margin: ${(props) => (props.ma ? props.ma : "auto auto")};
  margin-top: ${(props) => props.mt && props.mt};
  margin-bottom: ${(props) => props.mb && props.mb};
  margin-left: ${(props) => props.ml && props.ml};
  margin-right: ${(props) => props.mr && props.mr};
`;

export const BorderOnly = { border: `1px solid ${grey[300]}` };

export function BorderWithRadiusMaker(
  px = "1px",
  line = "solid",
  color = grey[300],
  index = 5
) {
  const BorderWithRadius = [
    { border: `${px} ${line} ${color}`, borderRadius: "0px" },
    { border: `${px} ${line} ${color}`, borderRadius: "1px" },
    { border: `${px} ${line} ${color}`, borderRadius: "2px" },
    { border: `${px} ${line} ${color}`, borderRadius: "3px" },
    { border: `${px} ${line} ${color}`, borderRadius: "4px" },
    { border: `${px} ${line} ${color}`, borderRadius: "5px" },
    { border: `${px} ${line} ${color}`, borderRadius: "6px" },
    { border: `${px} ${line} ${color}`, borderRadius: "7px" },
    { border: `${px} ${line} ${color}`, borderRadius: "8px" },
    { border: `${px} ${line} ${color}`, borderRadius: "9px" },
    { border: `${px} ${line} ${color}`, borderRadius: "10px" },
  ];
  return BorderWithRadius[index];
}
