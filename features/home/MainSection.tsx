// React , Next js packages
import React, { useState, useEffect } from "react";
import Image from "next/image";
// MUI packages
import {
  Box,
  Button,
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
// Custom packages

function MainSection() {
  //** useMediaQuery hooks */
  const isMobile = useMediaQuery("(max-width:600px)");
  //** useState hooks */
  const [email, setEmail] = useState("");
  //** handle submit */
  const handleSubmit = async () => {
    console.log("handle submit");
  };

  return (
    <Box mt={5.5}>
      <Grid container spacing={3} alignItems={`center`}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">
            Master UI/UX Design with complete online Course
          </Typography>
          <Typography variant="body1" mt={2.5} mb={{ xs: 3, sm: 5 }}>
            Learn from an expert with 10+ years of experience.
          </Typography>
          <Box id={`#footerId`}>
            {/* <input
              type="email"
              placeholder="Email Id"
              className="customInput"
            /> */}
            <Button variant="contained" onClick={handleSubmit}>
              Get Started
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          justifyContent={{ xs: "center", sm: `flex-end` }}
        >
          <Box
            position={`relative`}
            display={`flex`}
            justifyContent={{ xs: "center", sm: "unset" }}
            mt={{ xs: 2, sm: 0 }}
          >
            <Image
              // src={`/images/rajat.svg`}
              src={`/images/main-section.png`}
              alt={`main-section-image`}
              width={isMobile ? 300 : 586}
              height={isMobile ? 250 : 503}
            />
            <Box>
              <Avatar
                alt="Sharp"
                src="/images/star-2.svg"
                sx={{
                  position: "absolute",
                  top: 30,
                  left: { xs: 20, sm: 40 },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainSection;
