import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const wrapperStyle = style({
  background: vars.color.white,
  borderTop: `1px solid ${vars.color.accents[2]}`,
  padding: `calc(1.5 * ${vars.spacing[4]}) ${vars.spacing[4]} ${vars.spacing[4]}`,
});
