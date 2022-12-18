// React , Next js packages
import React from "react";
import Image from "next/image";
// MUI packages
import { Box, Button, Grid, Paper, Typography, Stack } from "@mui/material";
// Custom packages

function CountSection() {
  //** count data */
  const countList = [
    {
      number: "250+",
      label: "Total Students",
    },
    {
      number: "200+",
      label: "Placed Students",
    },
    {
      number: "10+",
      label: "Experience",
    },
    {
      number: "3+",
      label: "Brand Partner",
    },
  ];
  return (
    <Box mt={17}>
      <Paper
        sx={{
          border: "3px solid #121212",
          bgcolor: "#FFEBD6",
          borderRadius: "20px",
          px: 9.5,
          py: 8.5,
          boxShadow: "9px 9px 2px 1px #121212",
        }}
      >
        <Grid container columnSpacing={2}>
          {countList.map((item, index) => {
            return (
              <Grid item xs={12} sm={3} key={index}>
                <Stack direction={`column`} alignItems={`center`}>
                  <Typography variant="h1">{item.number}</Typography>
                  <Typography variant="body1">{item.label}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
}

export default CountSection;
