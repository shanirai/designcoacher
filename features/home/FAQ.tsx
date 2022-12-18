// React , Next js packages
import React from "react";
import Image from "next/image";
// MUI packages
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// custom packages
import faqData from "data/faqData";

function FAQ() {
  return (
    <Box mb={17}>
      <Typography variant="h3" textAlign={`center`} mb={6}>
        FAQ
      </Typography>
      <Grid container columnSpacing={3.5}>
        <Grid item xs={12} sm={6}>
          {faqData.slice(0, 4).map((item, index) => {
            return (
              <Accordion
                sx={{
                  border: "3px solid #121212",
                  bgcolor: "#F9F3EE",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  boxShadow: "2px 2px 1px 1px #121212",
                }}
                key={index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.description}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
        {/* second column */}
        <Grid item xs={12} sm={6}>
          {faqData.slice(4, 8).map((item, index) => {
            return (
              <Accordion
                sx={{
                  border: "3px solid #121212",
                  bgcolor: "#F9F3EE",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  boxShadow: "2px 2px 1px 1px #121212",
                }}
                key={index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.description}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default FAQ;
