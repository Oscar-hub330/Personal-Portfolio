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
  Slide
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] shadow-lg"
          sx={{ background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)" }}
        >
          <Toolbar className="flex justify-between py-3">
            {/* Logo/Brand */}
            <Typography 
              variant="h6" 
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
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
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 mx-1"
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="outlined"
                href="/resume.pdf"
                className="!border-purple-500 !text-purple-400 hover:!bg-purple-500 hover:!text-white !rounded-full ml-4"
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
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)",
            color: "white",
            width: "70%"
          }
        }}
      >
        <div className="p-4 flex justify-end">
          <IconButton onClick={toggleDrawer(false)} className="text-gray-300">
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.name} 
              component="a" 
              href={item.href}
              onClick={toggleDrawer(false)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
          <ListItem className="justify-center mt-4">
            <Button
              variant="outlined"
              href="/resume.pdf"
              className="!border-purple-500 !text-purple-400 hover:!bg-purple-500 hover:!text-white !rounded-full"
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
          </ListItem>
        </List>
      </Drawer>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <Toolbar />
    </>
  );
}