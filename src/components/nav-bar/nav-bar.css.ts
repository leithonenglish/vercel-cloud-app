import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const navItemHorizontalSpaceVar = `14px`;

export const wrapperStyle = style({
  position: `relative`,
  background: vars.color.white,
  borderBottom: `1px solid ${vars.color.accents[2]}`,
});

export const navWrapperStyle = style({
  position: `relative`,
  listStyle: `none`,
  display: `flex`,
  margin: `auto`,
  padding: `0 ${vars.spacing[4]}`,
  maxWidth: `calc(${vars.screens.lg} + (${navItemHorizontalSpaceVar} * 2))`,
});

const baseNavItemStyle = style({
  position: `relative`,
  zIndex: 10,
  padding: `${navItemHorizontalSpaceVar} 0`,
  fontSize: vars.font.size[2],
  fontWeight: 300,
  textDecoration: `none`,
  userSelect: `none`,
  transition: `color 0.2s ease-in-out`,
  cursor: `default`,
});

export const navItemStyleVariant = styleVariants({
  default: [
    baseNavItemStyle,
    {
      color: vars.color.accents[5],
      ":hover": {
        color: vars.color.black,
        cursor: `pointer`,
      },
    },
  ],
  active: [baseNavItemStyle, { color: vars.color.black }],
});

export const navItemTextStyle = style({
  pointerEvents: `none`,
  margin: `0 ${vars.spacing[3]}`,
});

export const slidingBarStyle = style({
  position: `absolute`,
  bottom: `-1px`,
  left: 0,
  height: `2px`,
  background: vars.color.black,
});

export const slidingBlockStyle = style({
  position: `absolute`,
  zIndex: 9,
  bottom: `6px`,
  left: 0,
  height: `32px`,
  borderRadius: `3px`,
  background: vars.color.accents[2],
});
