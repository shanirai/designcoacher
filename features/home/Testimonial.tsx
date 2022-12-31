// React , Next js packages
import React from "react";
import Image from "next/image";
// MUI packages
import { Box, Paper, Typography, Stack, Avatar } from "@mui/material";
// Third party packages
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom packages
import reviewData from "data/reviewData";

function Testimonial() {
  //** slider settings  */
  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box pb={{ xs: 10, sm: 15 }} overflow={`hidden`}>
      <Typography variant="h3" textAlign={`center`} mb={{ xs: 3, sm: 6.5 }}>
        What do my student say?
      </Typography>
      <Box>
        <Slider {...settings}>
          {reviewData.map((item, index) => (
            <Box key={index}>
              <Paper
                sx={{
                  border: "3px solid #121212",
                  bgcolor: "#FFEBD6",
                  borderRadius: "8px",
                  boxShadow: "3px 3px 2px 1px #121212",
                  height: { xs: "350px", sm: "279px" },
                  mr: "16px",
                }}
              >
                <Box px={2} py={3.5} display={`flex`} flexDirection={`row`}>
                  <Stack
                    direction={`column`}
                    width={`200px`}
                    borderRight={`3px solid #121212`}
                    height={{ xs: "350px", sm: `200px` }}
                    position={`relative`}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={item.avatar}
                      sx={{
                        width: { xs: `40px`, sm: "80px" },
                        height: { xs: `40px`, sm: "80px" },
                      }}
                    />
                    <Typography variant="subtitle1" mt={1.5}>
                      {item.name}
                    </Typography>
                    <Typography variant="body1" mt={1}>
                      {item.designation}
                    </Typography>

                    <Avatar
                      alt="Sharp"
                      src="/images/star.svg"
                      sx={{
                        position: "absolute",
                        right: { xs: `10px`, sm: "30px" },
                        top: 10,
                      }}
                    />
                  </Stack>
                  <Stack direction={`column`} width={`320px`}>
                    <Typography
                      variant={"body1"}
                      ml={{ xs: 2, sm: 3.75 }}
                      sx={{ fontSize: { xs: "14px", sm: 16 } }}
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Testimonial;
