import menuArrow from "../res/images/common/m_menuArrow.png"

const color = {
  main: "#F4A000",
  black: "#000"
};

const fontColor = {
  main: "#F4A000",
  white: "#fff",
  black: "#000",
};

const bgColor = {
  main: "#F4A000",
  white: "#fff",
  black: "#000",
  lightGray: "#f9f9f9",
  transparent: "transparent"
};

const borderColor = {
    lightGray: "#eee"
}

const lineHeight = {
  lg: 2,
  m: 1.75,
  s: 1.5,
  xs: 1.25,
};

const deviceSize = {
  desktop: "1080px",
  tablet: "768px",
  mobile: "425px",
};

const deviceType = {
  desktop: `@media only screen and (max-width: ${deviceSize.desktop})`,
  tablet: `@media only screen and (max-width: ${deviceSize.tablet})`,
  mobile: `@media only screen and (max-width: ${deviceSize.mobile})`,
};

const defaultStyle = {
  color,
  fontColor,
  bgColor,
  borderColor,
  deviceType,
  lineHeight,
};

const commonTheme = {
  wrapPaddingTop: { desktop: 0, tablet: 0},
  innerWidth: "1080px",
  sideSpace: {desktop: "40px", tablet: "20px"}
};

const headerTheme = {
  headerHeight: { desktop: "100px", tablet: "60px"},
  menuDepth1Height: {desktop: "100px", tablet: "44px"},
  menuDepth2Height: {desktop: "40px", tablet: "44px"},
  menuArrowImg: menuArrow,
};

export const theme = {
    ...defaultStyle,
    commonTheme,
    headerTheme,
}