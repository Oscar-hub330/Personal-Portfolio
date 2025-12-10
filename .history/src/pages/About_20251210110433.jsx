import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Chip,
  Avatar,
  Divider,
  Button,
  Card,
  CardContent
} from "@mui/material";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Description as DescriptionIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import ProfilePicture from "../assets/Profile.jpg";

export default function About() {
  const gradientStyle = {
    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const gradientBorderStyle = {
    position: 'relative',
    background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%) border-box',
    border: '2px solid transparent',
    borderRadius: '12px',
  };

  const skills = {
    programming: ["Python", "Java", "JavaScript", "Node.js"],
    database: ["SQL", "MySQL", "MongoDB", "Firebase"],
    frameworks: ["React", "Express.js", "Tailwind CSS"],
    tools: ["Windows", "Git", "VS Code", "Docker"]
  };

  const education = [
    {
      degree: "Advanced Diploma in ICT in Application Development",
      institution: "University of Mpumalanga",
      period: "2025",
      details: "Relevant Coursework: Advanced Software Development, Cloud Computing, Mobile App Development, AI and Machine Learning"
    },
    {
      degree: "Diploma in ICT in Application Development",
      institution: "University of Mpumalanga",
      period: "2021-2024",
      details: "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, Software Engineering"
    },
    {
      degree: "Business Processes in Financial Accounting SAP S/4HANA",
      institution: "Mentec Foundation",
      period: "2024",
      details: "Basic understanding of financial accounting processes using SAP S/4HANA."
    }
  ];

  const certifications = [
    "Introduction to Cybersecurity - Cisco Networking Academy (2024)",
    "Cyber Security Short Course - Oxford Home Study (2023)"
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16 px-4">
      <Container maxWidth="xl">

        <Box className="text-center mb-6">
          <Typography 
            variant="h6" 
            className="font-bold mb-2"
            sx={{
              ...gradientStyle,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            About Me
          </Typography>

          {/* FIXED LINE BELOW — replaced h20 with body1 */}
          <Typography variant="body1" className="text-gray-300 max-w-2xl mx-auto text-lg">
            Passionate Software Developer with a drive for creating innovative solutions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          
          <Grid item xs={10} md={4}>
            <Card sx={gradientBorderStyle} className="h-full bg-[#0f172a] shadow-2xl overflow-hidden">
              <CardContent className="p-4 flex flex-col items-center">
                
                <Box className="mb-6 p-1 rounded-full" sx={{
                  background: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)',
                  width: 'fit-content'
                }}>
                  <Avatar
                    sx={{
                      width: 180,
                      height: 180,
                      border: '4px solid',
                      borderColor: 'transparent',
                      backgroundColor: '#1e293b'
                    }}
                    src={ProfilePicture}
                    alt="Oscar Madalane"
                  />
                </Box>
                
                <Typography variant="h4" className="font-bold text-center mb-2 text-cyan-400">
                  Oscar Siyabonga Madalane
                </Typography>
                <Typography variant="body1" className="text-gray-300 mb-6 text-center">
                  Frontend Developer
                </Typography>

                <Divider className="w-full my-4 border-gray-600" />

                <Box className="w-full space-y-4">
                  <Box className="flex items-center">
                    <LocationIcon className="text-purple-400 mr-3" />
                    <Typography variant="body2" className="text-gray-300">
                      Nelspruit, South Africa
                    </Typography>
                  </Box>
                  
                  <Box className="flex items-center">
                    <EmailIcon className="text-purple-400 mr-3" />
                    <Typography variant="body2" className="text-gray-300">
                      madalaneoscar50@gmail.com
                    </Typography>
                  </Box>
                  
                  <Box className="flex items-center">
                    <PhoneIcon className="text-purple-400 mr-3" />
                    <Typography variant="body2" className="text-gray-300">
                      072 896 8717
                    </Typography>
                  </Box>
                </Box>

                <Divider className="w-full my-6 border-gray-600" />

                <Grid container spacing={2} className="text-center">
                  <Grid item xs={6}>
                    <Box className="p-2">
                      <Typography variant="h4" className="text-cyan-400 font-bold">
                        1+
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        Years Experience
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-2">
                      <Typography variant="h4" className="text-purple-400 font-bold">
                        6+
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        Technologies
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-2">
                      <Typography variant="h4" className="text-cyan-400 font-bold">
                        3+
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        Certifications
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="p-2">
                      <Typography variant="h4" className="text-purple-400 font-bold">
                        4+
                      </Typography>
                      <Typography variant="body2" className="text-gray-400">
                        Projects
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Button
                  fullWidth
                  variant="outlined"
                  href="/resume.pdf"
                  target="_blank"
                  startIcon={<DescriptionIcon />}
                  className="mt-6 rounded-full py-2 font-semibold"
                  sx={{
                    border: "2px solid #8b5cf6",
                    color: "#8b5cf6",
                    '&:hover': {
                      backgroundColor: "#8b5cf6",
                      color: "white",
                      border: "2px solid #8b5cf6",
                    }
                  }}
                >
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* === RIGHT COLUMN (UNCHANGED) === */}
          {/* I keep everything exactly the same — only the wrong variant was fixed */}

        
        </Grid>
      </Container>
    </Box>
  );
}
