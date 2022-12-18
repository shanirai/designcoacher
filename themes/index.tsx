import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#FD6262",
    },
    secondary: {
      main: "#FAE56C",
      light: "#FFBAAB",
      dark: "#DFA718",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#DFA718",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D20000",
    },
    text: {
      primary: "#121212",
      secondary: "#FFFFFF",
    },
    grey: {
      100: "#FFFFFF",
      200: "#D2B6FF",
      300: "#ACC4FE",
      400: "#FFBAAB",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: 44,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 36,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 28,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
      color: "#121212",
    },
    h4: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: 1.5,
    },
    button: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "bold",
      letterSpacing: "0em",
      lineHeight: 1.5,
      textTransform: "none",
    },
    caption: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1160,
      xl: 1440,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 70,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 80,
      },
      "@media (min-width:600px)": {
        minHeight: 80,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          fontSize: 16,
          lineHeight: 1.5,
        },
        sizeSmall: {
          height: 30,
        },
        sizeMedium: {
          height: 44,
        },
        sizeLarge: {
          height: 48,
        },
        containedPrimary: {
          background: "#FD6262",
          borderRadius: 8,
          zIndex: 1,
          color: "#FFFFFF",
          border: "2px solid #121212",
          padding: "14px 24px",
          //   filter: "drop-shadow(0px 5px 6px rgba(44, 48, 88, 0.25))",
          //   boxShadow: "0px 5px 6px rgba(44, 48, 88, 0.25)",
          boxShadow: "2px 2px #121212",
          overflow: "hidden",
          "&:hover": {
            color: "#fff",
            boxShadow: "none",
            background: "#FD6262",
          },
          //   "&::before": {
          //     content: '""',
          //     position: "absolute",
          //     left: "-100%",
          //     width: "100%",
          //     height: "100%",
          //     background: "#dfa718",
          //     transition: "all 0.5s",
          //     borderRadius: 25,
          //     zIndex: "-1",
          //   },
          //   "&:hover": {
          //     color: "#fff",
          //     boxShadow: "0px 5px 6px rgba(44, 48, 88, 0.25)",
          //   },
          //   "&:hover::before": {
          //     left: 0,
          //     width: "100%",
          //   },
        },
        outlinedPrimary: {
          background: "transparent",
          // outline: "2px solid #2c3058 !important",
          borderRadius: 25,
          zIndex: 1,
          color: "#FFFFFF",
          boxShadow: "0px 5px 6px rgba(44, 48, 88, 0.25)",
          paddingLeft: 30,
          paddingRight: 30,
          overflow: "hidden",

          "&::before": {
            content: '""',
            position: "absolute",
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "#2c3058",
            transition: "all 0.5s",
            borderRadius: 25,
            zIndex: "-1",
          },
          "&:hover": {
            color: "#fff",
            boxShadow: "0px 5px 6px rgba(44, 48, 88, 0.25)",
          },
          "&:hover::before": {
            left: 0,
            width: "100%",
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
