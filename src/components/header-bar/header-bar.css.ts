import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const wrapperStyle = style({
  background: vars.color.white,
});

export const wrapperInnerStyle = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  height: vars.spacing[8],
  padding: `0 ${vars.spacing[4]}`,
  margin: `auto`,
  maxWidth: vars.screens.lg,
});

export const rightWrapperStyle = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  gap: vars.spacing[1],
});

export const rightUserBoxStyle = style({
  display: `flex`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  gap: vars.spacing[1],
});

export const userAvatar = style({
  height: `30px`,
  aspectRatio: vars.aspectRatio.square,
  borderRadius: `100%`,
  background: [`rgb(6, 123, 249)`, `linear-gradient(100deg, rgba(6,123,249,1) 0%, rgba(249,6,123,1) 100%)`],
});

export const teamWrapperStyle = style({
  display: `flex`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  gap: vars.spacing[1],
});

export const usernameStyle = style({
  fontSize: vars.font.size[2],
  fontWeight: vars.font.weight.medium,
  color: vars.color.black,
});

export const teamNameStyle = style({
  fontSize: vars.font.size[1],
  fontWeight: vars.font.weight.medium,
  color: vars.color.white,
  background: vars.color.accents[5],
  padding: `${vars.spacing[0]} ${vars.spacing[1]}`,
  borderRadius: `16px`,
});

export const linkWrapperStyle = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  gap: vars.spacing[3],
});

export const actionButtonStyle = style({
  background: `none`,
  border: `none`,
  userSelect: `none`,
  padding: 0,
});

const baseLinkStyle = style({
  fontFamily: vars.font.family.sans,
  textDecoration: `none`,
  fontSize: vars.font.size[2],
  fontWeight: 300,
  color: vars.color.accents[5],
  transition: `color 0.25s ease-in-out`,
  ":hover": {
    color: vars.color.black,
    cursor: `pointer`,
  },
});

export const linkStyleVariant = styleVariants({
  button: [
    baseLinkStyle,
    {
      background: `none`,
      padding: `6px ${vars.spacing[2]}`,
      borderRadius: `4px`,
      border: `1px solid ${vars.color.accents[2]}`,
      transitionDuration: vars.durations.veryFast,
      transitionProperty: `color, border-color`,
      transitionTimingFunction: `ease-in-out`,
      ":hover": {
        borderColor: vars.color.black,
      },
    },
  ],
  default: [baseLinkStyle],
});
