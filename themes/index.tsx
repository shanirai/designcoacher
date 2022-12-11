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
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          marginBottom: 4,
          paddingLeft: 30,
          paddingTop: 16,
          paddingBottom: 16,
          fontWeight: 400,
          height: "48px",
          display: "flex",
          flexDirection: "row",

          "&.Mui-selected": {
            backgroundColor: "#DFA718",
            color: "white",
            borderRight: "5px solid #2c3058",
            paddingTop: 16,
            paddingBottom: 16,
            order: 2,
            height: "48px",
            marginBottom: 4,
            paddingLeft: 30,
            display: "flex",

            "&:hover": {
              backgroundColor: "#DFA718",
              color: "inherit",
            },
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "16px !important",
          "&.Mui-selected": {
            background: "#ECEDF4",
            "&:hover": {
              background: "#ECEDF4",
            },
          },
          "&:hover": {
            background: "#ECEDF4",
          },
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: 44,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          color: "white",
          opacity: 0.9,
        },
      },
      defaultProps: {
        primaryTypographyProps: {
          variant: "subtitle1",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "white",
          color: "#575757",
          "&.Mui-disabled": {
            background: "#F0F0F0",
          },
        },
        input: {
          padding: "16.5px 14px",
        },
        inputSizeSmall: {
          padding: "8.5px 14px",
        },
        notchedOutline: {
          borderColor: "#B5B5B5",
        },
        multiline: {
          padding: 0,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: "14px !important",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 400,
          "&.Mui-selected": {
            fontWeight: 700,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          width: "100%",
          fontSize: 16,
          lineHeight: 1.5,
        },
        indicator: {
          display: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          padding: "12px",
          color: "#2C3058",
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          border: "1px solid rgba(138, 142, 186, 0.3)",
        },
        arrow: {
          fontSize: 14,
          width: 16,
          "&::before": {
            border: "1px solid rgba(138, 142, 186, 0.3)",
            backgroundColor: "#fff",
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: "#dfa718",
                opacity: 1,
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 1,
                },
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
