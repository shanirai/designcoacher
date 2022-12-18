// React , Next js packages
import React from "react";
// Mui packages
import { Box } from "@mui/material";
// Custom packages
import Layout from "features/common/Layout";
import MainSection from "features/home/MainSection";
import CTABanner from "features/common/CTABanner";
import CourseDetails from "features/home/CourseDetails";
import CountSection from "features/home/CountSection";
import Testimonial from "features/home/Testimonial";
import FAQ from "features/home/FAQ";

export default function Home() {
  return (
    <Layout title="Home">
      {/* main section  */}
      <MainSection />
      {/* counts section */}
      <CountSection />
      {/* course Details */}
      <CourseDetails />

      {/* CTA banner */}
      <CTABanner />
      {/* testimonial */}
      <Testimonial />
      {/* faq section */}
      <FAQ />
    </Layout>
  );
}
