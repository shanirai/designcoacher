// React , Next js packages
import React from "react";
import Image from "next/image";
// MUI packages
import { Box, Button, Grid, Typography } from "@mui/material";
// Custom packages

function MainSection() {
  return (
    <Box mt={5.5}>
      <Grid container spacing={3} alignItems={`center`}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">
            Master UI/UX Design with complete online Course
          </Typography>
          <Typography variant="body1" mt={2.5} mb={5}>
            Learn from an expert with 10+ years of experience.
          </Typography>
          <Box>
            <input
              type="email"
              placeholder="Email Id"
              className="customInput"
            />
            <Button variant="contained">Submit</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} justifyContent={`flex-end`}>
          <Box
            bgcolor={`#000000`}
            height={503}
            width={390}
            position={`relative`}
            right={`-140px`}
          >
            <Box position={`absolute`} bottom={0}>
              <Image
                src={`/images/rajat.svg`}
                alt={`main-section-image`}
                width={390}
                height={372}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainSection;
