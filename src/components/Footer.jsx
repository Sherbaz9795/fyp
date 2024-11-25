import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e0e0e0", // White background for the footer
        color: "#333", // Dark text color for contrast
        padding: "2rem", // Padding around the footer
        textAlign: "center", // Center text in the footer
        borderTop: "2px solid #ddd", // Subtle gray border on top for professional look
        borderRadius: "12px", // Rounded corners
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Stronger, more pronounced shadow
      }}
    >
      {/* Footer Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start", // Align items to the top for a consistent layout
        }}
      >
        {/* Contact Information (Left Side) */}
        <Box sx={{ flex: 1, textAlign: "left", paddingLeft: "2rem" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600, // Semi-bold font for emphasis
              color: "#333", // Dark text color for readability
              marginBottom: "0.5rem", // Space below the heading
            }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555", // Slightly lighter color for the text
              lineHeight: 1.6, // Better line spacing
            }}
          >
            <strong>Phone:</strong> +92 300 1234567
            <br />
            <strong>Email:</strong>{" "}
            <Link
              href="mailto:support@pricecontrolkpk.com"
              sx={{ color: "#333" }}
            >
              support@pricecontrolkpk.com
            </Link>
          </Typography>
        </Box>

        {/* Website Introduction & Slogan (Center) */}
        <Box
          sx={{
            flex: 2,
            textAlign: "center",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600, // Semi-bold font for emphasis
              color: "#333", // Dark text color for readability
              marginBottom: "0.5rem", // Space below the heading
            }}
          >
            Price Control and Monitoring for KPK
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem", // Slightly larger text for the slogan
              color: "#555", // Slightly lighter color for the slogan
              lineHeight: 1.6, // Better line spacing
              maxWidth: "800px", // Limit width for readability
              margin: "0 auto", // Center-align the text
            }}
          >
            From vegetables to essential groceries, get the latest prices. Stay
            informed and make smarter purchasing decisions with up-to-date
            market data.
          </Typography>
        </Box>

        {/* Social Links Section (Right Side) */}
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            paddingLeft: "2rem",
          }}
        >
          {/* Social Links Heading */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600, // Semi-bold font for emphasis
              color: "#333", // Dark text color for readability
              marginBottom: "1rem", // Space below the heading
            }}
          >
            Social Links
          </Typography>

          {/* Facebook Icon and Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton
              href="https://www.facebook.com" // Replace with your Facebook URL
              target="_blank"
              sx={{
                color: "#3b5998", // Facebook blue color
                fontSize: "2.5rem", // Medium icon size
                "&:hover": {
                  color: "#2d4373", // Hover effect
                  transform: "scale(1.1)", // Scale effect on hover
                  transition: "all 0.3s ease-in-out", // Smooth transition
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <Typography variant="body2" sx={{ color: "#333", fontWeight: 500 }}>
              Facebook
            </Typography>
          </Box>

          {/* Instagram Icon and Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton
              href="https://www.instagram.com" // Replace with your Instagram URL
              target="_blank"
              sx={{
                color: "#E4405F", // Instagram pinkish color
                fontSize: "2.5rem", // Medium icon size
                "&:hover": {
                  color: "#C13584", // Hover effect
                  transform: "scale(1.1)", // Scale effect on hover
                  transition: "all 0.3s ease-in-out", // Smooth transition
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <Typography variant="body2" sx={{ color: "#333", fontWeight: 500 }}>
              Instagram
            </Typography>
          </Box>

          {/* Twitter Icon and Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton
              href="https://www.twitter.com" // Replace with your Twitter URL
              target="_blank"
              sx={{
                color: "#1DA1F2", // Twitter blue color
                fontSize: "2.5rem", // Medium icon size
                "&:hover": {
                  color: "#1991C2", // Hover effect
                  transform: "scale(1.1)", // Scale effect on hover
                  transition: "all 0.3s ease-in-out", // Smooth transition
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <Typography variant="body2" sx={{ color: "#333", fontWeight: 500 }}>
              Twitter
            </Typography>
          </Box>

          {/* WhatsApp Icon and Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton
              href="https://wa.me/+923001234567" // Replace with your WhatsApp link
              target="_blank"
              sx={{
                color: "#25D366", // WhatsApp green color
                fontSize: "2.5rem", // Medium icon size
                "&:hover": {
                  color: "#128C7E", // Hover color
                  transform: "scale(1.1)", // Hover scale effect
                  transition: "all 0.3s ease-in-out", // Smooth transition
                },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
            <Typography variant="body2" sx={{ color: "#333", fontWeight: 500 }}>
              WhatsApp
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{
          color: "#333", // Dark text for the copyright section
          fontWeight: 600, // Semi-bold text
          marginTop: "1rem",
        }}
      >
        © 2024 Price Control KPK. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
