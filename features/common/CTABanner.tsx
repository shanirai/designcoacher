// React , Next js packages
import React from "react";
import Image from "next/image";
// MUI packages
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
// Custom packages

function CTABanner() {
  return (
    <Box
      bgcolor={`#121212`}
      borderRadius={2.5}
      height={{ xs: `auto`, sm: `217px` }}
      my={{ xs: 10, sm: 16.5 }}
      py={{ xs: 5, sm: 0 }}
      display={`flex`}
      flexDirection={{ xs: "column", sm: `row` }}
      alignItems="center"
      justifyContent={`space-between`}
    >
      <Box
        position={`relative`}
        display={`flex`}
        flexDirection={{ xs: "column", sm: `row` }}
        alignItems={`center`}
        ml={{ xs: 0, sm: 12.5 }}
      >
        <Image
          src={`/images/writeIcon.svg`}
          alt="icon"
          width={70}
          height={70}
        />
        <Typography
          variant="body1"
          color={`grey.100`}
          ml={6}
          textAlign={{ xs: "center", sm: "unset" }}
          mt={{ xs: 2, sm: 0 }}
          mb={{ xs: 2, sm: 0 }}
        >
          Yes! I want to become UI/UX Designer
        </Typography>
      </Box>
      <Box mr={{ xs: 0, sm: 5.5 }}>
        <Link href={`#footerId`}>
          <Button
            variant="contained"
            sx={{ boxShadow: "2px 2px #fff", border: "none" }}
          >
            Book Demo Class
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default CTABanner;
