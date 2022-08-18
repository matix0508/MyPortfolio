import { darken } from "polished";
import { colors } from "./colors";

export const transitionTime = "0.3s";
export const shadow = `box-shadow: 0 1px 4px ${darken(0.3, colors.bg)}`;
export const transition = `transition: all ${transitionTime} ease-out`;
export const glow = `box-shadow: 0px 2px 6px ${colors.primary}`;
export const borderRadius = "8px";
export const marginSize = {
  small: "0.5rem",
  regular: "1rem",
  big: "1.5rem",
};

export const paddingSize = {
  small: "0.5rem",
  regular: "1rem",
  big: "1.5rem",
};
