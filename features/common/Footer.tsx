// React , Next js packages
import React from "react";
import Image from "next/image";
import Link from "next/link";
// MUI packages
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

// Custom packages

function Footer() {
  return (
    <Box mb={10}>
      <Box
        py={2}
        display={`flex`}
        flexDirection={`row`}
        justifyContent={`space-between`}
        alignItems={`center`}
      >
        <Image src={`/logo.svg`} width={56} height={56} alt="logo" />
        <Box>
          <Link href={`https://www.linkedin.com/`} target={`_blank`}>
            <Image
              src={`/images/linkdin.svg`}
              width={30}
              height={20}
              alt="logo"
            />
          </Link>
          <Link href={`https://www.instagram.com/`} target={`_blank`}>
            <Image
              src={`/images/insta.svg`}
              width={30}
              height={20}
              alt="logo"
            />
          </Link>
        </Box>
      </Box>
      {/* form field */}
      <Stack direction={`row`} justifyContent={`space-between`}>
        <input
          type="text"
          placeholder="Full Name"
          className="customInput"
          required
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="customInput"
          required
        />
        <input
          type="email"
          placeholder="Email Id"
          className="customInput"
          required
        />
      </Stack>
      <Stack mt={3} direction={`column`}>
        <textarea
          placeholder="Write here..."
          className="customTextarea"
          rows={10}
        />
      </Stack>
      <Box
        display={`flex`}
        flexDirection={`row`}
        justifyContent={`flex-end`}
        mt={3.75}
      >
        <Button variant="contained" sx={{ pl: 8, pr: 8 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
