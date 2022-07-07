import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
globalStyle("*, *::before, *::after", {
  boxSizing: `border-box`,
});

globalStyle("*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *))", {
  all: `unset`,
  display: `revert`,
});

globalStyle(`ol, ul, menu`, {
  listStyle: `none`,
});

globalStyle(`a, button`, {
  cursor: `revert`,
});

globalStyle("html", {
  height: `100%`,
});

globalStyle("body", {
  padding: 0,
  margin: 0,
  fontFamily: vars.font.family.sans,
  background: vars.color.white,
  height: `100%`,
});

globalStyle("#app", {
  minHeight: `100vh`,
  display: `flex`,
  flexFlow: `column`,
});

export const mainStyle = style({
  width: `100%`,
  height: `auto`,
  minHeight: `100%`,
  background: vars.color.accents[1],
  flex: `1 1 auto`,
});
