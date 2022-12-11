import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2C3058",
    },
    secondary: {
      main: "#8A8EBA",
      light: "#ECEDF4",
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
      primary: "#222222",
      secondary: "#4D4D4D",
    },
    grey: {
      100: "#FFFFFF",
      200: "#F0F0F0",
      300: "#DDDDDD",
      400: "#B5B5B5",
      500: "#575757",
      600: "#141414",
    },
  },
  shape: {
    borderRadius: 10,
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
      fontSize: 32,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 28,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
      color: "#2c3058",
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
          fontSize: 14,
          lineHeight: 1.5,
        },
        sizeSmall: {
          height: 30,
          paddingLeft: 24,
          paddingRight: 24,
        },
        sizeMedium: {
          height: 44,
        },
        sizeLarge: {
          height: 48,
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
    MuiChip: {
      styleOverrides: {
        root: {
          background: "#2c3058",
          color: "#FFFFFF",
          fontSize: 14,
          lineHeight: 1.5,
        },
        sizeSmall: {
          height: 18,
          borderRadius: 50,
        },
        sizeMedium: {
          height: 30,
          borderRadius: 18,
        },
        deleteIcon: {
          color: "inherit",
          marginRight: 8,
        },
        labelSmall: {
          paddingLeft: 6,
          paddingRight: 6,
        },
        labelMedium: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
      defaultProps: {
        // deleteIcon: <CloseIcon fontSize="small" />,
      },
    },
  },
});

export default theme;
