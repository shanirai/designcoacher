// React , Next js packages
import React from "react";
import Image from "next/image";
// Mui packages
import { Box, Container, Button } from "@mui/material";
import Head from "next/head";

// Custom packages

export default function Layout(props: any) {
  //** props - components */
  const { title, children } = props;
  return (
    <Box bgcolor={`#FFEBD6`} height={`100%`}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth={`lg`}>
        <Box
          py={2}
          display={`flex`}
          flexDirection={`row`}
          justifyContent={`space-between`}
          alignItems={`center`}
        >
          <Image src={`/logo.svg`} width={56} height={56} alt="logo" />
          <Button variant="contained">Book a Demo Class</Button>
        </Box>
      </Container>
      <Container maxWidth={"lg"}>{children}</Container>
    </Box>
  );
}
