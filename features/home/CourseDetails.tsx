// React , Next js packages
import React from "react";
import Image from "next/image";
// MUI packages
import { Box, Grid, Paper, Typography } from "@mui/material";
// Custom packages

function CourseDetails() {
  //** list item */
  const listData = [
    {
      label: [
        "Basic Graphic Design",
        "Figma Tools",
        "Meaning of Colors",
        "Typography",
        "Iconography",
        "Design Principles",
      ],
      button_title: "1-4 Weeks",
      bgColor: "#D2B6FF",
    },
    {
      label: [
        "UCD",
        "UX research",
        "Mobile & website Design",
        "Design System",
        "Usability Testing",
        "Practical implementation",
      ],
      button_title: "5-8 Weeks",
      bgColor: "#ACC4FE",
    },
    {
      label: [
        "Accessibility",
        "10 heuristics principles",
        "gestalt principles",
        "UX Framework",
        "Progressive disclosure",
        "Kano Model",
      ],
      button_title: "9-12 Weeks",
      bgColor: "#FFBAAB",
    },
    {
      label: [
        "B2b/B2c work culture",
        "Case Study",
        "Personal Branding",
        "Interview Practice",
        "deal with Clients/CEO",
        "whiteboard Challenges",
      ],
      button_title: "9-12 Weeks",
      bgColor: "#FFEA9F",
    },
  ];
  return (
    <Box mt={17}>
      <Typography variant="h2" mb={5}>
        UI/UX Course Details
      </Typography>
      <Grid container columnSpacing={2}>
        {listData.map((item, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <Box
              position={`relative`}
              bgcolor={`#444444`}
              height={`240px`}
              zIndex={0}
              borderRadius={`10px`}
            >
              <Paper
                sx={{
                  height: `240px`,
                  borderRadius: "10px",
                  border: "3px solid #121212",
                  padding: 3,
                  boxShadow: " 3px 3px 2px 1px #444444 ",
                  bgcolor: `${item.bgColor}`,
                  zIndex: 9,
                }}
              >
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "16px",
                    paddingBottom: "48px",
                    textTransform: "capitalize",
                  }}
                >
                  {item.label.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              </Paper>

              <Box
                position={`absolute`}
                width={`196px`}
                bottom={`-8%`}
                height={`60px`}
                boxShadow={`3px 3px 2px 1px #444444`}
                borderRadius={`10px`}
                zIndex={`-1`}
                ml={3.75}
                mr={3}
              ></Box>
              <Box
                border={`3px solid #444444`}
                height={`55px`}
                bgcolor={`${item.bgColor}`}
                width={`196px`}
                borderRadius={`10px`}
                ml={3.75}
                mr={3}
                position={`absolute`}
                bottom={`-8.5%`}
              >
                <Typography variant={`subtitle1`} py={1.5} textAlign={`center`}>
                  {item.button_title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CourseDetails;
