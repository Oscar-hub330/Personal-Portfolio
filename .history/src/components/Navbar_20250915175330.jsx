import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Divider,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Email as EmailIcon,
  Description as DescriptionIcon
} from "@mui/icons-material";

// Hide navbar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { name: "Home", href: "#home", icon: <HomeIcon /> },
    { name: "About", href: "#about", icon: <PersonIcon /> },
    { name: "Projects", href: "#projects", icon: <CodeIcon /> },
    { name: "Skills", href: "#skills", icon: <BuildIcon /> },
    { name: "Contact", href: "#contact", icon: <EmailIcon /> },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] shadow-lg"
          sx={{ 
            background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(15, 23, 42, 0.9)"
          }}
        >
          <Toolbar className="flex justify-between py-3 px-4 md:px-6">
            {/* Logo/Brand */}
            <Typography 
              variant="h6" 
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-xl"
            >
              Oscar Madalane
            </Typography>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  color="inherit"
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 mx-1 font-medium"
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="outlined"
                href="/resume.pdf"
                className="!border-2 !border-purple-500 !text-purple-400 hover:!bg-purple-500 hover:!text-white !rounded-full ml-4 px-6 py-1 font-medium"
                sx={{
                  boxShadow: '0 3px 5px 2px rgba(147, 51, 234, .1)',
                  '&:hover': {
                    boxShadow: '0 5px 15px 2px rgba(147, 51, 234, .3)',
                    backgroundColor: '#8b5cf6'
                  }
                }}
              >
                Download CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="md:hidden text-gray-300"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="le"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(to bottom, #0f172a, #1e293b)",
            color: "white",
            width: 280,
            padding: "16px 0",
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "-4px 0 15px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {/* Drawer Header */}
        <Box className="flex justify-between items-center px-4 py-3 mb-2">
          <Typography 
            variant="h6" 
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Menu
          </Typography>
          <IconButton 
            onClick={toggleDrawer(false)} 
            sx={{ 
              color: "#e2e8f0",
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", mb: 2 }} />

        {/* Navigation Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.name} 
              component="a" 
              href={item.href}
              onClick={toggleDrawer(false)}
              sx={{
                padding: "12px 24px",
                margin: "4px 8px",
                borderRadius: "8px",
                color: "#e2e8f0",
                '&:hover': {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#22d3ee",
                }
              }}
            >
              <Box sx={{ marginRight: 2, color: "inherit" }}>
                {item.icon}
              </Box>
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontWeight: 500,
                  fontSize: "1.1rem"
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box className="px-4 mt-6">
          <Button
            variant="outlined"
            fullWidth
            href="/resume.pdf"
            startIcon={<DescriptionIcon />}
            sx={{
              border: "2px solid #8b5cf6",
              color: "#8b5cf6",
              borderRadius: "9999px",
              padding: "10px 20px",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              '&:hover': {
                backgroundColor: "#8b5cf6",
                color: "white",
                border: "2px solid #8b5cf6",
                boxShadow: "0 5px 15px rgba(139, 92, 246, 0.3)",
              }
            }}
          >
            Download CV
          </Button>
        </Box>
      </Drawer>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <Toolbar />
    </>
  );
}