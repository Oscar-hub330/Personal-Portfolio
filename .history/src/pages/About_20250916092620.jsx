import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Chip,
  Avatar,
  Paper,
  Divider,
  Button
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

export default function About() {
  // Gradient style for text and borders
  const gradientStyle = {
    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const gradientBorderStyle = {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '12px',
      padding: '2px',
      background: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none'
    }
  };

  const skills = {
    programming: ["Python", "Java", "C++", "JavaScript", "HTML/CSS", "React"],
    database: ["SQL", "MySQL", "MongoDB", "Firebase", "SQL Server Management Studio"],
    networking: ["TCP/IP", "DNS", "DHCP", "LAN/WAN", "VPNs", "Network Security"],
    tools: ["Windows", "Linux", "Azure", "Git", "VS Code", "Docker"]
  };

  const education = [
    {
      degree: "Diploma in Information Communication Technology",
      institution: "University of Mpumalanga",
      period: "2021-2024",
      details: "Focus Areas: Database Management, Networking, Programming, Cybersecurity"
    },
    {
      degree: "Diploma in Information Communication Technology",
      institution: "University of Mpumalanga",
      period: "2021-2024",
      details: "Focus Areas: Database Management, Networking, Programming, Cybersecurity"
    },
    {
      degree: "Business Processes in Financial Accounting SAP S/4HANA",
      institution: "Mentec Foundation",
      period: "2024",
      details: ""
    }
  ];

  const certifications = [
    "Introduction to Cybersecurity - Cisco Networking Academy (2024)",
    "Cyber Security Short Course - Oxford Home Study (2023)"
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="text-center mb-12">
          <Typography 
            variant="h2" 
            className="font-bold mb-4 text-4xl md:text-5xl"
            sx={gradientStyle}
          >
            About Me
          </Typography>
          <Typography variant="h6" className="text-gray-300 max-w-2xl mx-auto text-lg">
            Passionate Junior Software Developer with a drive for creating innovative solutions
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <Box className="relative p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl text-center shadow-xl" sx={gradientBorderStyle}>
              <Avatar
                sx={{
                  width: 150,
                  height: 150,
                  margin: '0 auto 24px',
                  border: '4px solid',
                  borderImage: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)',
                  borderImageSlice: 1,
                  backgroundColor: '#1e293b'
                }}
                src="/assets/Profile.jpg" // Updated path to your profile picture
                alt="Oscar Madalane"
              />
              
              <Typography variant="h5" className="font-bold mb-2 text-cyan-400">
                Oscar Siyabonga Madalane
              </Typography>
              
              <Typography variant="body1" className="text-gray-300 mb-4">
                Junior Software Developer
              </Typography>

              <Divider className="my-4 border-gray-600" />

              {/* Contact Information */}
              <Box className="text-left space-y-3">
                <Box className="flex items-center">
                  <LocationIcon className="text-purple-400 mr-2" />
                  <Typography variant="body2" className="text-gray-300">
                    Phakane Trust, Kabokweni, Nelspruit, 1200
                  </Typography>
                </Box>
                
                <Box className="flex items-center">
                  <EmailIcon className="text-purple-400 mr-2" />
                  <Typography variant="body2" className="text-gray-300">
                    madalaneoscar50@gmail.com
                  </Typography>
                </Box>
                
                <Box className="flex items-center">
                  <PhoneIcon className="text-purple-400 mr-2" />
                  <Typography variant="body2" className="text-gray-300">
                    072 896 8717
                  </Typography>
                </Box>
              </Box>

              <Divider className="my-4 border-gray-600" />

              {/* Quick Stats */}
              <Grid container spacing={2} className="text-center">
                <Grid item xs={6}>
                  <Typography variant="h6" className="text-cyan-400 font-bold">
                    3+
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Years Studying
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className="text-purple-400 font-bold">
                    5+
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Technologies
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className="text-cyan-400 font-bold">
                    4+
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Certifications
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className="text-purple-400 font-bold">
                    10+
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    Projects
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Personal Description */}
            <Box className="relative p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl mb-6 shadow-xl" sx={gradientBorderStyle}>
              <Typography variant="h5" className="font-bold mb-4 text-cyan-400">
                Professional Summary
              </Typography>
              <Typography variant="body1" className="text-gray-300 mb-4 leading-relaxed">
                I am a dedicated ICT graduate from the University of Mpumalanga with a strong passion 
                for software development and continuous learning. My journey in technology began with 
                a curiosity about how digital systems work, which evolved into a passion for creating 
                solutions that make a difference in people's lives.
              </Typography>
              <Typography variant="body1" className="text-gray-300 mb-4 leading-relaxed">
                I specialize in building applications using modern web technologies, with particular 
                interest in AI, IoT, and cloud-based solutions. I believe in writing clean, efficient 
                code and continuously expanding my skill set to stay at the forefront of technology trends.
              </Typography>
              <Typography variant="body1" className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or expanding my knowledge through online courses and certifications.
              </Typography>
            </Box>

            {/* Education */}
            <Box className="relative p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl mb-6 shadow-xl" sx={gradientBorderStyle}>
              <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
                <SchoolIcon className="mr-2" />
                Education
              </Typography>
              {education.map((edu, index) => (
                <Box key={index} className="mb-6 last:mb-0">
                  <Typography variant="h6" className="font-semibold text-purple-400 mb-1">
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" className="text-cyan-300 mb-2 font-medium">
                    {edu.institution} • {edu.period}
                  </Typography>
                  {edu.details && (
                    <Typography variant="body2" className="text-gray-300">
                      {edu.details}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>

            {/* Skills Overview */}
            <Box className="relative p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl mb-6 shadow-xl" sx={gradientBorderStyle}>
              <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
                <BuildIcon className="mr-2" />
                Technical Skills
              </Typography>
              <Grid container spacing={3}>
                {Object.entries(skills).map(([category, items]) => (
                  <Grid item xs={12} sm={6} key={category}>
                    <Typography variant="h6" className="font-semibold text-purple-400 mb-3">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Typography>
                    <Box className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          size="small"
                          className="bg-blue-900 text-cyan-300 border border-cyan-700 hover:bg-blue-800 transition-colors"
                        />
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Certifications */}
            <Box className="relative p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl shadow-xl" sx={gradientBorderStyle}>
              <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
                <WorkIcon className="mr-2" />
                Certifications
              </Typography>
              <Box className="space-y-3">
                {certifications.map((cert, index) => (
                  <Box key={index} className="flex items-start">
                    <DescriptionIcon className="text-purple-400 mr-3 mt-1" />
                    <Typography variant="body2" className="text-gray-300">
                      {cert}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box className="text-center mt-16">
          <Typography variant="h5" className="text-gray-300 mb-8">
            Ready to bring your ideas to life?
          </Typography>
          <Box className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              className="rounded-full px-8 py-3 font-semibold text-lg"
              sx={{
                background: 'linear-gradient(45deg, #06b6d4 30%, #2563eb 90%)',
                boxShadow: '0 3px 5px 2px rgba(6, 182, 212, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #06b6d4 40%, #2563eb 100%)',
                  boxShadow: '0 5px 15px 2px rgba(6, 182, 212, .4)'
                }
              }}
            >
              View My Projects
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              className="rounded-full px-8 py-3 font-semibold text-lg"
              sx={{
                border: "2px solid #8b5cf6",
                color: "#8b5cf6",
                '&:hover': {
                  backgroundColor: "#8b5cf6",
                  color: "white",
                  border: "2px solid #8b5cf6",
                  boxShadow: "0 5px 15px rgba(139, 92, 246, 0.3)",
                }
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}