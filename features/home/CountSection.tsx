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
    <Box mt={{ xs: 10, sm: 17 }}>
      <Paper
        sx={{
          border: "3px solid #121212",
          bgcolor: "#FFEBD6",
          borderRadius: "20px",
          px: { xs: 6, sm: 9.5 },
          py: { xs: 5, sm: 8.5 },
          boxShadow: "9px 9px 2px 1px #121212",
        }}
      >
        <Grid container columnSpacing={2}>
          {countList.map((item, index) => {
            return (
              <Grid item xs={12} sm={3} key={index}>
                <Stack
                  direction={`column`}
                  alignItems={`center`}
                  mb={{ xs: 3, sm: 0 }}
                >
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
