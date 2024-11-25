import React from "react";
import HeroSection from "./HeroSection";
import { Box } from "@mui/material"; // Import Box from MUI
import IntroSection from "./IntroSection";
import Footer from "./Footer";

const MainHome = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute", // Set position to fixed
          top: 0, // Position at the top of the page
          left: 0, // Align it to the left
          width: "100%", // Set width to 100% (or you can set a custom value)
          zIndex: 1000, // Ensure the Box appears above other content
        }}
      >
        <HeroSection />
        <IntroSection />
        <Footer />
      </Box>
    </>
  );
};

export default MainHome;
