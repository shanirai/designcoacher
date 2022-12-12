// React , Next js packages
import React from "react";
import Image from "next/image";
// MUI packages
import { Box, Button, Grid, Typography } from "@mui/material";
// Custom packages

function CTABanner() {
  return (
    <Box
      bgcolor={`#121212`}
      borderRadius={2.5}
      height={`217px`}
      my={16.5}
      display={`flex`}
      flexDirection={`row`}
      alignItems="center"
      justifyContent={`space-between`}
    >
      <Box
        position={`relative`}
        display={`flex`}
        flexDirection={`row`}
        alignItems={`center`}
        ml={12.5}
      >
        <Image
          src={`/images/writeIcon.svg`}
          alt="icon"
          width={50}
          height={50}
        />
        <Typography variant="body1" color={`grey.100`} ml={6}>
          Yes! I want to become UI/UX Designer
        </Typography>
      </Box>
      <Box mr={5.5}>
        <Button
          variant="contained"
          sx={{ boxShadow: "2px 2px #fff", border: "none" }}
        >
          Book Demo Class
        </Button>
      </Box>
    </Box>
  );
}

export default CTABanner;
