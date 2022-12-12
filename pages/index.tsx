// React , Next js packages
import React from "react";
// Mui packages
import { Box } from "@mui/material";
// Custom packages
import Layout from "features/common/Layout";
import MainSection from "features/home/MainSection";
import CTABanner from "features/common/CTABanner";
export default function Home() {
  return (
    <Layout title="Home">
      {/* main section  */}
      <MainSection />
      {/* CTA banner */}
      <CTABanner />
    </Layout>
  );
}
