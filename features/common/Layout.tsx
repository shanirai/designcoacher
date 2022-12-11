// React , Next js packages
import React from "react";
// Mui packages
import { Box, Container } from "@mui/material";
import Head from "next/head";
// Custom packages

export default function Layout(props: any) {
  //** props - components */
  const { title, children } = props;
  return (
    <Box bgcolor={`#FFEBD6`} height={`100vh`}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth={"lg"}>{children}</Container>
    </Box>
  );
}
