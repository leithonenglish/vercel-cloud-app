import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const wrapperStyle = style({
  position: `relative`,
  display: `flex`,
  flexDirection: `column`,
});

export const headerWrapperStyle = style({
  position: `sticky`,
  top: `0`,
  background: vars.color.white,
  paddingTop: vars.spacing[4],
  borderBottom: `1px solid ${vars.color.accents[2]}`,
});

export const headerWrapperInnerStyle = style({
  display: `flex`,
  flexDirection: `column`,
  gap: vars.spacing[3],
  maxWidth: vars.screens.lg,
  padding: `0 ${vars.spacing[4]}`,
  margin: `auto`,
  background: vars.color.white,
});

export const headerTitleWrapperStyle = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
});

export const headerTitleStyle = style({
  fontWeight: vars.font.weight.medium,
  fontSize: vars.font.size[6],
});

export const invoicePeriodWrapperStyle = style({
  display: `flex`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  gap: vars.spacing[3],
});

export const invoicePeriodTextStyle = style({
  fontWeight: vars.font.weight.light,
  fontSize: vars.font.size[2],
  color: vars.color.accents[5],
});

export const invoicePeriodButtonStyle = style({
  fontFamily: vars.font.family.sans,
  fontSize: vars.font.size[2],
  color: vars.color.accents[5],
  background: vars.color.white,
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  border: `1px solid ${vars.color.accents[2]}`,
  borderRadius: `5px`,
  outline: `none`,
  transitionProperty: `color, border-color`,
  transitionDuration: vars.durations.veryFast,
  transitionTimingFunction: `ease-in-out`,
  ":hover": {
    cursor: `pointer`,
    color: vars.color.black,
    borderColor: vars.color.black,
  },
});

export const sectionTabHolderStyle = style({
  display: `flex`,
  width: `100%`,
  border: `1px solid ${vars.color.accents[2]}`,
  borderBottom: `none`,
  borderRadius: `5px 5px 0 0`,
  "@media": {
    "screen and (max-width: 875px)": {
      flexFlow: `column`,
    },
  },
});

const sectionTabBaseStyle = style({
  display: `flex`,
  alignItems: `center`,
  gap: vars.spacing[1],
  padding: `14px`,
  fontSize: vars.font.size[2],
  borderRight: `1px solid ${vars.color.accents[2]}`,
  transition: `color ${vars.durations.veryFast} ease-in-out`,
  whiteSpace: `nowrap`,
  selectors: {
    "&:not(:last-child)": {
      "@media": {
        "screen and (max-width: 875px)": {
          borderBottom: `1px solid ${vars.color.accents[2]}`,
        },
      },
    },
  },
  "@media": {
    "screen and (max-width: 875px)": {
      borderRight: `none`,
    },
  },
});

export const sectionTabVariant = styleVariants({
  default: [
    sectionTabBaseStyle,
    {
      color: vars.color.accents[5],
      ":hover": {
        background: vars.color.accents[1],
        cursor: `pointer`,
      },
    },
  ],
  active: [sectionTabBaseStyle, { color: vars.color.black, fontWeight: vars.font.weight.medium }],
});

const sectionTabIconSvgStyleBase = style({
  fill: `currentcolor`,
  transitionProperty: `color, stroke`,
  transitionDuration: vars.durations.veryFast,
  transitionTimingFunction: `ease-in-out`,
});

export const sectionTabIconSvgStyleVariant = styleVariants({
  default: [sectionTabIconSvgStyleBase, { color: `transparent`, stroke: vars.color.accents[5] }],
  active: [sectionTabIconSvgStyleBase, { color: vars.color.success.default, stroke: `transparent` }],
});

const sectionTabIconPathStyleBase = style({
  transition: `stroke ${vars.durations.veryFast} ease-in-out`,
});

export const sectionTabIconPathStyleVariant = styleVariants({
  default: [sectionTabIconPathStyleBase, { stroke: vars.color.accents[5] }],
  active: [sectionTabIconPathStyleBase, { stroke: vars.color.white }],
});

export const sectionHolderStyle = style({
  display: `flex`,
  flexDirection: `column`,
  gap: vars.spacing[7],
  width: `100%`,
  maxWidth: vars.screens.lg,
  margin: `auto`,
  padding: `${vars.spacing[6]} ${vars.spacing[4]}`,
  overflow: `auto`,
});

export const sectionStyle = style({
  display: `flex`,
  flexDirection: `column`,
  width: `100%`,
  gap: vars.spacing[4],
});

export const sectionTitleStyle = style({
  fontWeight: vars.font.weight.semiBold,
  fontSize: vars.font.size[4],
  margin: 0,
});
export const sectionCardListStyle = style({
  display: `flex`,
  flexDirection: `column`,
  gap: vars.spacing[4],
});
