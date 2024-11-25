import React from "react";
import { Box, Typography } from "@mui/material";

const IntroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "2rem", sm: "3rem" }, // Padding for spacing
        backgroundColor: "#f7f7f7", // Light background color for contrast

        maxWidth: "none",
      }}
    >
      {/* Introductory Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          textAlign: "center",
          color: "#333", // Dark color for better readability
          marginBottom: "1rem", // Space between title and description
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Price Control and Monitoring for KPK
      </Typography>

      {/* Brief Description */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          color: "#555", // Slightly lighter color for the description
          maxWidth: "800px", // Limit width for readability (aligns with the HeroSection)
          marginBottom: "2rem", // Space below the description
          lineHeight: 1.6,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Price control and monitoring for KPK – your go-to resource for tracking
        market prices of daily essentials. Stay informed and make smarter
        purchasing decisions by exploring the most accurate, real-time pricing
        data.
      </Typography>
    </Box>
  );
};

export default IntroSection;
