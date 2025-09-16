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
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Security as SecurityIcon,
  Cloud as CloudIcon,
  School as EducationIcon,
  Work as ExperienceIcon
} from "@mui/icons-material";

export default function About() {
  const theme = useTheme();
  const isMobile is  = useMediaQuery(theme.breakpoints.down("md"));

  // Gradient style for text
  const gradientStyle = {
    background: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  // Skill categories
  const skillCategories = [
    {
      title: "Programming",
      icon: <CodeIcon sx={{ fontSize: 40, ...gradientStyle }} />,
      skills: ["Python", "Java", "C++", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Database",
      icon: <DatabaseIcon sx={{ fontSize: 40, ...gradientStyle }} />,
      skills: ["SQL", "MySQL", "MongoDB", "Firebase", "SSMS"]
    },
    {
      title: "Networking",
      icon: <CloudIcon sx={{ fontSize: 40, ...gradientStyle }} />,
      skills: ["TCP/IP", "DNS", "DHCP", "LAN/WAN", "VPNs"]
    },
    {
      title: "Cybersecurity",
      icon: <SecurityIcon sx={{ fontSize: 40, ...gradientStyle }} />,
      skills: ["Network Security", "Vulnerability Analysis", "Security Protocols"]
    }
  ];

  return (
    <Box 
      id="about"
      className="min-h-screen py-16 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="text-center mb-16">
          <Typography 
            variant="h2" 
            className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-4xl md:text-5xl"
            sx={gradientStyle}
          >
            About Me
          </Typography>
          <Typography variant="h6" className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            Passionate Junior Software Developer with a focus on creating innovative solutions 
            using modern technologies
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Introduction Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="font-semibold mb-6" sx={gradientStyle}>
              My Journey
            </Typography>
            <Typography variant="body1" className="text-gray-300 mb-4 text-lg">
              I'm a dedicated ICT graduate from the University of Mpumalanga with a strong passion 
              for software development and continuous learning. My journey in technology began 
              with a curiosity about how things work, which evolved into a passion for creating 
              solutions that make a difference.
            </Typography>
            <Typography variant="body1" className="text-gray-300 mb-4 text-lg">
              I specialize in building applications that leverage modern web technologies, 
              with particular interest in AI, IoT, and cloud-based solutions. I believe in 
              writing clean, efficient code and continuously expanding my skill set to stay 
              at the forefront of technology trends.
            </Typography>
            <Typography variant="body1" className="text-gray-300 text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or expanding my knowledge through online courses and certifications.
            </Typography>

            {/* Education & Experience Highlights */}
            <Box className="mt-10">
              <Box className="flex items-center mb-4">
                <EducationIcon sx={{ ...gradientStyle, mr: 2, fontSize: 30 }} />
                <Typography variant="h5" className="font-semibold" sx={gradientStyle}>
                  Education
                </Typography>
              </Box>
              <Box className="ml-8">
                <Typography variant="h6" className="font-medium text-cyan-400">
                  Diploma in Information Communication Technology
                </Typography>
                <Typography variant="body2" className="text-gray-400 mb-2">
                  University of Mpumalanga • 2021-2024
                </Typography>
                <Typography variant="body2" className="text-gray-300">
                  Focus Areas: Database Management, Networking, Programming, Cybersecurity
                </Typography>
              </Box>

              <Box className="flex items-center mt-8 mb-4">
                <ExperienceIcon sx={{ ...gradientStyle, mr: 2, fontSize: 30 }} />
                <Typography variant="h5" className="font-semibold" sx={gradientStyle}>
                  Certifications
                </Typography>
              </Box>
              <Box className="ml-8">
                <Typography variant="body2" className="text-gray-300">
                  • Business Processes in Financial Accounting SAP S/4HANA (Mentec Foundation, 2024)
                </Typography>
                <Typography variant="body2" className="text-gray-300">
                  • Introduction to Cybersecurity (Cisco Networking Academy, 2024)
                </Typography>
                <Typography variant="body2" className="text-gray-300">
                  • Cyber Security Short Course (Oxford Home Study, 2023)
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="font-semibold mb-8 text-center" sx={gradientStyle}>
              Technical Skills
            </Typography>
            
            <Grid container spacing={4}>
              {skillCategories.map((category, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card className="h-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-gray-700 rounded-xl shadow-lg">
                    <CardContent className="text-center">
                      <Box className="mb-4">
                        {category.icon}
                      </Box>
                      <Typography variant="h6" className="font-semibold mb-4 text-cyan-400">
                        {category.title}
                      </Typography>
                      <Box className="flex flex-wrap justify-center gap-2">
                        {category.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            className="bg-blue-900 text-cyan-300 border border-cyan-700"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Soft Skills */}
            <Box className="mt-12">
              <Typography variant="h5" className="font-semibold mb-6 text-center" sx={gradientStyle}>
                Soft Skills
              </Typography>
              <Box className="flex flex-wrap justify-center gap-3">
                {[
                  "Problem Solving", "Adaptability", "Team Collaboration", 
                  "Communication", "Attention to Detail", "Time Management",
                  "Continuous Learning", "Critical Thinking"
                ].map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    className="text-cyan-300 border-purple-700"
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box className="text-center mt-16">
          <Typography variant="h5" className="text-gray-300 mb-6">
            Interested in working together?
          </Typography>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-semibold"
            style={{
              boxShadow: "0 3px 5px 2px rgba(147, 51, 234, 0.1)",
            }}
          >
            Get In Touch
          </a>
        </Box>
      </Container>
    </Box>
  );
}