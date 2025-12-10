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

// Import your profile picture
import ProfilePicture from "../assets/Profile.jpg";

export default function About() {
  // Gradient style for text
  const gradientStyle = {
    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // Gradient border style for cards
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
      details: ""
    }
  ];

  const certifications = [
    "Introduction to Cybersecurity - Cisco Networking Academy (2024)",
    "Cyber Security Short Course - Oxford Home Study (2023)"
  ];

  return (
    <Box className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16 px-4">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="text-center mb-12">
          <Typography 
            variant="h2" 
            className="font-bold mb-4"
            sx={{
              ...gradientStyle,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            About Me
          </Typography>
          <Typography variant="h6" className="text-gray-300 max-w-2xl mx-auto text-lg">
            Passionate Software Developer with a drive for creating innovative solutions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Column - Profile Card */}
          <Grid item xs={12} md={4}>
            <Card sx={gradientBorderStyle} className="h-full bg-[#0f172a] shadow-2xl overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center">
                {/* Profile Image */}
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
                
                {/* Name and Title */}
                <Typography variant="h4" className="font-bold text-center mb-2 text-cyan-400">
                  Oscar Siyabonga Madalane
                </Typography>
                <Typography variant="body1" className="text-gray-300 mb-6 text-center">
                  Frontend Developer
                </Typography>

                <Divider className="w-full my-4 border-gray-600" />

                {/* Contact Information */}
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

                {/* Quick Stats */}
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

          {/* Right Column - Content */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {/* Professional Summary */}
              <Grid item xs={12}>
                <Card sx={gradientBorderStyle} className="bg-[#0f172a] shadow-xl">
                  <CardContent className="p-6">
                    <Typography variant="h4" className="font-bold mb-4 text-cyan-400">
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
                  </CardContent>
                </Card>
              </Grid>

              {/* Education & Certifications */}
              <Grid item xs={12} md={6}>
                <Card sx={gradientBorderStyle} className="h-full bg-[#0f172a] shadow-xl">
                  <CardContent className="p-6">
                    <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
                      <SchoolIcon className="mr-2" />
                      Education
                    </Typography>
                    {education.map((edu, index) => (
                      <Box key={index} className="mb-5 last:mb-0">
                        <Typography variant="h6" className="font-semibold text-purple-400 mb-1">
                          {edu.degree}
                        </Typography>
                        <Typography variant="body2" className="text-cyan-300 mb-2 font-medium">
                          {edu.institution} • {edu.period}
                        </Typography>
                        {edu.details && (
                          <Typography variant="body2" className="text-gray-300 text-sm">
                            {edu.details}
                          </Typography>
                        )}
                      </Box>
                    ))}
                    
                    <Divider className="my-6 border-gray-600" />
                    
                    <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
                      <WorkIcon className="mr-2" />
                      Certifications
                    </Typography>
                    <Box className="space-y-3">
                      {certifications.map((cert, index) => (
                        <Box key={index} className="flex items-start">
                          <DescriptionIcon className="text-purple-400 mr-3 mt-0.5" />
                          <Typography variant="body2" className="text-gray-300">
                            {cert}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Skills */}
              <Grid item xs={12} md={6}>
                <Card sx={gradientBorderStyle} className="h-full bg-[#0f172a] shadow-xl">
                  <CardContent className="p-6">
                    <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
                      <BuildIcon className="mr-2" />
                      Technical Skills
                    </Typography>
                    <Box className="space-y-5">
                      {Object.entries(skills).map(([category, items]) => (
                        <Box key={category}>
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
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Call to Action */}
            <Box className="text-center mt-8">
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
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}