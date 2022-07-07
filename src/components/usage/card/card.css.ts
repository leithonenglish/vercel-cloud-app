import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../../theme.css";

export const wrapperStyle = style({
  background: vars.color.white,
  borderRadius: `5px`,
  boxShadow: vars.shadow.small,
});

export const headerStyle = style({
  display: `flex`,
  flexDirection: `column`,
  padding: vars.spacing[4],
  gap: vars.spacing[0],
});

export const titleStyle = style({
  fontWeight: vars.font.weight.semiBold,
});

export const descriptionStyle = style({
  fontSize: vars.font.size[2],
  fontWeight: vars.font.weight.light,
  color: vars.color.accents[5],
});

const insightsTitleWrapperBase = style({
  borderTop: `1px solid ${vars.color.accents[2]}`,
});

export const insightsWrapperVariant = styleVariants({
  closed: [
    insightsTitleWrapperBase,
    {
      ":hover": {
        background: vars.color.accents[1],
      },
    },
  ],
  opened: [insightsTitleWrapperBase, { background: vars.color.accents[1] }],
});

const insightsTitleArrowStyleBase = style({
  transition: `transform ${vars.durations.veryFast} ease-in-out`,
});

export const insightsTitleArrowStyle = styleVariants({
  default: [insightsTitleArrowStyleBase],
  opened: [insightsTitleArrowStyleBase, { transform: `rotate(90deg)` }],
});

export const insightsTitleWrapperStyle = style({
  display: `flex`,
  alignItems: `center`,
  gap: vars.spacing[1],
  fontSize: vars.font.size[2],
  fontWeight: vars.font.weight.medium,
  userSelect: `none`,
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  ":hover": {
    cursor: `pointer`,
  },
});

export const insightsDrawerStyle = style({
  overflow: `hidden`,
});

export const emptyInsightStyle = style({
  display: `flex`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  gap: vars.spacing[1],
  padding: `${vars.spacing[1]} 0 ${vars.spacing[4]} 0`,
  margin: `0 ${vars.spacing[4]}`,
  fontSize: vars.font.size[2],
  fontWeight: vars.font.weight.light,
});

export const dataWrapperStyle = style({
  display: `flex`,
  flexDirection: `column`,
  padding: vars.spacing[3],
  borderTop: `1px solid ${vars.color.accents[2]}`,
});
