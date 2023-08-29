import { DefaultTheme } from "styled-components"

export type paletteTypes =
  | "ligth"
  | "dark"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "general"
  | "danger"
  | "default"

export const theme: DefaultTheme = {
  margin: {
    vertical: "1em",
    horizontal: "2em",
  },
  colors: {
    ligth: "#FFFFFF",
    dark: "#000000",
    primary: "#04131A",
    secondary: "#005C51",
    tertiary: "#04131A",
    success: "#29598B",
    general: "#006A43",
    danger: "#9E2431",
    default: "#343434",
    successAdmin: "#34B841",
  },
  sizes: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
}

export const media = theme.sizes
