import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
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
  Description as DescriptionIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  BusinessCenter as BusinessIcon
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
  const [activeItem, setActiveItem] = useState("home");

  // Update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "projects", "resume", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavClick = (href, id) => {
    setActiveItem(id);
    setDrawerOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = document.querySelector('.MuiAppBar-root')?.offsetHeight || 70;
      const targetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL
      window.history.pushState(null, null, href);
    }
  };

  const menuItems = [
    { name: "Home", href: "#home", icon: <HomeIcon />, id: "home" },
    { name: "About", href: "#about", icon: <PersonIcon />, id: "about" },
    { name: "Skills", href: "#skills", icon: <BuildIcon />, id: "skills" },
    { name: "Experience", href: "#experience", icon: <BusinessIcon />, id: "experience" },
    { name: "Education", href: "#education", icon: <SchoolIcon />, id: "education" },
    { name: "Projects", href: "#projects", icon: <CodeIcon />, id: "projects" },
    { name: "Resume", href: "#resume", icon: <DescriptionIcon />, id: "resume" },
    { name: "Contact", href: "#contact", icon: <EmailIcon />, id: "contact" },
  ];

  // Gradient style for icons and text
  const gradientStyle = {
    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

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
            {/* Logo/Brand with Icon */}
            <Box 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick("#home", "home")}
            >
              <WorkIcon sx={gradientStyle} className="mr-2" />
              <Typography 
                variant="h6" 
                sx={gradientStyle}
                className="font-bold text-xl"
              >
                Oscar Madalane
              </Typography>
            </Box>

            {/* Desktop Menu with Icons */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  color="inherit"
                  onClick={() => handleNavClick(item.href, item.id)}
                  startIcon={React.cloneElement(item.icon, {
                    sx: activeItem === item.id ? gradientStyle : { color: "#d1d5db" }
                  })}
                  className="font-medium flex items-center transition-all duration-300"
                  sx={{
                    color: activeItem === item.id ? 'transparent' : "#d1d5db",
                    '&:hover': gradientStyle,
                    ...(activeItem === item.id && gradientStyle)
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="outlined"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DescriptionIcon sx={gradientStyle} />}
                className="!rounded-full ml-4 px-6 py-1 font-medium"
                sx={{
                  border: "2px solid #8b5cf6",
                  color: "#8b5cf6",
                  borderRadius: "9999px",
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
            </div>

            {/* Mobile Menu Button */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="md:hidden"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: "#d1d5db",
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  ...gradientStyle
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer with Icons */}
      <Drawer
        anchor="right"
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
          <Box className="flex items-center">
            <HomeIcon sx={gradientStyle} className="mr-2" />
            <Typography 
              variant="h6" 
              sx={gradientStyle}
              className="font-bold"
            >
              Navigation
            </Typography>
          </Box>
          <IconButton 
            onClick={toggleDrawer(false)} 
            sx={{ 
              color: "#e2e8f0",
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                ...gradientStyle
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", mb: 2 }} />

        {/* Navigation Items with Icons */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.name} 
              onClick={() => handleNavClick(item.href, item.id)}
              sx={{
                padding: "12px 24px",
                margin: "4px 8px",
                borderRadius: "8px",
                color: activeItem === item.id ? 'transparent' : "#e2e8f0",
                '&:hover': {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                ...(activeItem === item.id && gradientStyle)
              }}
            >
              <ListItemIcon sx={{ 
                color: "inherit", 
                minWidth: "40px",
                ...(activeItem === item.id && gradientStyle)
              }}>
                {React.cloneElement(item.icon, {
                  sx: activeItem === item.id ? gradientStyle : { color: "inherit" }
                })}
              </ListItemIcon>
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  ...(activeItem === item.id && gradientStyle)
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
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DescriptionIcon sx={gradientStyle} />}
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