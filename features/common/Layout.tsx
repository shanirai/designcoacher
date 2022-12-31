// React , Next js packages
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// Mui packages
import { Box, Container, Button } from "@mui/material";
// Custom packages
import Footer from "./Footer";

export default function Layout(props: any) {
  //** props - components */
  const { title, children } = props;
  return (
    <Box bgcolor={`#FFEBD6`} height={`100%`}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/logo.svg" rel="icon" type="image/png" sizes="16x16" />
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
          <Link href={`#footerId`}>
            <Button variant="contained">Book a Demo Class</Button>
          </Link>
        </Box>
      </Container>
      <Container maxWidth={"lg"}>{children}</Container>
      <Container>
        <Footer />
      </Container>
    </Box>
  );
}
