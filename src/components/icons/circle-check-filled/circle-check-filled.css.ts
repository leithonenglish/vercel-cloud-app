import { style } from "@vanilla-extract/css";
import { vars } from "../../../theme.css";

export const svgStyle = style({
  color: vars.color.success.default,
  fill: `currentcolor`,
});

export const pathStyle = style({
  stroke: vars.color.white,
});
