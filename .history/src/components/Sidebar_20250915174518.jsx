import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Email as EmailIcon,
  Description as DescriptionIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const menuItems = [
    { name: "Home", href: "#home", icon: <HomeIcon /> },
    { name: "About", href: "#about", icon: <PersonIcon /> },
    { name: "Projects", href: "#projects", icon: <CodeIcon /> },
    { name: "Skills", href: "#skills", icon: <BuildIcon /> },
    { name: "Contact", href: "#contact", icon: <EmailIcon /> },
  ];

  const handleNavClick = (href) => {
    // Close drawer on mobile after clicking
    if (isMobile) {
      setOpen(false);
    }
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hamburger Menu Button - Fixed position */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1300,
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(10px)",
          color: "#e2e8f0",
          "&:hover": {
            backgroundColor: "rgba(15, 23, 42, 0.9)",
          },
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(to bottom, #0f172a, #1e293b)",
            color: "#e2e8f0",
            width: 280,
            padding: "16px 0",
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "4px 0 15px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center px-4 py-2 mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Navigation
          </h2>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#e2e8f0" }}>
            <CloseIcon />
          </IconButton>
        </div>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", mb: 2 }} />

        {/* Navigation Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              selected={activeSection === item.href.substring(1)}
              sx={{
                margin: "8px 16px",
                borderRadius: "12px",
                "&.Mui-selected": {
                  background: "linear-gradient(45deg, #06b6d4 30%, #8b5cf6 90%)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(45deg, #06b6d4 40%, #8b5cf6 100%)",
                  },
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", my: 2 }} />

        {/* Download CV Button */}
        <div className="px-4 mt-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center w-full py-3 px-4 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 text-center font-semibold"
            style={{
              boxShadow: "0 3px 5px 2px rgba(147, 51, 234, 0.1)",
            }}
          >
            <DescriptionIcon sx={{ mr: 1 }} />
            Download CV
          </a>
        </div>
      </Drawer>

      {/* Add padding to the main content to avoid overlap */}
      <style jsx global>{`
        main {
          margin-left: ${isMobile ? "0" : "80px"};
          transition: margin-left 0.3s ease;
        }
        
        @media (min-width: 900px) {
          .MuiDrawer-paper {
            position: fixed !important;
            height: 100% !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </>
  );
}