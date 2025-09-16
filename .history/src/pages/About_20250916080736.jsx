import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  Avatar,
  Paper,
  Divider
} from "@mui/material";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon
} from "@mui/icons-material";

export default function About() {
  // Gradient style for text
  const gradientStyle = {
    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
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
    <Container maxWidth="lg" className="py-16">
      {/* Header Section */}
      <Box className="text-center mb-12">
        <Typography 
          variant="h2" 
          className="font-bold mb-4"
          sx={gradientStyle}
        >
          About Me
        </Typography>
        <Typography variant="h6" className="text-gray-300 max-w-2xl mx-auto">
          Passionate Junior Software Developer with a drive for creating innovative solutions
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Profile Section */}
        <Grid item xs={12} md={4}>
          <Paper className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-gray-700 rounded-xl text-center">
            <Avatar
              sx={{
                width: 150,
                height: 150,
                margin: '0 auto 24px',
                border: '4px solid',
                borderImage: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)',
                borderImageSlice: 1
              }}
              src="/profile-picture.jpg" // Replace with your actual profile picture path
              alt="Oscar Madalane"
            >
              OS
            </Avatar>
            
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
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Personal Description */}
          <Paper className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-gray-700 rounded-xl mb-6">
            <Typography variant="h5" className="font-bold mb-4 text-cyan-400">
              Professional Summary
            </Typography>
            <Typography variant="body1" className="text-gray-300 mb-4">
              I am a dedicated ICT graduate from the University of Mpumalanga with a strong passion 
              for software development and continuous learning. My journey in technology began with 
              a curiosity about how digital systems work, which evolved into a passion for creating 
              solutions that make a difference in people's lives.
            </Typography>
            <Typography variant="body1" className="text-gray-300 mb-4">
              I specialize in building applications using modern web technologies, with particular 
              interest in AI, IoT, and cloud-based solutions. I believe in writing clean, efficient 
              code and continuously expanding my skill set to stay at the forefront of technology trends.
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or expanding my knowledge through online courses and certifications.
            </Typography>
          </Paper>

          {/* Education */}
          <Paper className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-gray-700 rounded-xl mb-6">
            <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
              <SchoolIcon className="mr-2" />
              Education
            </Typography>
            {education.map((edu, index) => (
              <Box key={index} className="mb-4 last:mb-0">
                <Typography variant="h6" className="font-semibold text-purple-400">
                  {edu.degree}
                </Typography>
                <Typography variant="body2" className="text-gray-400 mb-1">
                  {edu.institution} • {edu.period}
                </Typography>
                {edu.details && (
                  <Typography variant="body2" className="text-gray-300">
                    {edu.details}
                  </Typography>
                )}
              </Box>
            ))}
          </Paper>

          {/* Skills Overview */}
          <Paper className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-gray-700 rounded-xl mb-6">
            <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
              <BuildIcon className="mr-2" />
              Technical Skills
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(skills).map(([category, items]) => (
                <Grid item xs={12} sm={6} key={category}>
                  <Typography variant="h6" className="font-semibold text-purple-400 mb-2">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                  <Box className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        size="small"
                        className="bg-blue-900 text-cyan-300 border border-cyan-700"
                      />
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Certifications */}
          <Paper className="p-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-gray-700 rounded-xl">
            <Typography variant="h5" className="font-bold mb-4 text-cyan-400 flex items-center">
              <WorkIcon className="mr-2" />
              Certifications
            </Typography>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box className="text-center mt-16">
        <Typography variant="h5" className="text-gray-300 mb-6">
          Ready to bring your ideas to life?
        </Typography>
        <Box className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            View My Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </Box>
      </Box>
    </Container>
  );
}