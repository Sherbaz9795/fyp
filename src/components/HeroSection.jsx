import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

// Import your images here
import IMG1 from "../assets/abu.jpg";
import IMG2 from "../assets/mix1.jpg";
import IMG3 from "../assets/daal.jpg";
import IMG4 from "../assets/IMG07.jpg";

const HeroSection = () => {
  // Set the initial image index state to the first image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array to hold all image paths
  const images = [IMG1, IMG2, IMG3, IMG4];

  // Function to change the image every 7 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
    }, 7000); // Change image every 7 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Stack content vertically
        justifyContent: "center", // Vertically center content
        alignItems: "center", // Horizontally center content

        maxWidth: "none",

        margin: "0 auto", // Center the section horizontally
        height: "100vh", // Full viewport height
        position: "relative", // Allows overlay to be positioned correctly
        overflow: "hidden", // Hide the overflow while transitioning images
      }}
    >
      {/* Slide Show Container */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column", // Stack images vertically
          transition: "opacity 1.5s ease-in-out", // Smooth fade transition
        }}
      >
        {/* Images in the slideshow with fade-in effect */}
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover", // Ensure the image covers the entire screen
              backgroundPosition: "center center", // Keep the image centered
              backgroundRepeat: "no-repeat", // Prevent image repetition
              opacity: currentImageIndex === index ? 1 : 0, // Only show the current image
              transition: "opacity 1.5s ease-in-out", // Smooth fade transition
            }}
          />
        ))}
      </Box>

      {/* Hero Section Content */}
      <Box
        sx={{
          zIndex: 1,
          textAlign: "center",
          marginTop: "20vh", // Moves the text and button down
          display: "flex",
          flexDirection: "column", // Keep it vertically stacked for smaller screens
          justifyContent: "center",
          alignItems: "center", // Center horizontally
          width: "100%",
        }}
      >
        {/* Hero Section Title */}
        <Typography
          variant="h4" // Changed to 'h4' for a smaller text size
          color="white"
          sx={{
            zIndex: 1,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "2.8rem" }, // Reduced font sizes for smaller screens
            fontWeight: "bold",
            textTransform: "uppercase", // Uppercase text to make it stand out
            letterSpacing: "2px", // Increase letter spacing for effect
            lineHeight: 1.2, // Line height for better spacing
            fontFamily: "Roboto, sans-serif", // Stylish font
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)", // Apply a subtle shadow for better visibility
          }}
        >
          Fresh Produce & Daily Essentials at Your Fingertips
        </Typography>

        {/* Price List Description Paragraph */}
        <Typography
          variant="body1"
          color="white"
          sx={{
            zIndex: 1,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            fontWeight: "normal",
            padding: "1rem 2rem",
            maxWidth: "800px", // Limit the width for better readability
            marginTop: "1rem", // Add some space above the paragraph
            lineHeight: 1.5, // Better line spacing
            fontFamily: "Roboto, sans-serif", // Use the same font as the title
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)", // Apply a shadow effect for visibility
          }}
        >
          Our price list includes a wide variety of fresh produce and daily
          essentials to meet your needs. Browse through our affordable options
          and enjoy high-quality products delivered to your doorstep. Explore
          the price list now for the latest offers!
        </Typography>

        {/* Call to Action Button */}
        <Button
          component={Link}
          to="/price-list" // Link updated to the price list page
          variant="contained"
          sx={{
            marginTop: "2rem", // Adjust margin with rem
            backgroundColor: "primary.main", // Ensure theme has a primary color
            color: "white",
            padding: { xs: "0.8rem 2rem", sm: "1rem 2.5rem" }, // Smaller padding for a smaller button
            fontSize: { xs: "0.9rem", sm: "1rem" }, // Smaller font size for the button
            textTransform: "none", // Do not uppercase button text
            fontWeight: "bold", // Make the button text bold
            borderRadius: "50px", // Make the button rounded
            display: "flex", // Ensure the button is aligned next to the text if needed
            alignItems: "center",
          }}
        >
          Explore Price List
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
