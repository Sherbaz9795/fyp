import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import logo from "../assets/img.png"; // Adjust the path based on your project structure
import MainHome from "./MainHome"; // Import MainHome component

const TabsItem = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [flipLogo, setFlipLogo] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Trigger the logo flip every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipLogo((prevFlip) => !prevFlip); // Toggle the flip state
    }, 4000); // Flip every 4 seconds

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 250, height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}>
        <IconButton onClick={() => toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {[
          "Home",
          "Price List",
          "Market Updates",
          "Feedback/Complaints",
          "Government Guidelines",
        ].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <MainHome />; // Show MainHome content on Home tab click
      case 1:
        return (
          <Box sx={{ padding: 2 }}>
            <h2>Price List</h2>
            <p>Placeholder content for Price List</p>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ padding: 2 }}>
            <h2>Market Updates</h2>
            <p>Placeholder content for Market Updates</p>
          </Box>
        );
      case 3:
        return (
          <Box sx={{ padding: 2 }}>
            <h2>Feedback/Complaints</h2>
            <p>Placeholder content for Feedback/Complaints</p>
          </Box>
        );
      case 4:
        return (
          <Box sx={{ padding: 2 }}>
            <h2>Government Guidelines</h2>
            <p>Placeholder content for Government Guidelines</p>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#F7F4FF", color: "#000" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "97%",
            px: 2,
            position: "relative", // To prevent the search bar from going over the logo
          }}
        >
          {/* Logo on the left */}
          <Box sx={{ flexBasis: "20%" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "60px",
                transition: "transform 1s ease-in-out", // Smooth transition for flip
                transform: flipLogo ? "rotateY(180deg)" : "rotateY(0deg)", // Flip effect
              }}
            />
          </Box>

          {/* Navigation Menu for Large Screens */}
          {!isSmallScreen && !isMediumScreen && (
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Tab label="Home" />
                <Tab label="Price List" />
                <Tab label="Market Updates" />
                <Tab label="Feedback/Complaints" />
                <Tab label="Government Guidelines" />
              </Tabs>
            </Box>
          )}

          {/* Search Bar and Hamburger Menu for Small/Medium Screens */}
          <Box
            sx={{
              flexBasis: "20%",
              display: "flex",
              justifyContent: "flex-end", // Align to right for both
              alignItems: "center",
            }}
          >
            {/* Search Bar on Small/Medium Screens */}
            {(isSmallScreen || isMediumScreen) && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end", // Ensures the search is on the right side
                  width: "100%",
                }}
              >
                <InputBase
                  sx={{
                    backgroundColor: "#f1f1f1",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    width: "200px", // Adjusted width for small screens
                    ml: 2,
                  }}
                  placeholder="Search products"
                  inputProps={{ "aria-label": "search products" }}
                />
                <IconButton sx={{ padding: "10px", color: "#000" }}>
                  <SearchIcon />
                </IconButton>
              </Box>
            )}

            {/* Hamburger Menu (only for small/medium screens) */}
            {(isSmallScreen || isMediumScreen) && (
              <IconButton
                onClick={() => toggleDrawer(true)}
                sx={{ padding: "10px", color: "#000", ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Search Bar on Large Screens */}
            {!isSmallScreen && !isMediumScreen && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InputBase
                  sx={{
                    backgroundColor: "#f1f1f1",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    width: "20rem",
                    ml: 2,
                  }}
                  placeholder="Search products"
                  inputProps={{ "aria-label": "search products" }}
                />
                <IconButton sx={{ padding: "10px", color: "#000" }}>
                  <SearchIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Navigation on Small/Medium Screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>

      {/* Render the active tab content */}
      <Box sx={{ padding: 2 }}>{renderTabContent()}</Box>
    </>
  );
};

export default TabsItem;
